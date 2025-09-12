"use client";

import CartItem from "@/components/CartItem/CartItem";
import { getCart, selectCartTotalData } from "@/redux/slices/cartSlice";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartItems } = useSelector(getCart);
  const { totalPrice } = useSelector(selectCartTotalData);
  return (
    <main>
      CartPage
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartItem key={item.flower.id} cartItem={item} />
        ))}
        <span className="w-full text-right italic font-bold">Total Price: ${totalPrice}</span>
      </div>
    </main>
  );
};
export default CartPage;
