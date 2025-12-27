import { Bell, Search } from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-30">
      <h2 className="font-semibold text-gray-800">
        HR Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <div className="hidden md:flex items-center h-8 px-3 gap-2 rounded-full bg-neutral-100  border border-neutral-200 text-neutral-400 hover:border-neutral-300 transition-colors cursor-text w-48 group">
          <Search size={14} className="group-hover:text-neutral-600  transition-colors" />
          <span className="text-xs flex-1">Search...</span>
          <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-neutral-200  bg-white  px-1.5 font-mono text-[10px] font-medium text-neutral-500 ">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>

        <div className="w-px h-4 bg-neutral-200  mx-1"></div>

              <button className="relative p-2 rounded-full text-neutral-500 hover:text-neutral-900  hover:bg-neutral-100  transition-colors">
                <Bell size={18} strokeWidth={1.5} />
                <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>

        <span className="text-sm text-gray-600">
          Admin
        </span>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
