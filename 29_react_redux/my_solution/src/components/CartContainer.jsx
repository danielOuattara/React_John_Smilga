import { connect } from "react-redux";
import { CartItem } from "./";

import { showModal } from "../redux/modal/modalActions";

function CartContainer(props) {
  // console.log("props = ", props);
  if (props.cart.cartItems.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {props.cart.cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${props.cart.totalPrice}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => props.dispatch(showModal())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isModalVisible: state.modal.isModalVisible,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleClearCart: () => dispatch(clearCart()),
//   };
// };

export default connect(mapStateToProps /* mapDispatchToProps */)(CartContainer);
