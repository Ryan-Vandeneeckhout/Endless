import useState from "react-usestateref";
import { db } from "../../hooks/firebase/config.js";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useAuthContext } from "../../hooks/firebase/useAuthContext.js";

export const TotalCartUser = () => {
  const [, setArrayRef, arrayRef] = useState([]);
  const { user } = useAuthContext();

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
  }, [user.uid, setArrayRef, arrayRef]);

  const sumTotal = (arr) =>
    arr.reduce((sum, { price, count }) => sum + price * count, 0);

  let total = sumTotal(arrayRef.current);

  const renderTotal = () => {
    if (total === 0) {
      return (
        <>
          <p>Total: </p>
          <p>$0</p>
        </>
      );
    } else {
      return (
        <>
          <p>Total: </p>
          <p>${total.toFixed(2)}</p>
        </>
      );
    }
  };

  return <>{renderTotal()}</>;
};
