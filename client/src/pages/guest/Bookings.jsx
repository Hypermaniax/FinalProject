import WrapperContent from "../../components/WrapperContent";
import ProfileUser from "../../components/ProfileUser";
import { Outlet, } from "react-router-dom";


export default function Bookings() {
  return (
    <WrapperContent>
      <div className="md:grid md:grid-cols-4 md:gap-16 md:mt-10">
          <div className="md:col-span-1">
            <ProfileUser />
          </div>
          <div className="md:col-span-3">
            <Outlet />
          </div>
        </div>
    </WrapperContent>
  );
}

