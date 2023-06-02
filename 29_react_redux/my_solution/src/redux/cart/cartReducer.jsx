import {
  CLEAR_CART,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  CALCULATE_TOTAL,
} from "./cartAction.jsx";
import cartItems from "../../components/cart-items.jsx";

const initialCartState = {
  isLoading: false,
  cartItems: cartItems,
  totalPrice: 0,
  totalItems: 0,
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    //--------------------------------------
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    //--------------------------------------
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    //--------------------------------------
    // VERSION 1
    // case UPDATE_QUANTITY:
    //   let updatedCartItems = [...state.cartItems];

    //   const itemToUpdate = state.cartItems.find(
    //     (item) => item.id === action.payload.id,
    //   );
    //   if (!itemToUpdate) return state;

    //   const itemToUpdateIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id,
    //   );

    //   if (itemToUpdate.amount === 1 && action.payload.value === -1) {
    //     updatedCartItems = updatedCartItems.filter(
    //       (item) => item.id !== action.payload.id,
    //     );
    //   } else {
    //     updatedCartItems[itemToUpdateIndex] = {
    //       ...updatedCartItems[itemToUpdateIndex],
    //       amount:
    //         updatedCartItems[itemToUpdateIndex].amount + action.payload.value,
    //     };
    //     itemToUpdate.amount += action.payload.value;
    //   }
    //   return {
    //     ...state,
    //     cartItems: updatedCartItems,
    //   };

    //--------------------------------------
    // VERSION 2
    case UPDATE_QUANTITY:
      const itemToUpdate = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (!itemToUpdate) return state;

      let updatedCartItems = [];

      if (itemToUpdate.amount === 1 && action.payload.value === -1) {
        updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        updatedCartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            item = { ...item, amount: item.amount + action.payload.value };
          }
          return item;
        });
      }
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    //--------------------------------------
    case CALCULATE_TOTAL:
      const { totalItems, totalPrice } = state.cartItems.reduce(
        (total, currentItem) => {
          total.totalItems += currentItem.amount;
          total.totalPrice += currentItem.amount * currentItem.price;
          return total;
        },
        { totalItems: 0, totalPrice: 0 },
      );

      return {
        ...state,
        totalItems,
        totalPrice: Number(totalPrice.toFixed(2)),
      };

    default:
      return state;
  }
};
