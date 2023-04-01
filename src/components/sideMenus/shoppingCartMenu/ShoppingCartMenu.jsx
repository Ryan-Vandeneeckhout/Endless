import useState from "react-usestateref";
import { useAuthContext } from "../../hooks/firebase/useAuthContext.js";
import { db } from "../../hooks/firebase/config.js";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { ShoppingCartItem } from "./ShoppingCartItem.jsx";

export const ShoppingCartMenu = (props) => {
  const { user } = useAuthContext();
  const [, setArrayRef, arrayRef] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Cart", user.uid, user.uid),
      where("dataNumber", "==", user.uid)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setArrayRef([]);
      querySnapshot.forEach((doc) => {
        setArrayRef([...arrayRef.current, doc.data()]);
      });
      return () => unsubscribe();
    });
  }, [setArrayRef, arrayRef, user.uid]);

  const renderShoppingCart = () => {
    if (
      arrayRef.current === null ||
      arrayRef.current === undefined ||
      arrayRef.current === []
    ) {
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
