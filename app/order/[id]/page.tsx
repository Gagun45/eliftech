import { getOrderById } from "@/lib/actions/order.actions";

interface Props {
  params: Promise<{ id: string }>;
}

const OrderDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const orderIdAsNumber = parseInt(id);
  if (isNaN(orderIdAsNumber)) return <main>Wrong id</main>;
  const data = await getOrderById({ orderId: orderIdAsNumber });
  const { order } = data;
  if (!order) return <main>Order not found</main>;
  return (
    <main>
      <div className="flex w-full flex-col gap-4 max-w-xl border-1 border-black shadow-2xl rounded-md p-4">
        <span className="mx-auto font-semibold text-xl">Order #{order.id}</span>
        {order.orderItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b-1 border-black"
          >
            <span>
              <span className="font-bold text-lg">{item.flowerTitle} </span>{" "}
              from <span className="italic">{item.shopTitle}</span>
            </span>

            <span className="ml-auto shrink-0">
              {item.amount} x <strong>{item.price}$</strong>
            </span>
          </div>
        ))}

        <span className="ml-auto font-semibold">
          Total: {order.totalPrice}$
        </span>
        <span className="ml-auto font-semibold">
          Date: {order.createdAt.toLocaleString()}
        </span>
      </div>
    </main>
  );
};
export default OrderDetailsPage;
