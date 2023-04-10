import { useAuthContext } from "../hooks/firebase/useAuthContext.js";
import useState from "react-usestateref";
import { db } from "../hooks/firebase/config.js";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { ShoppingCartItem } from "../sideMenus/shoppingCartMenu/ShoppingCartItem";
import { TotalCart } from "../sideMenus/shoppingCartMenu/TotalCart.js";
import { TotalCartUser } from "../sideMenus/shoppingCartMenu/TotalCartUser.js";
import { ShippingInfo } from "./ShippingInfo.jsx";

export const CheckoutPage = () => {
  const [, setArrayRef, arrayRef] = useState([]);
  const [showOfferInputState, setOfferInputState] = useState(false);
  const AccountId = window.localStorage.getItem("dataNumber");
  const { user } = useAuthContext();

  useEffect(() => {
    const q = query(
      collection(db, "Cart", AccountId, AccountId),
      where("dataNumber", "==", AccountId)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setArrayRef([]);
      querySnapshot.forEach((doc) => {
        setArrayRef([...arrayRef.current, doc.data()]);
      });
      return () => unsubscribe();
    });
  }, [AccountId, setArrayRef, arrayRef]);

  const renderItemList = () => {
    if (
      arrayRef.current === null ||
      arrayRef.current === undefined ||
      arrayRef.current === []
    ) {
    } else {
      return (
        <ShoppingCartItem
          dataArray={arrayRef.current.filter(
            (item) => item.price !== ("0.0" || "0" || null || undefined || "")
          )}
        />
      );
    }
  };
  const renderFreeShipping = () => {};

  const showOfferInputFunction = () => {
    setOfferInputState((showOfferInputState) => !showOfferInputState);
  };

  return (
    <section className="checkoutSection">
      <div className="wrapper">
        <div className="upperContent">
          <div className="currentShoppingBag">
            <h2>Shopping Bag</h2>
            {user ? (
              <div className="flexRow">
                <p>
                  Sign in to enjoy faster checkout, track your order and earn
                  rewards!
                </p>
              </div>
            ) : null}
          </div>
          <div className="contentList">
            <ul>{renderItemList()}</ul>
          </div>
        </div>
        <ShippingInfo />
        <section className="Payment">
          <h3>Payment</h3>
        </section>
        <section className="promoSection">
          <h3>Offers</h3>
          <button onClick={showOfferInputFunction}>Apply a Promo Code</button>
          {showOfferInputState ? (
            <input type="text" placeholder="Apply Promo Code here!" />
          ) : null}
        </section>
        <section className="orderSummary">
          <div className="wrapperOrder">
            <h3>Order Summary</h3>
            <div className="orderSummaryContents">
              <p>total</p>
              <p>Estimated Shipping</p>
              {renderFreeShipping()}
            </div>
            {user ? <TotalCartUser /> : <TotalCart />}
            <button>Proceed to Checkout</button>
          </div>
        </section>
        <section className="shippingInfomation"></section>
      </div>
    </section>
  );
};
