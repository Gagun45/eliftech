"use client";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store";
import { useEffect } from "react";
import { setCartItems } from "./slices/cartSlice";

const CartInitializer = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        dispatch(setCartItems({ cartItems: JSON.parse(storedCart) }));
      }
    } catch {}
  }, [dispatch]);
  return null;
};
export default CartInitializer;
