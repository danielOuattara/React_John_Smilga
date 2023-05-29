import ReactDOM from "react-dom";
import { Navbar, CartContainer, Modal } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./redux-store/cart/cart-slice";

function App() {
  const { isModalVisible } = useSelector((state) => state.modal);
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
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
