"use client";

import { getCart, selectCartTotalData } from "@/redux/slices/cartSlice";
import { useSelector } from "react-redux";
import CreateOrderForm from "@/forms/CreateOrderForm/CreateOrderForm";
import { useState } from "react";
import CouponInput from "./CouponInput/CouponInput";
import type { Coupon } from "@prisma/client";
import CartItem from "./CartItem/CartItem";

const CartComponent = () => {
  const { cartItems } = useSelector(getCart);
  const { totalPrice } = useSelector(selectCartTotalData);
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  if (cartItems.length === 0)
    return (
      <h2 className="text-center text-3xl mt-8 font-bold">Cart is empty</h2>
    );
  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((item) => (
        <CartItem key={item.flower.id} cartItem={item} />
      ))}
      {coupon ? (
        <div className="flex flex-col items-end ml-auto font-semibold">
          <span>Before discount: {totalPrice}</span>
          <span>Discount: {coupon.discountPercentage}%</span>
          <span>
            Total price:{" "}
            {Math.floor(
              totalPrice - (totalPrice * coupon.discountPercentage) / 100
            )}
          </span>
        </div>
      ) : (
        <span className="w-full text-right italic font-bold">
          Total Price: {totalPrice}$
        </span>
      )}
      <CouponInput setCoupon={setCoupon} />
      <CreateOrderForm couponCode={coupon?.code ?? null} />
    </div>
  );
};
export default CartComponent;
