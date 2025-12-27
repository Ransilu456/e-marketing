"use client";

import { Bell, Search } from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="
      sticky top-0 z-30 h-16
      bg-white/80 backdrop-blur
      border-b border-gray-200
      flex items-center justify-between
      px-8
    ">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-semibold text-gray-900 tracking-tight">
          HR Dashboard
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* SEARCH */}
        <div className="
          hidden md:flex items-center
          h-9 px-3 gap-2
          rounded-full
          bg-neutral-100 border border-neutral-200
          text-neutral-400
          hover:border-neutral-300
          transition-all
          cursor-text
          w-56
          group
        ">
          <Search
            size={14}
            className="group-hover:text-neutral-600 transition-colors"
          />

          <span className="text-xs flex-1 select-none">
            Search…
          </span>

          <kbd className="
            hidden sm:inline-flex h-5 items-center gap-1
            rounded border border-neutral-200 bg-white
            px-1.5 font-mono text-[10px] font-medium text-neutral-500
          ">
            ⌘ K
          </kbd>
        </div>

        {/* DIVIDER */}
        <div className="hidden sm:block w-px h-5 bg-neutral-200" />

        {/* NOTIFICATION */}
        <button
          className="
            relative p-2 rounded-full
            text-neutral-500
            hover:text-neutral-900 hover:bg-neutral-100
            transition-colors
          "
        >
          <Bell size={18} strokeWidth={1.5} />
          <span className="
            absolute top-2 right-2.5
            w-1.5 h-1.5 rounded-full
            bg-red-500
            ring-2 ring-white
          " />
        </button>

        {/* USER */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:block text-sm font-medium text-gray-700">
            Admin
          </span>

          <div className="
            w-8 h-8 rounded-full
            bg-linear-to-br from-gray-300 to-gray-400
            flex items-center justify-center
            text-xs font-semibold text-white
            select-none
          ">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
