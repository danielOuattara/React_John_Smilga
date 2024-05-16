import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux-store/cart/cart-slice";
import { modalActions } from "../redux-store/modal/modal-slice";

export default function Modal() {
  useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
    dispatch(modalActions.hideModal());
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart ?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={handleClearCart}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(modalActions.hideModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}
