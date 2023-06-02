import { CartContainer, Navbar } from "./components";
import { connect } from "react-redux";
import { calculateTotals } from "./redux/cart/cartAction";
import { useEffect } from "react";

function App(props) {
  const { cartItems, handleCalculateTotals } = props;
  useEffect(() => {
    handleCalculateTotals();
  }, [cartItems, handleCalculateTotals]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

const mapStateToProps = (state) => {
  return { cartItems: state.cart.cartItems };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCalculateTotals: () => dispatch(calculateTotals()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
