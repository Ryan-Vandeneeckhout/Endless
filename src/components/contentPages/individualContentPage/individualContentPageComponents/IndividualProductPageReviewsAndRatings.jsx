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
import { RadioButton } from "../../../inputs/RadioButton";
import EditorTextArea from "../../../inputs/EditorTextArea";

export const IndividualProductInformationPageReviewsAndRatings = (props) => {
  const [, setArrayRef, arrayRef] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);
  const [, setMessage, MessageRef] = useState("");
  const [, setRecommendedState, recommendedStateRef] = useState("Recommended");
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
                  <div className="contentRatingContainer" key={index}>
                    <div className="contentRight">
                      <p>Created by Account {item.AccountId}</p>
                      <p>{item.recommended}</p>
                      <p>{item.datePosted}</p>
                    </div>
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

  const date = new Date(2021, 8, 18);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const datePosted = `${day}/${month}/${year}`;

  const createReview = async (e) => {
    e.preventDefault();

    const productId = props.productItemId.toString();

    const docSnap = await getDocFromServer(
      doc(db, "ProductReviews", productId)
    );

    if (docSnap.exists()) {
      await updateDoc(doc(db, "ProductReviews", productId), {
        reviews: arrayUnion({
          review: MessageRef.current,
          AccountId: AccountId,
          datePosted: datePosted,
          recommended: recommendedStateRef.current,
        }),
        productId: props.productItemId,
      });
    } else {
      await setDoc(doc(db, "ProductReviews", productId), {
        reviews: arrayUnion({
          review: MessageRef.current,
          AccountId: AccountId,
          datePosted: datePosted,
          recommended: recommendedStateRef.current,
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
      <div className={`contentCardRating${cardOpen ? " addHeight" : " not"}`}>
        {renderPosts()}
        <div className="createPost">
          <h3>Create A Review:</h3>
          <form>
            <div className="content">
              <div className="contentRight">
                <div className="inputRecommend greenAccent">
                  <RadioButton
                    buttonText={"Recommended"}
                    setStateValue={setRecommendedState}
                    buttonValue={"Recommended"}
                    buttonValueText={"Recommended"}
                    groupradioName={"userRecommends"}
                    checked={true}
                  />
                </div>
                <div className="inputRecommend redAccent">
                  <RadioButton
                    buttonText={"Not Recommended"}
                    setStateValue={setRecommendedState}
                    buttonValue={"Not Recommended"}
                    buttonValueText={"Not Recommended"}
                    groupradioName={"userRecommends"}
                  />
                </div>
              </div>
              <div className="contentLeft">
                <EditorTextArea
                  messageState={MessageRef.current}
                  setMessage={setMessage}
                  TextInputValue="Leave a review for others about this product!"
                />
              </div>
            </div>

            <button onClick={createReview}>Create a Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};
