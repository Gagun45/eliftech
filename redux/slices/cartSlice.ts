import type { CartItem, FlowerType } from "@/lib/types";
import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<{ flower: FlowerType; shopTitle: string }>
    ) => {
      const newFlower = action.payload.flower;
      const shopTitle = action.payload.shopTitle;
      state.cartItems = state.cartItems.some(
        (item) => item.flower.id === newFlower.id
      )
        ? state.cartItems
        : [...state.cartItems, { flower: newFlower, amount: 1, shopTitle }];
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<{ flowerIdToDelete: number }>
    ) => {
      const flowerIdToDelete = action.payload.flowerIdToDelete;
      state.cartItems = state.cartItems.filter(
        (item) => item.flower.id !== flowerIdToDelete
      );
    },
    incrementAmount: (state, action: PayloadAction<{ flowerId: number }>) => {
      const flowerId = action.payload.flowerId;
      state.cartItems = state.cartItems.map((item) =>
        item.flower.id === flowerId
          ? { ...item, amount: item.amount + 1 }
          : { ...item }
      );
    },
    decrementAmount: (state, action: PayloadAction<{ flowerId: number }>) => {
      const flowerId = action.payload.flowerId;
      state.cartItems = state.cartItems.map((item) =>
        item.flower.id === flowerId
          ? { ...item, amount: Math.max(item.amount - 1, 1) }
          : { ...item }
      );
    },
  },
});

export const selectCartTotalData = createSelector(
  (state: RootState) => state.cart.cartItems,
  (cartItems) => ({
    totalItems: cartItems.reduce((sum, item) => sum + item.amount, 0),
    totalPrice: cartItems.reduce(
      (sum, item) => sum + item.amount * item.flower.price,
      0
    ),
  })
);

export const isFlowerInCart = (flowerId: number) =>
  createSelector(
    (state: RootState) => state.cart.cartItems,
    (cartItems) => {
      const item = cartItems.find((item) => item.flower.id === flowerId);
      return { isInCart: !!item, amountInCart: item ? item.amount : 0 };
    }
  );

export const getCart = (state: RootState) => state.cart;

export const {
  addItemToCart,
  removeItemFromCart,
  decrementAmount,
  incrementAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
