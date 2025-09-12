import type { CartItem } from "@/lib/types";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import {
  decrementAmount,
  incrementAmount,
  removeItemFromCart,
} from "@/redux/slices/cartSlice";
import { TrashIcon } from "lucide-react";

interface Props {
  cartItem: CartItem;
}

const CartItem = ({ cartItem }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { amount, flower, shopTitle } = cartItem;
  return (
    <div className="w-full flex items-center h-36 bg-green-300">
      <div className="h-full w-36 bg-amber-200">Image</div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2">
          <span className="w-48">{flower.title}</span>
          <span className="w-48">From shop:{shopTitle}</span>
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
            x {flower.price} = {flower.price * amount}
          </span>
        </div>
      </div>
      <Button
        className="ml-auto"
        variant={"destructive"}
        onClick={() =>
          dispatch(removeItemFromCart({ flowerIdToDelete: flower.id }))
        }
      >
        <TrashIcon />
      </Button>
    </div>
  );
};
export default CartItem;
