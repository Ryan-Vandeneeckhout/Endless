import { useRef } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../hooks/firebase/config";
import { useAuthContext } from "../../../hooks/firebase/useAuthContext";

export const ChangeQuantity = (props) => {
  const listButtonRef = useRef(null);
  const { user } = useAuthContext();
  const AccountId = window.localStorage.getItem("dataNumber");

  const updateQuantity = (e) => {
    const writeUserData = async (Account) => {
      const docSnap = await getDoc(
        doc(
          db,
          "Cart",
          Account,
          Account,
          listButtonRef.current.getAttribute("data-itemname")
        )
      );

      if (docSnap.exists()) {
        await updateDoc(
          doc(
            db,
            "Cart",
            Account,
            Account,
            listButtonRef.current.getAttribute("data-itemname")
          ),
          {
            count: e.target.value,
          }
        );
      }
    };
    if (user === null) {
      let Account = AccountId;
      writeUserData(Account);
    } else {
      let Account = `${user.uid}`;
      writeUserData(Account);
    }
  };
  return (
    <button
      className="quantityButton"
      ref={listButtonRef}
      onClick={updateQuantity}
      value={props.index + 1}
      data-itemname={props.itemName}
    >
      {props.index + 1}
    </button>
  );
};
