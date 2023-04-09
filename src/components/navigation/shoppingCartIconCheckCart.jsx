import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import useState from "react-usestateref";
import { db } from "../hooks/firebase/config";
import { collection, where, query, onSnapshot } from "firebase/firestore";

export const ShoppingCartCheckCart = (props) => {
  const [, setArrayRef, arrayRef] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Cart", props.userid, props.userid),
      where("dataNumber", "==", props.userid)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setArrayRef([]);
      querySnapshot.forEach((doc) => {
        setArrayRef([...arrayRef.current, doc.data()]);
      });
      return () => unsubscribe();
    });
  }, [setArrayRef, arrayRef, props.userid]);
  return (
    <div className="shoppingCartIcon" onClick={props.shoppingCartOpen}>
      <FontAwesomeIcon size="1x" icon="fa-shopping-bag" />
      {arrayRef.current.length ? <p>{arrayRef.current.length}</p> : null}
    </div>
  );
};
