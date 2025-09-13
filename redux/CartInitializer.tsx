"use client";

import { useEffect } from "react";
import { loadCart } from "./redux-helper";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store";
import { setCartItems } from "./slices/cartSlice";

const CartInitializer = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const storedCart = loadCart();
    dispatch(setCartItems({ cartItems: storedCart }));
  }, [dispatch]);
  return null;
};
export default CartInitializer;
