import type { CartItem } from "@/lib/types";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import {
  decrementAmount,
  incrementAmount,
  removeItemFromCart,
} from "@/redux/slices/cartSlice";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  cartItem: CartItem;
}

const CartItem = ({ cartItem }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { amount, flower, shopTitle } = cartItem;
  const isMobile = useIsMobile();
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 items-center min-h-36 rounded-md p-1 shadow-2xl border-1 border-black">
      <div className="size-36 shrink-0 border-1 rounded-md overflow-hidden border-black">
        Image
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <span className="w-48 font-bold">{flower.title}</span>
          <span className="w-48">
            Shop:{" "}
            <strong>
              <i>{shopTitle}</i>
            </strong>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            disabled={amount <= 1}
            onClick={() => dispatch(decrementAmount({ flowerId: flower.id }))}
          >
            -
          </Button>
          <span>{amount}</span>
          <Button
            onClick={() => dispatch(incrementAmount({ flowerId: flower.id }))}
          >
            +
          </Button>
          <span>
            x {flower.price}$ = <strong>{flower.price * amount}$</strong>
          </span>
        </div>
      </div>

      <Button
        className="ml-auto self-start"
        variant={"destructive"}
        onClick={() =>
          dispatch(removeItemFromCart({ flowerIdToDelete: flower.id }))
        }
      >
        {isMobile ? "Remove" : <XIcon />}
      </Button>
    </div>
  );
};
export default CartItem;
