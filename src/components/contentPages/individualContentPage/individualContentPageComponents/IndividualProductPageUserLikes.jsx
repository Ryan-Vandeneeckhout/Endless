import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../hooks/firebase/config";
import { useAuthContext } from "../../../hooks/firebase/useAuthContext";
import { useState } from "react";

export const IndividualContentProductPageUserLikes = (props) => {
  const [LikedItem, setLikedItem] = useState(false);
  const { user } = useAuthContext();
  const AccountId = window.localStorage.getItem("dataNumber");

  const getItemData = async () => {
    const dataLikedDocument = async (Account) => {
      const docSnap = await getDoc(
        doc(db, "Likes", Account, Account, props.ItemName)
      );

      if (docSnap === (undefined || null)) {
        setLikedItem(false);
      }

      if (docSnap.exists()) {
        setLikedItem(true);
      } else {
        setLikedItem(false);
      }
    };
    if (user === null) {
      let Account = AccountId;
      dataLikedDocument(Account);
    } else {
      let Account = user.id;
      dataLikedDocument(Account);
    }
  };

  getItemData();

  const getLikedItem = () => {
    const writeUserData = async () => {
      const docSnap = await getDoc(
        doc(db, "Likes", AccountId, AccountId, props.ItemName)
      );

      if (docSnap.exists()) {
        await deleteDoc(doc(db, "Likes", AccountId, AccountId, props.ItemName));
        setLikedItem(false);
      } else {
        await setDoc(doc(db, "Likes", AccountId, AccountId, props.ItemName), {
          Like: true,
        });
        setLikedItem(true);
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
  return (
    <div className="likesContainer" onClick={getLikedItem}>
      {LikedItem ? (
        <>
          <p>Already Added to your Favs List! </p>{" "}
          <FontAwesomeIcon color={"red"} icon={"fa-heart"} />
        </>
      ) : (
        <>
          <p>Click Heart to add to Favs</p>{" "}
          <FontAwesomeIcon color={"black"} icon={"fa-heart"} />
        </>
      )}
    </div>
  );
};
