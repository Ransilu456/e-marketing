"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Layers, CalendarCheck, Settings, LogOut, LayoutDashboard } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/admin/", icon: LayoutDashboard },
  { label: "Employees", href: "/admin/employees", icon: Users },
  { label: "Departments", href: "/admin/departments", icon: Layers },
  { label: "Projects", href: "/admin/projects", icon: Users },
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
        <p className=" text-[10px] font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
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
                transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)]
                ${active
                  ? "bg-red-50 text-red-700 "
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <Icon
                className={`w-4 h-4 shrink-0 ${active ? "text-red-600" : "text-gray-400 group-hover:text-gray-600"
                  }`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="border-t border-gray-300/50 px-6 py-4">

        <div className="w-full mb-2 rounded-xl bg-white border border-neutral-200   overflow-hidden z-50 p-1">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors ">
            <LogOut size={14} />
            Log Out
          </button>
          <div>
          </div>
        </div>

        {/* <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} E Marketing Paradice
        </p> */}
      </div>
    </aside>
  );
}
