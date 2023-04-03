import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  updateDoc,
  doc,
  setDoc,
  getDocFromServer,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../../hooks/firebase/config";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import useState from "react-usestateref";

export const IndividualProductInformationPageReviewsAndRatings = (props) => {
  const [, setArrayRef, arrayRef] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);
  const AccountId = window.localStorage.getItem("dataNumber");

  const ShowCardContent = () => {
    setCardOpen((cardOpen) => !cardOpen);
  };

  useEffect(() => {
    const q = query(
      collection(db, "ProductReviews"),
      where("productId", "==", props.productItemId)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setArrayRef([]);
      querySnapshot.forEach((doc) => {
        setArrayRef([...arrayRef.current, doc.data()]);
      });
      return () => unsubscribe();
    });
  }, [setArrayRef, arrayRef, props.productItemId]);

  const renderPosts = () => {
    console.log(arrayRef.current);
    if (
      arrayRef.current === null ||
      arrayRef.current === undefined ||
      arrayRef.current === [] ||
      arrayRef.current.length === 0
    ) {
      return <p> No Posts or Reviews</p>;
    } else {
      return (
        <>
          {arrayRef.current.map(({ reviews }) => (
            <>
              {reviews.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="contentRight"></div>
                    <div className="contentLeft">{item.review}</div>
                  </div>
                );
              })}
            </>
          ))}
        </>
      );
    }
  };

  const createReview = async () => {
    const productId = props.productItemId.toString();

    const docSnap = await getDocFromServer(
      doc(db, "ProductReviews", productId)
    );

    if (docSnap.exists()) {
      await updateDoc(doc(db, "ProductReviews", productId), {
        reviews: arrayUnion({
          review: "Okayj Product",
          AccountId: AccountId,
        }),
        productId: props.productItemId,
      });
    } else {
      await setDoc(doc(db, "ProductReviews", productId), {
        reviews: arrayUnion({
          review: "Good Product",
          AccountId: AccountId,
        }),
        productId: props.productItemId,
      });
    }
  };

  return (
    <div className="productInfoCard">
      <div className="header">
        <h3>{props.headerCardText}</h3>
        <button onClick={ShowCardContent}>
          <FontAwesomeIcon icon={`${cardOpen ? "fa-minus" : "fa-plus"}`} />
        </button>
      </div>
      <div className={`contentCard${cardOpen ? " addHeight" : " not"}`}>
        {renderPosts()}
        <button onClick={createReview}>Create a Review</button>
      </div>
    </div>
  );
};
