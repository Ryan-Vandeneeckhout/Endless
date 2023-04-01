import { IndividualProductInformationPageCard } from "./individualContentPageComponents/IndividualProductInfomationPageCard";
import { OptionNumberInput } from "../../inputs/OptionNumberInput";
import { useEffect } from "react";
import useState from "react-usestateref";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RadioButton } from "../../inputs/RadioButton";
import { HighlightsMap } from "./HighlightsMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { updateDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../hooks/firebase/config";
import { useAuthContext } from "../../hooks/firebase/useAuthContext";
import { IndividualProductInformationPageReviewsAndRatings } from "./individualContentPageComponents/IndividualProductPageReviewsAndRatings";
import { IndividualContentProductPageUserLikes } from "./individualContentPageComponents/IndividualProductPageUserLikes";

export const IndividualProductPageMakeupAPI = () => {
  const [individualProducts, setIndividualProduct] = useState({});
  const [shippingState, setShippingState] = useState("Standard_Shipping");
  const [loading, setLoading] = useState(true);
  const [, setProductCount, productCountRef] = useState(1);
  const { user } = useAuthContext();

  const AccountId = window.localStorage.getItem("dataNumber");

  const itemid = useParams();

  //Auto Scroll User to Top if needed//
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    async function APICall() {
      axios({
        url: `https://web-production-5976.up.railway.app/https://makeup-api.herokuapp.com/api/v1/products/${itemid.id}.json`,
      })
        .then((response) => {
          setIndividualProduct(response.data);
          if (response.data.length === 0) {
            setLoading(true);
          } else {
            setLoading(false);
          }
        })
        .catch(function (error) {
          alert(error.message);
          setLoading(true);
        });
    }

    APICall();
  }, [itemid.id]);

  //Destructure objectItem of individualproducts
  const {
    api_featured_image,
    brand,
    description,
    id,
    name,
    price,
    product_colors,
    product_link,
    product_type,
    rating,
    tag_list,
    website_link,
  } = individualProducts;

  const updateCart = () => {
    if (user === null) {
      const writeUserData = async () => {
        const docSnap = await getDoc(doc(db, "Cart", AccountId));

        if (docSnap.exists()) {
          await updateDoc(doc(db, "Cart", AccountId, AccountId, name), {
            image: api_featured_image,
            price: price,
            name: name,
            count: productCountRef.current,
            shipping: shippingState,
            dataNumber: AccountId,
          });
        } else {
          await setDoc(doc(db, "Cart", AccountId, AccountId, name), {
            image: api_featured_image,
            price: price,
            name: name,
            count: productCountRef.current,
            shipping: shippingState,
            dataNumber: AccountId,
          });
        }
      };

      writeUserData();
    } else if (user !== null) {
      const writeUserData = async () => {
        const docSnap = await getDoc(doc(db, "Cart", `${user.uid}`));

        if (docSnap.exists()) {
          await updateDoc(doc(db, "Cart", `${user.uid}`, `${user.uid}`, name), {
            image: api_featured_image,
            price: price,
            name: name,
            count: productCountRef.current,
            shipping: shippingState,
            dataNumber: AccountId,
          });
        } else {
          await setDoc(doc(db, "Cart", `${user.uid}`, `${user.uid}`, name), {
            image: api_featured_image,
            price: price,
            name: name,
            count: productCountRef.current,
            shipping: shippingState,
            dataNumber: AccountId,
          });
        }
      };

      writeUserData();
    }
  };

  //render if the product has aviable colours map
  const renderColors = () => {
    if (!product_colors || product_colors.length === 0) {
      return null;
    } else {
      return (
        <div className="bottomContent">
          {showMoreColors(product_colors)}

          <div className="colorContainer">
            {product_colors.slice(0, 9).map((product) => {
              return (
                <div className="colourItem" key={product.hex_value}>
                  <div
                    className="colourCircle"
                    style={{ background: `${product.hex_value}` }}
                  />{" "}
                  <p className="hexValues">{product.hex_value}</p>
                  <p>{product.colour_name}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  const showMoreColors = (product_colors) => {
    if (product_colors.length > 18) {
      return <button>Show More</button>;
    }
  };
  const renderTags = () => {
    if (
      tag_list === (null || undefined || "" || []) ||
      tag_list === undefined ||
      tag_list.length === 0
    );
    else {
      console.log(tag_list);
      let arr1 = HighlightsMap;
      let arr2 = tag_list;
      let res = arr1.filter((item) => arr2.includes(item.name));

      return (
        <div className="highlightsContainer">
          <div className="Highlightwrapper">
            <div className="header">
              <h3>HighLights</h3>
            </div>
            <div className="highlightsList">
              {res.map((product, index) => {
                return (
                  <div className="highlightItem" key={index}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  };

  //Render Rating Function
  const renderRating = () => {
    if (rating !== (null || "")) {
      const ratingStar = rating - Math.floor(rating) !== 0;

      if (ratingStar) {
        return (
          <div className="starRatingContainer">
            {Array.from({ length: rating }, (_, index) => (
              <p key={index}>{index + 1}</p>
            ))}
            <p>Half star</p>
          </div>
        );
      } else {
        return (
          <>
            {Array.from({ length: rating }, (_, index) => (
              <p key={index}>{index + 1}</p>
            ))}
          </>
        );
      }
    } else {
      return null;
    }
  };

  const renderBrandName = () => {
    return brand !== (null || "") ? (
      <p className="boldp uppercapP">Brought to you by - {brand}</p>
    ) : null;
  };

  const renderPrice = () => {
    return price !== ("0.0" || "0" || null || undefined || "") ? (
      <p className="boldp">${parseFloat(price).toFixed(2)}</p>
    ) : (
      <p className="boldp">Price unavailable</p>
    );
  };

  if (loading === false) {
    return (
      <section className="individualContentProductPage">
        <div className="wrapper">
          <div className="content">
            <div className="uppperContent">
              <div className="imageContainer">
                <div className="container">
                  <img
                    src={api_featured_image ? api_featured_image : null}
                    alt={`${name}`}
                  />
                </div>
              </div>
              <div className="productInfomation">
                {renderBrandName()}
                <p>
                  {name} - {product_type}
                </p>
                {renderRating()}
                <div className="priceLikeAskQuestionContainer">
                  {renderPrice()}
                  <IndividualContentProductPageUserLikes ItemName={name} />
                </div>

                <div className="shipping">
                  <h4>Get It Shipped</h4>
                  <div className="shippingInput">
                    <div className="input">
                      <RadioButton
                        buttonText={"Same day Shipping"}
                        setStateValue={setShippingState}
                        buttonValue={"Same_Day_Shipping"}
                        buttonValueText={"Same Day Shipping"}
                        renderData={"none"}
                        groupradioName={"shipping"}
                        checked={false}
                      />
                    </div>
                    <FontAwesomeIcon icon={"fa-truck"} />
                  </div>
                  <div className="shippingInput">
                    <div>
                      <RadioButton
                        buttonText={"Standard Shipping"}
                        setStateValue={setShippingState}
                        buttonValue={"Standard_Shipping"}
                        buttonValueText={"Standard Shipping"}
                        renderData={"none"}
                        groupradioName={"shipping"}
                        checked={true}
                      />
                    </div>
                    <FontAwesomeIcon icon={"fa-mail-bulk"} />
                  </div>
                </div>
                <div className="basket">
                  <OptionNumberInput
                    inputSelectionLength={10}
                    productCount={setProductCount}
                  />
                  <button onClick={updateCart} className="shippingbutton">
                    <span>Add to Basket </span>
                    <span>for {shippingState.replaceAll("_", " ")}</span>
                  </button>
                </div>
              </div>
            </div>
            {renderColors()}
            {renderTags()}
            {description ? (
              <IndividualProductInformationPageCard
                description={description}
                headerCardText={"About the Product"}
                product_link={product_link}
                productid={id}
                website_link={website_link}
              />
            ) : (
              <IndividualProductInformationPageCard
                description={"No Product Description Available"}
                headerCardText={"About the Product"}
                product_link={product_link}
                productid={id}
                website_link={website_link}
              />
            )}
            <IndividualProductInformationPageReviewsAndRatings
              ItemName={name}
            />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="individualContentProductPage">
        <div className="wrapper">
          <h2>Loading...</h2>
        </div>
      </section>
    );
  }
};
