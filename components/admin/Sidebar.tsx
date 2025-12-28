"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  Layers,
  CalendarCheck,
  Settings,
  LogOut,
  LayoutDashboard,
  ChevronRight,
  Clock,
  Rocket,
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  href?: string;
  icon: React.ElementType;
  children?: {
    label: string;
    href: string;
    icon: React.ElementType;
  }[];
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Employees", href: "/employees", icon: Users },
  { label: "Departments", href: "/", icon: Layers },
  {
    label: "Projects",
    icon: Users,
    children: [
      { label: "Ongoing", href: "/", icon: Clock },
      { label: "Deployed", href: "/", icon: Rocket },
    ],
  },
  { label: "Attendance", href: "/", icon: CalendarCheck },
  { label: "Settings", href: "/", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-linear-to-b from-white to-gray-50 border-r border-gray-200 flex flex-col">
      {/* HEADER */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
          Admin Panel
        </h1>
        <p className="mt-0.5 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
          HR Management
        </p>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-3 py-4 space-y-2">
        {navItems.map((item) => {
          const hasChildren = !!item.children;
          const isChildActive =
            hasChildren &&
            item.children!.some((c) => pathname.startsWith(c.href));
          const isOpen = openMenu === item.label || isChildActive;
          const Icon = item.icon;

          return (
            <div key={item.label}>
              {/* MAIN ITEM */}
              {item.href ? (
                <Link
                  href={item.href}
                  className={`
                    relative group flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all
                    ${
                      pathname === item.href
                        ? "bg-red-50 text-red-700 shadow-sm"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {pathname === item.href && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-red-500" />
                  )}

                  <Icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() =>
                    setOpenMenu(isOpen ? null : item.label)
                  }
                  className={`
                    relative w-full flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all
                    ${
                      isChildActive
                        ? "bg-red-50 text-red-700 shadow-sm"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {isChildActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-red-500" />
                  )}

                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="flex-1 text-left">
                    {item.label}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
              )}

              {/* SUB MENU */}
              {hasChildren && isOpen && (
                <div className="relative mt-2 ml-6 pl-4 space-y-1">
                  {/* Vertical connector */}
                  <span className="absolute left-1 top-0 bottom-0 w-px bg-gray-200" />

                  {item.children!.map((child) => {
                    const active = pathname === child.href;
                    const ChildIcon = child.icon;

                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`
                          flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all
                          ${
                            active
                              ? "bg-red-100 text-red-700"
                              : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                          }
                        `}
                      >
                        <ChildIcon
                          className={`w-3.5 h-3.5 ${
                            active
                              ? "text-red-600"
                              : "text-gray-400"
                          }`}
                        />
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="border-t border-gray-200 px-4 py-4">
        <button
          className="
            w-full flex items-center justify-center gap-2
            rounded-xl border border-red-200
            px-3 py-2.5 text-xs font-semibold
            text-red-600
            hover:bg-red-50 hover:border-red-300
            transition-all
          "
        >
          <LogOut size={14} />
          Log Out
        </button>
      </div>
    </aside>
  );
}
