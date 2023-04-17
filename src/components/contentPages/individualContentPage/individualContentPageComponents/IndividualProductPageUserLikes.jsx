import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../hooks/firebase/config";
import { useAuthContext } from "../../../hooks/firebase/useAuthContext";
import { useEffect, useState } from "react";

export const IndividualContentProductPageUserLikes = (props) => {
  const [LikedItem, setLikedItem] = useState(false);
  const { user } = useAuthContext();
  const AccountId = window.localStorage.getItem("dataNumber");

  useEffect(() => {
    const writeUserData = async (Account) => {
      const docSnap = await getDoc(
        doc(db, "LikedProduct", Account, Account, props.ItemName)
      );

      if (docSnap.exists()) {
        setLikedItem(true);
      } else {
        setLikedItem(false);
      }
    };
    if (user === null) {
      let Account = AccountId;
      writeUserData(Account);
    } else {
      let Account = `${user.uid}`;
      writeUserData(Account);
    }
  }, [AccountId, user, props.ItemName]);

  const updateLike = () => {
    const writeUserData = async (Account) => {
      const docSnap = await getDoc(
        doc(db, "LikedProduct", Account, Account, props.ItemName)
      );

      if (docSnap.exists()) {
        await deleteDoc(
          doc(db, "LikedProduct", Account, Account, props.ItemName)
        );
        setLikedItem(false);
      } else {
        await setDoc(
          doc(db, "LikedProduct", Account, Account, props.ItemName),
          {
            Like: true,
          }
        );
        setLikedItem(true);
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
    <div className="likesContainer" onClick={updateLike}>
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
