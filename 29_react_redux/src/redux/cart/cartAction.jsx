const url = "https://course-api.com/react-tours-project";

const CLEAR_CART = "CLEAR_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const REMOVE_ITEM = "REMOVE_ITEM";
const CALCULATE_TOTAL = "CALCULATE_TOTAL";

const calculateTotals = () => ({ type: CALCULATE_TOTAL });

const clearCart = () => ({ type: CLEAR_CART });

const removeItem = (id) => ({ type: REMOVE_ITEM, payload: { id } });

const updateQuantity = (id, value) => ({
  type: UPDATE_QUANTITY,
  payload: { id, value },
});

// const getCartItems = (dispatch) => {
//   return function()
// };

export {
  CLEAR_CART,
  UPDATE_QUANTITY,
  REMOVE_ITEM,
  CALCULATE_TOTAL,
  clearCart,
  updateQuantity,
  removeItem,
  calculateTotals,
};
