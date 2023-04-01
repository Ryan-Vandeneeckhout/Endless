import { useRef, useState } from "react";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../hooks/firebase/config";
import { useAuthContext } from "../../../hooks/firebase/useAuthContext";
import { ChangeQuantity } from "./ChangeQuantity";

export const ShoppingCartQuantityList = (props) => {
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

  const renderPrice = () => {
    if (props.price === ("0.0" || NaN || 0.0 || 0)) {
      return <p>Price Unavailable </p>;
    } else {
      return <p>Price: ${parseFloat(`${props.price}`).toFixed(2)}</p>;
    }
  };

  return (
    <>
      <li className="shoppingCartItem" key={props.index}>
        <div className="cartItems">
          <img src={props.image} alt={props.name} />
          <div className="cartitemsDescription">
            <h4>{props.name}</h4>
            {renderPrice()}
            <p>
              Quantity: {props.count}{" "}
              <span onClick={changeQuantity}>Change</span>
            </p>
          </div>
        </div>
        <button
          className="deleteItemButton"
          onClick={deleteItem}
          ref={buttonRef}
          value={props.name}
        >
          X
        </button>
      </li>

      {changeQuantityState ? (
        <RenderQuantityList itemName={props.name} />
      ) : null}
    </>
  );
};
