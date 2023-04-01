import useState from "react-usestateref";
import { useAuthContext } from "../../hooks/firebase/useAuthContext.js";
import { db } from "../../hooks/firebase/config.js";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

export const TotalCart = (props) => {
  const { user } = useAuthContext();
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
