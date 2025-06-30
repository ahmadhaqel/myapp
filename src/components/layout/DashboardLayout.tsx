import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar  from "./Topbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* left nav */}
      <Sidebar />

      {/* main scrollable column */}
      <div className="flex flex-1 flex-col">
        <Topbar />

        {/* page body */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
