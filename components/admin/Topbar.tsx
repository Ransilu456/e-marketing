export default function AdminTopbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-30">
      <h2 className="font-semibold text-gray-800">
        HR Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Admin
        </span>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
