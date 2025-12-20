import AdminSidebar from "@/components/admin/Sidebar";
import AdminTopbar from "@/components/admin/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <AdminSidebar />

      <div className="flex-1 ml-64">
        <AdminTopbar />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
