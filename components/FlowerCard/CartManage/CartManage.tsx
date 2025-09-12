"use client";

import { Button } from "@/components/ui/button";
import type { FlowerType } from "@/lib/types";
import {
  addItemToCart,
  decrementAmount,
  incrementAmount,
  isFlowerInCart,
  removeItemFromCart,
} from "@/redux/slices/cartSlice";
import type { AppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface Props {
  flower: FlowerType;
}

const CartManage = ({ flower }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isInCart, amountInCart } = useSelector(isFlowerInCart(flower.id));
  return (
    <div>
      {isInCart && (
        <div>
          <Button
            disabled={amountInCart <= 1}
            onClick={() => dispatch(decrementAmount({ flowerId: flower.id }))}
          >
            -
          </Button>
          <span>{amountInCart}</span>
          <Button
            onClick={() => dispatch(incrementAmount({ flowerId: flower.id }))}
          >
            +
          </Button>
        </div>
      )}
      {isInCart ? (
        <Button
          variant={"destructive"}
          onClick={() =>
            dispatch(removeItemFromCart({ flowerIdToDelete: flower.id }))
          }
        >
          Remove
        </Button>
      ) : (
        <Button onClick={() => dispatch(addItemToCart({ flower }))}>
          Add to cart
        </Button>
      )}
    </div>
  );
};
export default CartManage;
