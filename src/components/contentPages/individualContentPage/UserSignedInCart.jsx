import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../hooks/firebase/config.js";
import { useCollection } from "../../hooks/firebase/useFirestoreDatabase";

const UserSignedInCart = () => {
  const { databaseFirestore } = useCollection("UserCart", [
    "dataNumber",
    "==",
    AccountId,
  ]);

  const writeUserData = async () => {
    await updateDoc(doc(db, AccountId, "Messages"), {
      message: tagsArrayRef.current,
      dataNumber: AccountId,
    });
  };

  return { writeUserData, UserSignedInCart };
};
