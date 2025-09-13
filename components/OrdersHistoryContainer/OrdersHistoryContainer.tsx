import type { OrderReturnInterface } from "@/lib/types";
import OrderCard from "../OrderCard/OrderCard";

interface Props {
  orders: OrderReturnInterface[];
}

const OrdersHistoryContainer = ({ orders }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {orders.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
    </div>
  );
};
export default OrdersHistoryContainer;
