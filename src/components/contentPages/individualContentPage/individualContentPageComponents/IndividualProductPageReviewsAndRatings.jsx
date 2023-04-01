import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../hooks/firebase/config";
import { useAuthContext } from "../../../hooks/firebase/useAuthContext";
import { useState } from "react";

export const IndividualProductInformationPageReviewsAndRatings = (props) => {
  const [LikedItem, setLikedItem] = useState(false);
  const { user } = useAuthContext();
  const AccountId = window.localStorage.getItem("dataNumber");

  const updateCart = () => {
    if (user === null) {
      const writeUserData = async () => {
        const docSnap = await getDoc(doc(db, "Likes", AccountId));

        if (docSnap.exists()) {
          await updateDoc(
            doc(db, "Likes", AccountId, AccountId, props.ItemName),
            {
              Like: true,
            }
          );
        } else {
          await setDoc(doc(db, "Likes", AccountId, AccountId, props.ItemName), {
            Like: true,
          });
        }
      };

      writeUserData();
    } else if (user !== null) {
      const writeUserData = async () => {
        const docSnap = await getDoc(doc(db, "Likes", `${user.uid}`));

        if (docSnap.exists()) {
          await updateDoc(
            doc(db, "Likes", `${user.uid}`, `${user.uid}`, props.ItemName),
            {
              Like: true,
            }
          );
        } else {
          await setDoc(
            doc(db, "Likes", `${user.uid}`, `${user.uid}`, props.ItemName),
            {
              Like: true,
            }
          );
        }
      };

      writeUserData();
    }
  };
  return (
    <div className="reviewsContainer">
      <div className="upperContent">
        <h3>Ratings and Reviews</h3>
        <FontAwesomeIcon icon={"fa-plus"} />
      </div>
      <div className="reviews"></div>
    </div>
  );
};
