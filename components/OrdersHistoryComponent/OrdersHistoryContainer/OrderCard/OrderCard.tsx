import type { OrderReturnInterface } from "@/lib/types";
import Link from "next/link";

interface Props {
  order: OrderReturnInterface;
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
      <div className="flex flex-col gap-2 border-b-2 border-black">
        {order.orderItems.map((item) => (
          <div key={item.flowerTitle} className="flex flex-wrap justify-between gap-2">
            <span>
              <strong>{item.flowerTitle}</strong> from <i>{item.shopTitle}</i>
            </span>
            <span className="ml-auto">
              {item.amount} x {item.price}$ = {" "}
              <strong>{item.amount * item.price}$</strong>
            </span>
          </div>
        ))}
      </div>
      <span className="ml-auto font-semibold">
        Sum: <strong>{order.priceBeforeDiscount}$</strong>
      </span>
      <span className="ml-auto font-semibold">
        Discount: <strong>{order.discount}%</strong>
      </span>
      <span className="ml-auto font-semibold border-2 border-black px-2">
        Total price: <strong>{order.priceAfterDiscount}$</strong>
      </span>
    </div>
  );
};
export default OrderCard;
