"use client";

import SearchOrderForm from "@/forms/SearchOrderForm/SearchOrderForm";
import type {
  FlowerOrderInterfaceWithId,
} from "@/lib/types";
import { useState } from "react";
import OrdersHistoryContainer from "../OrdersHistoryContainer/OrdersHistoryContainer";

const OrdersHistoryComponent = () => {
  const [orders, setOrders] = useState<FlowerOrderInterfaceWithId[]>([]);
  const handleSetOrders = (orders: FlowerOrderInterfaceWithId[]) => {
    setOrders(orders);
  };
  return (
    <div className="flex flex-col w-full gap-2">
      <SearchOrderForm setOrders={handleSetOrders} />
      <OrdersHistoryContainer orders={orders} />
    </div>
  );
};
export default OrdersHistoryComponent;
