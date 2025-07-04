import WrapperContent from "../../components/WrapperContent";
import ProfileUser from "../../components/ProfileUser";
import { Outlet, } from "react-router-dom";


export default function Bookings() {
  return (
    <WrapperContent>
      <div className="grid-cols-4 gap-16 mt-10 grid">
        <ProfileUser />
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </WrapperContent>
  );
}

