import WrapperContent from "../../ui/WrapperContent";
import {
  BookText,
  LogOut,
  Cog,
  Repeat,
  BookHeart,
  ScrollText,
} from "lucide-react";
import ProfileUser from "../../ui/ProfileUser";
import DashboardGuest from "../../ui/DashboardGuest";
import { Route, Routes } from "react-router-dom";
import Wishlist from "../../ui/WishList";
import AccountSetting from "../../ui/AccountSetting";
import { useContext } from "react";
import { AuthContext } from "../../routes/AuthContext";
import RequestToBook from "../../ui/RequestTobook";

const menus = [
  { label: "My Booking", icon: BookText, path: "bookings" },
  { label: "My Wishlist", icon: BookHeart, path: "wishlist" },
  { label: "My Transaction", icon: ScrollText, path: "transaction" },
  { label: "Account Setting", icon: Cog, path: "account" },
  { label: "Log Out", icon: LogOut, path: "logout" },
];

export default function Bookings() {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <WrapperContent>
      <div className="grid-cols-4  gap-16 mt-10 grid">
        <Routes>
          <Route
            path="/"
            element={<ProfileUser menu={menus} user={user} />}
          >
            <Route
              path="bookings"
              element={<DashboardGuest listingCard={user?.bookings} />}
            />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="transaction" element={<>Transaction</>} />
            <Route path="account" element={<AccountSetting />} />
            <Route path="logout" element={<>logout</>} />
            <Route path="payment-bookings" element={<RequestToBook />} />
          </Route>
        </Routes>
      </div>
    </WrapperContent>
  );
}
