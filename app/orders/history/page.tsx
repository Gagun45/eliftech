import OrdersHistoryComponent from "@/components/OrdersHistoryComponent/OrdersHistoryComponent";

const OrdersHistoryPage = () => {
  return (
    <main className="gap-8">
      <h1 className="font-semibold text-xl">
        Enter your email and phone to find your orders
      </h1>
      <OrdersHistoryComponent />
    </main>
  );
};
export default OrdersHistoryPage;
