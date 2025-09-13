"use client";

import { selectCartTotalData } from "@/redux/slices/cartSlice";
import { ShoppingBasketIcon } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

const HeaderCartState = () => {
  const { totalItems, totalPrice } = useSelector(selectCartTotalData);
  return (
    <Link href={"/cart"} className="h-12 ml-auto w-fit flex flex-col items-center">
      <div className="size-8 shrink-0 relative">
        <ShoppingBasketIcon className="size-full" />
        <span className="absolute -right-1/3 -top-1/3 bg-green-300 rounded-full size-6 flex justify-center items-center">
          {totalItems}
        </span>
      </div>

      <span className="flex">Total: {totalPrice}$</span>
    </Link>
  );
};
export default HeaderCartState;
