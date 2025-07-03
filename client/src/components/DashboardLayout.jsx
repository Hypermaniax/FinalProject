import { Outlet } from "react-router-dom";
import SidebarHost from "./SidebarHost";
import ProtectedRoute from "../routes/protected/ProtectRoute";

export default function DashboardLayout() {
  return (
    <ProtectedRoute role={'host'}>
      <div className="grid grid-cols-8">
        <SidebarHost />
        <div className="grid col-span-7 bg-white p-11">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
}
