import WrapperContent from "../../components/WrapperContent";
import ProfileUser from "../../components/ProfileUser";
import DashboardGuest from "../../components/DashboardGuest";
import { Route, Routes } from "react-router-dom";
import Wishlist from "../../components/WishList";
import AccountSetting from "../../components/AccountSetting";
import RequestToBook from "../../components/RequestTobook";
import UsePaymentCreate from "../../hooks/payment/UsePaymentCreate";
import MyTransaction from "../../components/MyTransaction";

export default function Bookings() {
  const { setbookingData, setSelectedMethod, obj } = UsePaymentCreate();
  
  return (
    <WrapperContent>
      <div className="grid-cols-4  gap-16 mt-10 grid">
        <Routes>
          <Route path="/" element={<ProfileUser />}>
            <Route
              path="bookings"
              element={<DashboardGuest handleClick={setbookingData} />}
            />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="transaction" element={<MyTransaction/>} />
            <Route path="account" element={<AccountSetting />} />
            <Route path="logout" element={<>logout</>} />
            <Route
              path="payment-bookings/:id"
              element={
                <RequestToBook handleMethod={setSelectedMethod} obj={obj} />
              }
            />
          </Route>
        </Routes>
      </div>
    </WrapperContent>
  );
}
