import { Outlet } from "react-router-dom";
import SidebarHost from "../ui/SidebarHost";
import ProtectedRoutesProvider from "../routes/ProtectedRoute";

export default function DashboardLayout() {
  return (
    // <ProtectedRoutesProvider riderect={'/host'}>
    <div className="grid grid-cols-8">
      <SidebarHost />
      <div className="grid col-span-7 bg-[#fff] p-11">
        <Outlet />
      </div>
    </div>
    // </ProtectedRoutesProvider>
  );
}
