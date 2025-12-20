"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  Layers,
  CalendarCheck,
  Settings,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: "Employees", href: "/admin", icon: Users },
  { label: "Departments", href: "/admin/departments", icon: Layers },
  { label: "Attendance", href: "/admin/attendance", icon: CalendarCheck },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 flex flex-col">

      <div className="px-6 py-5 border-b border-gray-300/50">
        <h1 className="text-lg font-semibold tracking-tight text-gray-900">
          Admin Panel
        </h1>
        <p className="text-xs text-gray-500 mt-0.5">
          HR Management
        </p>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
                transition-all
                ${active
                  ? "bg-red-50 text-red-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <Icon
                className={`w-4 h-4 shrink-0 ${
                  active ? "text-red-600" : "text-gray-400 group-hover:text-gray-600"
                }`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="border-t border-gray-300/50 px-6 py-4">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} E Marketing Paradice
        </p>
      </div>
    </aside>
  );
}
