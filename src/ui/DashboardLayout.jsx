import { Outlet } from "react-router-dom";
import SidebarHost from "../ui/SidebarHost";
import ProtectedRoute from "../routes/ProtectRoute";

export default function DashboardLayout() {
  return (
    <ProtectedRoute role={'Host'}>
      <div className="grid grid-cols-8">
        <SidebarHost />
        <div className="grid col-span-7 bg-white p-11">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
}
