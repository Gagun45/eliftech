import type { FlowerOrderInterfaceWithId } from "@/lib/types";
import Link from "next/link";

interface Props {
  order: FlowerOrderInterfaceWithId;
}

const OrderCard = ({ order }: Props) => {
  return (
    <div className="flex flex-col gap-1 min-h-36 w-full border-1 border-black p-2 rounded-md">
      <Link
        href={`/order/${order.id}`}
        className="underline underline-offset-2 text-lg font-semibold"
      >
        Order #{order.id}
      </Link>
      {order.orderItems.map((item) => (
        <div key={item.flowerTitle} className="flex justify-between gap-2">
          <span>
            <strong>{item.flowerTitle}</strong> from <i>{item.shopTitle}</i>
          </span>
          <span>
            {item.amount} x {item.price}$ =
            <strong>{item.amount * item.price}$</strong>
          </span>
        </div>
      ))}
      <span className="w-full text-right font-bold mt-4">Total: {order.totalPrice}$</span>
    </div>
  );
};
export default OrderCard;
