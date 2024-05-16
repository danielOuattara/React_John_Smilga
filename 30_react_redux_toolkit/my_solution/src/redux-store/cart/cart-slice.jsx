/* 
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

export const cartActions = cartSlice.actions;

export default cartSlice.reducer; 

*/

//=========================================> Async actions with `fetch()`

/* 

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://www.course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const initialCartState = {
  isLoading: false,
  cartItems: [],
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

  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer; 
*/

//=========================================> Async actions with `axios()`

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { modalActions } from "../modal/modal-slice";

const url = "https://www.course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (arg, thunkAPI) => {
    try {
      console.log("arg = ", arg);
      console.log("thunkAPI = ", thunkAPI);
      console.log("thunkAPI.getState()", thunkAPI.getState());
      // thunkAPI.dispatch(modalActions.showModal());
      const res = await axios(url);
      return res.data;
    } catch (err) {
      console.log("err from catch  = ", err);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  },
);

const initialCartState = {
  isLoading: false,
  cartItems: [],
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

  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoading = false;
      console.log("rejected action  =", action);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
