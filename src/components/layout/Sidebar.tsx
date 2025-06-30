import { NavLink } from "react-router-dom";
import { cn }      from "../../utils";
import { LayoutDashboard, FileText } from "lucide-react";  // requires lucide-react

export default function Sidebar() {
  return (
    <aside className="hidden w-56 flex-col border-r bg-white p-6 sm:flex">
      <div className="mb-10 text-xl font-extrabold text-blue-600">
        Deema
      </div>

      <nav className="space-y-4">
        <NavItem to="/dashboard" icon={<LayoutDashboard size={18} />}>
          Overview
        </NavItem>
        <NavItem to="/dashboard/analyze" icon={<FileText size={18} />}>
          Analyze Resumés
        </NavItem>
      </nav>
    </aside>
  );
}

function NavItem({
  to,
  icon,
  children,
}: {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded px-3 py-2 text-sm font-medium",
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-slate-600 hover:bg-slate-100"
        )
      }
      end
    >
      {icon}
      {children}
    </NavLink>
  );
}
