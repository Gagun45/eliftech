"use client";

import { getCart, selectCartTotalData } from "@/redux/slices/cartSlice";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CreateOrderForm from "@/forms/CreateOrderForm/CreateOrderForm";

const CartComponent = () => {
  const { cartItems } = useSelector(getCart);
  const { totalPrice } = useSelector(selectCartTotalData);
  if (cartItems.length === 0)
    return (
      <h2 className="text-center text-3xl mt-8 font-bold">Cart is empty</h2>
    );
  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((item) => (
        <CartItem key={item.flower.id} cartItem={item} />
      ))}
      <span className="w-full text-right italic font-bold">
        Total Price: {totalPrice}$
      </span>
      <CreateOrderForm />
    </div>
  );
};
export default CartComponent;
