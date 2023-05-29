import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";

const store = createStore(combineReducers({ cart: cartReducer }));

export default store;
