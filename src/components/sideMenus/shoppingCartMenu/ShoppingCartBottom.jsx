import { Link } from "react-router-dom";
import { useRef } from "react";
import { TotalCart } from "./TotalCart";

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

  const renderTotal = () => {
    if (props.total === (0 || null || undefined)) {
      return (
        <>
          <TotalCart />
        </>
      );
    }
  };
  return (
    <div
      className={`shoppingCartBottom${
        props.showShoppingCart ? " smoothClosed" : " smoothShownRight"
      }`}
    >
      <div className="wrapper">
        <div className="total">{renderTotal()}</div>
        <div className="text">
          <p className="lightTextP">Shipping calculated at checkout</p>
        </div>

        <div className="cartBottomButtons">
          <button onClick={props.ShowShoppingCart}>Continue Shopping</button>
          <Link ref={checkoutButtonRef} to="/checkout">
            Checkout
          </Link>
        </div>
      </div>
      {renderCheckoutButtonColor()}
    </div>
  );
};
