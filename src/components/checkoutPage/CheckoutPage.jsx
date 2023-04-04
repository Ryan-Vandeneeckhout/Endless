import { useAuthContext } from "../hooks/firebase/useAuthContext.js";
import useState from "react-usestateref";
import { db } from "../hooks/firebase/config.js";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { ShoppingCartItem } from "../sideMenus/shoppingCartMenu/ShoppingCartItem";

export const CheckoutPage = () => {
  const [, setArrayRef, arrayRef] = useState([]);
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
  const renderItemsWithNoPrice = () => {
    if (
      arrayRef.current === null ||
      arrayRef.current === undefined ||
      arrayRef.current === []
    ) {
    } else {
      return (
        <ShoppingCartItem
          dataArray={arrayRef.current.filter(
            (item) => item.price === ("0.0" || "0" || null || undefined || "")
          )}
        />
      );
    }
  };
  return (
    <section className="checkoutSection">
      <div className="wrapper">
        <div className="upperContent">
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
        <div className="itemsWithNoPrice">
          <h3>Items taken out of Bag Due to No Stock</h3>
          <ul>{renderItemsWithNoPrice()}</ul>
        </div>
      </div>
    </section>
  );
};
