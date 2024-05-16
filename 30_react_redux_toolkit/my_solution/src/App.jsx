/* 
import { Navbar, CartContainer, Modal } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./redux-store/cart/cart-slice";
import { useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isModalVisible } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.calculateTotals());
  }, [cartItems, dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isModalVisible &&
        ReactDOM.createPortal(<Modal />, document.getElementById("modal"))}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App; 

*/

//=========================================> Async actions with `fetch()`

/* 

import { Navbar, CartContainer, Modal } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { cartActions, getCartItems } from "./redux-store/cart/cart-slice";
import { useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isModalVisible } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(cartActions.calculateTotals());
  }, [cartItems, dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isModalVisible &&
        ReactDOM.createPortal(<Modal />, document.getElementById("modal"))}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App; 

*/

//=========================================> Async actions with `axios()`

import { Navbar, CartContainer, Modal } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { cartActions, getCartItems } from "./redux-store/cart/cart-slice";
import { useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isModalVisible } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems("john doe"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(cartActions.calculateTotals());
  }, [cartItems, dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isModalVisible &&
        ReactDOM.createPortal(<Modal />, document.getElementById("modal"))}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
