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
import { Trash2Icon } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface Props {
  flower: FlowerType;
  shopTitle: string;
}

const CartManage = ({ flower, shopTitle }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isInCart, amountInCart } = useSelector(isFlowerInCart(flower.id));
  return (
    <div className="flex justify-between gap-4">
      {isInCart && (
        <div className="w-full flex justify-between items-center">
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
          className="ml-auto"
          onClick={() =>
            dispatch(removeItemFromCart({ flowerIdToDelete: flower.id }))
          }
        >
          <Trash2Icon />
        </Button>
      ) : (
        <Button
          className="w-full"
          onClick={() => dispatch(addItemToCart({ flower, shopTitle }))}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};
export default CartManage;
