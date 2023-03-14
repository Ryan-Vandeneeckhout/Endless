import { Link } from "react-router-dom";
import { useRef } from "react";

export const ShoppingCartBottom = (props) => {
  const checkoutButtonRef = useRef(null);

  const renderCheckoutButtonColor = () => {
    if (
      (props.cartlength === 0 ||
        props.cartlength === undefined ||
        props.cartlength === null) &&
      checkoutButtonRef.current != null
    ) {
      checkoutButtonRef.current.classList.add("greyOutButton");
    }
  };
  return (
    <div
      className={`shoppingCartBottom${
        props.showShoppingCart ? " smoothClosed" : " smoothShownRight"
      }`}
    >
      <div className="wrapper">
        <button onClick={props.ShowShoppingCart}>Continue Shopping</button>
        <Link ref={checkoutButtonRef} to="/checkout">
          Checkout
        </Link>
      </div>
      {renderCheckoutButtonColor()}
    </div>
  );
};
