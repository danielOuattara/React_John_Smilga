import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialCartState = {
  isLoading: false,
  cartItems: cartItems,
  totalPrice: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },

    updateItemQuantity: (state, action) => {
      const itemToUpdateQuantity = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (
        itemToUpdateQuantity &&
        itemToUpdateQuantity.amount === 1 &&
        action.payload.value === -1
      ) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        itemToUpdateQuantity.amount += action.payload.value;
      }
    },

    calculateTotals: (state) => {
      const { totalItems, totalPrice } = state.cartItems.reduce(
        (total, currentItem) => {
          total.totalItems += currentItem.amount;
          total.totalPrice += currentItem.amount * currentItem.price;
          return total;
        },
        { totalItems: 0, totalPrice: 0 },
      );
      state.totalItems = totalItems;
      state.totalPrice = totalPrice.toFixed(2);
    },
  },
});

// console.log("cartSlice = ", cartSlice);

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
