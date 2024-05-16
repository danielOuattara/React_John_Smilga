import { ChevronDown, ChevronUp } from "./";
import { cartActions } from "../redux-store/cart/cart-slice";
import { useDispatch } from "react-redux";

export default function CartItem({ id, img, title, price, amount }) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(cartActions.removeItem(id))}
        >
          remove
        </button>
      </div>

      <div>
        <button
          className="amount-btn"
          onClick={() =>
            dispatch(cartActions.updateItemQuantity({ id, value: +1 }))
          }
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() =>
            dispatch(cartActions.updateItemQuantity({ id, value: -1 }))
          }
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}
