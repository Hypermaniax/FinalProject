import GridSwiper from "../../ui/GridSwiper";
import OrderContent from "../../ui/OrderContent";
import WrapperContent from "../../ui/WrapperContent";

export default function Ordering({ data }) {
  return (
    <div className="mt-4">
      <WrapperContent>
        <OrderContent data={data} />
      </WrapperContent>
    </div>
  );
}
