import GridSwiper from "../../ui/GridSwiper";
import OrderContent from "../../ui/OrderContent";
import WrapperContent from "../../ui/WrapperContent";

export default function Ordering() {
  return (
    <div className="mt-4">
      <WrapperContent>
        <GridSwiper />
        <OrderContent/>
      </WrapperContent>
    </div>
  );
}
