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
          Sum: <strong>{order.priceBeforeDiscount}$</strong>
        </span>
        <span className="ml-auto font-semibold">
          Discount: <strong>{order.discount}%</strong>
        </span>
        <span className="ml-auto font-semibold underline underline-offset-2">
          Total price: <strong>{order.priceAfterDiscount}$</strong>
        </span>
        <span className="ml-auto">
          Address: <strong>{order.address}</strong>
        </span>
        <span className="ml-auto font-semibold">
          Date: <strong>{order.createdAt.toLocaleString()}</strong>
        </span>
      </div>
    </main>
  );
};
export default OrderDetailsPage;
