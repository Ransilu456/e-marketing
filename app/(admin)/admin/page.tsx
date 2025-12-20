import { Card } from '@/components/card/admin/PersonCard';

export default function Page() {
  const employees = [
    {
      name: "Keshan Ransilu",
      email: "keshan@gmail.com",
      role: "Senior Software Engineer",
      variant: "secondary",
      status: "active",
    },
    {
      name: "Sineth Maleesha",
      email: "sineth@gmail.com",
      role: "Social Media Handler",
      variant: "primary",
      status: "on-leave",
    },
    {
      name: "Nadeesha Perera",
      email: "nadeesha@gmail.com",
      role: "HR Manager",
      variant: "green",
      status: "active",
    },
    {
      name: "Amal Jayasinghe",
      email: "amal@gmail.com",
      role: "Frontend Developer",
      variant: "primary",
      status: "inactive",
    },
    {
      name: "Saman Wickramasinghe",
      email: "saman@gmail.com",
      role: "Backend Developer",
      variant: "secondary",
      status: "active",
    },
    {
      name: "Dilani Fernando",
      email: "dilani@gmail.com",
      role: "UI/UX Designer",
      variant: "green",
      status: "on-leave",
    },
  ];

  return (
    <main className="w-full bg-gray-50 px-8 pb-12 pt-8">
      {/* HEADER */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Employee Management
        </h1>
        <p className="text-gray-600 mt-2">
          Manage employee profiles, roles, and performance overview
        </p>
      </header>

      {/* STATS */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow hover:shadow-lg  transition-all">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v2H3a1 1 0 000 2h1v6a1 1 0 001 1h10a1 1 0 001-1v-6h1a1 1 0 100-2h-1V8a6 6 0 00-6-6z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Employees</p>
            <h2 className="text-2xl font-bold text-gray-900">{employees.length}</h2>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow hover:shadow-lg  transition-all">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a1 1 0 000 2h12a1 1 0 100-2H4zM3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 000 2h12a1 1 0 100-2H4zm-1 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Departments</p>
            <h2 className="text-2xl font-bold text-gray-900">5</h2>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow hover:shadow-lg  transition-all">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V5a1 1 0 112 0v4a1 1 0 01-1 1h-1zm0 4a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Active Staff</p>
            <h2 className="text-2xl font-bold text-gray-900">
              {Math.floor((employees.filter(e => e.status === "active").length / employees.length) * 100)}%
            </h2>
          </div>
        </div>
      </section>


      {/* EMPLOYEE LIST */}
      <section className='mb-12'>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Employees
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((emp, index) => (
            <Card
              key={index}
              email={emp.email}
              name={emp.name}
              role={emp.role}
              variant={emp.variant as "primary" | "secondary" | "green"}
              initialStatus={emp.status as "active" | "on-leave" | "inactive"}
            />
          ))}
        </div>
      </section>

    </main>
  );
}
