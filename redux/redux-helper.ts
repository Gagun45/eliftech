import type { CartItem } from "@/lib/types";

export const loadCart = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
};

export const saveState = ({ cartItems }: { cartItems: CartItem[] }) => {
  try {
    const storedCartItems = JSON.stringify(cartItems);
    localStorage.setItem("cart", storedCartItems);
  } catch (error) {
    console.log("Saving cart to localstorage error: ", error);
  }
};
