import useState from "react-usestateref";
import { db } from "../../hooks/firebase/config.js";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { ShoppingCartItem } from "./ShoppingCartItem.jsx";

export const ShoppingCartTempMenu = (props) => {
  const [, setArrayRef, arrayRef] = useState([]);
  const AccountId = window.localStorage.getItem("dataNumber");

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

  const renderShoppingCart = () => {
    if (
      arrayRef.current === null ||
      arrayRef.current === undefined ||
      arrayRef.current === []
    ) {
      return <h3>Shopping Bag Empty</h3>;
    } else {
      return <ShoppingCartItem dataArray={arrayRef.current} />;
    }
  };

  return (
    <aside
      className={`shoppingCart${
        props.showShoppingCart ? " smoothClosed" : " smoothShownRight"
      }`}
    >
      <button
        className="closeShoppingCartButton"
        onClick={props.ShowShoppingCart}
      >
        Shopping Bag <span>X</span>
      </button>
      <ul>{renderShoppingCart()}</ul>
    </aside>
  );
};
