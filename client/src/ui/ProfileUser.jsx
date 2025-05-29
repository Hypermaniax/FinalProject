import { Link, Outlet } from "react-router-dom";
import damn from "../assets/damn.png";

export default function ProfileUser({menu,user}) {
  return (
    <>
    <div className="col-span-1 p-3 h-fit rounded-xl bg-white">
      <div className="col-span-1 items-center grid grid-cols-2 ">
        <div className="col-span-1 ">
          <img
            src={damn}
            alt=""
            className="w-28 h-28 rounded-full object-center "
          />
        </div>
        <div className="col-span-1">
          <p className="font-bold">{user.name}</p>
          <p className="text-xs">Since {user.crea}</p>
        </div>
      </div>
      <div className="mt-10 mx-auto">
        <ul className="space-y-6 ">
          {menu.map((item,index) => (
            <Link to={item.path} key={index} className="flex gap-5 mx-7">
              <item.icon /> <span className="text-base">{item.label}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
    <div className="col-span-3">
      <Outlet/>
    </div>
    </>
  );
}
