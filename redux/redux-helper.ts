import type { CartItem } from "@/lib/types";


export const saveState = ({ cartItems }: { cartItems: CartItem[] }) => {
  try {
    const storedCartItems = JSON.stringify(cartItems);
    localStorage.setItem("cart", storedCartItems);
  } catch (error) {
    console.log("Saving cart to localstorage error: ", error);
  }
};
