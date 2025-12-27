import {
  Users,
  Layers,
  CalendarCheck,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

export default function Page() {
  return (
    <main className="w-full bg-gray-50 px-8 pb-12 pt-8 min-h-screen">
      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Employee Management
        </h1>
        <p className="text-gray-600 mt-2">
          Manage employee profiles, roles, and performance overview
        </p>
      </header>

      {/* STATS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard
          title="Total Employees"
          value="128"
          icon={Users}
        />
        <StatCard
          title="Departments"
          value="8"
          icon={Layers}
        />
        <StatCard
          title="Active Projects"
          value="14"
          icon={Briefcase}
        />
        <StatCard
          title="Attendance Today"
          value="96%"
          icon={CalendarCheck}
        />
      </section>

      {/* CONTENT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* RECENT ACTIVITY */}
          <Card title="Recent Activity">
            <ul className="space-y-4">
              {[
                "John Doe added to Engineering",
                "New project deployed",
                "Attendance report updated",
                "HR policy updated",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between text-sm text-gray-600"
                >
                  <span>{item}</span>
                  <ArrowUpRight size={14} />
                </li>
              ))}
            </ul>
          </Card>

          {/* QUICK ACTIONS */}
          <Card title="Quick Actions">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <QuickAction label="Add Employee" />
              <QuickAction label="Create Project" />
              <QuickAction label="Mark Attendance" />
              <QuickAction label="View Reports" />
            </div>
          </Card>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* OVERVIEW */}
          <Card title="Overview">
            <p className="text-sm text-gray-600 leading-relaxed">
              Employee engagement and productivity have improved by
              <span className="font-semibold text-gray-900"> 12% </span>
              compared to last month. Attendance remains stable with
              consistent department participation.
            </p>
          </Card>

          {/* SYSTEM STATUS */}
          <Card title="System Status">
            <Status label="HR System" status="Operational" />
            <Status label="Attendance Service" status="Operational" />
            <Status label="Payroll Sync" status="Delayed" />
          </Card>
        </div>
      </section>
    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function StatCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">
          {title}
        </p>
        <Icon className="w-4 h-4 text-gray-400" />
      </div>
      <h3 className="mt-2 text-2xl font-semibold text-gray-900">
        {value}
      </h3>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        {title}
      </h3>
      {children}
    </div>
  );
}

function QuickAction({ label }: { label: string }) {
  return (
    <button className="
      rounded-lg border border-gray-200
      py-3 text-sm font-medium
      text-gray-700
      hover:bg-gray-100
      transition-colors
    ">
      {label}
    </button>
  );
}

function Status({
  label,
  status,
}: {
  label: string;
  status: "Operational" | "Delayed";
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-600">
        {label}
      </span>
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-full ${
          status === "Operational"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
