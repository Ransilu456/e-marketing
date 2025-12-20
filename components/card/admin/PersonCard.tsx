'use client'

import { AlarmCheck, Menu, Eye, Pencil, UserX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface CardProps {
  name: string;
  email: string;
  role?: string;
  variant?: "primary" | "secondary" | "green";
  initialStatus?: "active" | "on-leave" | "inactive";
}

const VARIANT_STYLES = {
  primary: {
    ring: "ring-blue-200",
    bar: "bg-blue-500",
    badge: "bg-blue-50 text-blue-700",
    footer: "text-blue-700",
  },
  secondary: {
    ring: "ring-violet-200",
    bar: "bg-violet-500",
    badge: "bg-violet-50 text-violet-700",
    footer: "text-violet-700",
  },
  green: {
    ring: "ring-green-200",
    bar: "bg-green-500",
    badge: "bg-green-50 text-green-700",
    footer: "text-green-700",
  },
};

export function Card({
  name,
  email,
  role = "DEVELOPER",
  variant = "primary",
  initialStatus = "active",
}: CardProps) {
  const styles = VARIANT_STYLES[variant];
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState(initialStatus);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const statusBadge = () => {
    switch (status) {
      case "active":
        return "bg-green-50 text-green-700";
      case "on-leave":
        return "bg-yellow-50 text-yellow-700";
      case "inactive":
        return "bg-red-50 text-red-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  const handleAction = (action: "view" | "edit" | "toggleStatus") => {
    setMenuOpen(false);
    if (action === "toggleStatus") {
      setStatus(prev => (prev === "inactive" ? "active" : "inactive"));
    }
    // Add logic for view/edit as needed
  };

  return (
    <div className="relative w-[360px] h-[430px] bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between">

      {/* HEADER */}
      <header className="flex justify-between items-center p-4">
        <span className={`text-xs font-medium px-3 py-1 rounded-full w-max ${statusBadge()}`}>
          {status === "active" ? "Active" : status === "on-leave" ? "On Leave" : "Inactive"}
        </span>

        <div ref={menuRef} className="relative">
          <Menu
            size={22}
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer text-gray-500 hover:text-gray-800"
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
              <button
                onClick={() => handleAction("view")}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Eye size={16} className="text-gray-500" /> View Profile
              </button>
              <button
                onClick={() => handleAction("edit")}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Pencil size={16} className="text-gray-500" /> Edit Employee
              </button>
              <button
                onClick={() => handleAction("toggleStatus")}
                className={`flex items-center gap-2 w-full px-4 py-2 text-sm transition-colors
                  ${status === "inactive" ? "text-green-600 hover:bg-green-50 hover:text-green-700" : "text-red-600 hover:bg-red-50 hover:text-red-700"}`}
              >
                <UserX size={16} /> {status === "inactive" ? "Activate" : "Deactivate"}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* CONTENT */}
      <section className="flex flex-col items-center text-center px-6 gap-6">
        <div className={`w-[140px] h-[140px] rounded-full bg-gray-100 ring-4 ${styles.ring}`} />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-500 mt-1">{email}</p>
          <span className={`inline-block mt-3 text-xs px-3 py-1 rounded-full ${styles.badge}`}>
            {role}
          </span>
        </div>
        <div className="w-full flex items-center gap-3">
          <AlarmCheck size={18} className="text-gray-400" />
          <div className="flex w-full gap-2">
            <div className={`h-2 flex-1 rounded-full ${styles.bar}`} />
            <div className={`h-2 flex-1 rounded-full ${styles.bar} opacity-70`} />
            <div className={`h-2 flex-1 rounded-full ${styles.bar} opacity-40`} />
          </div>
          <span className="text-sm text-gray-500">100%</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-4 text-center">
        <p className={`text-sm font-medium uppercase tracking-wide ${styles.footer}`}>
          Employee
        </p>
      </footer>
    </div>
  );
}
