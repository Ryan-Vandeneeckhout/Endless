import { useRef, useState } from "react";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../hooks/firebase/config";
import { useAuthContext } from "../../hooks/firebase/useAuthContext";
import { ChangeQuantity } from "./shoppingCartItemCard/ChangeQuantity";
import { ShoppingCartQuantityList } from "./shoppingCartItemCard/ShoppingCartQuantityList";

export const ShoppingCartItem = (props) => {
  const buttonRef = useRef(null);

  const [changeQuantityState, setChangeQunatityState] = useState(false);
  const { user } = useAuthContext();
  const AccountId = window.localStorage.getItem("dataNumber");

  const deleteItem = () => {
    const writeUserData = async (Account) => {
      const docSnap = await getDoc(
        doc(db, "Cart", Account, Account, buttonRef.current.value)
      );

      if (docSnap.exists()) {
        await deleteDoc(
          doc(db, "Cart", Account, Account, buttonRef.current.value)
        );
      }
    };
    if (user === null) {
      let Account = AccountId;
      writeUserData(Account);
    } else {
      let Account = user.id;
      writeUserData(Account);
    }
  };

  const changeQuantity = () => {
    setChangeQunatityState((changeQuantityState) => !changeQuantityState);
  };

  const RenderQuantityList = (props) => {
    return (
      <>
        {Array.from({ length: 10 }, (_, index) => (
          <ChangeQuantity index={index} key={index} itemName={props.itemName} />
        ))}
      </>
    );
  };

  return (
    <>
      {props.dataArray.map((post, index) => (
        <>
          <ShoppingCartQuantityList
            key={index}
            name={post.name}
            image={post.image}
            count={post.count}
            index={index}
            price={post.price}
          />
        </>
      ))}
    </>
  );
};
