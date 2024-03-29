import { Link } from "react-router-dom";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentItem = (props) => {
  const [contentItemView, contentItemInView] = useInView({
    triggerOnce: true,
  });
  const [showList, setShowList] = useState(false);

  const ShowButtonList = () => {
    setShowList((showList) => !showList);
  };
  let objectItem = props.objectItem;

  const {
    api_featured_image,
    id,
    brand,
    name,
    rating,
    product_type,
    price,
  } = objectItem;
  //Render Rating Function
  const renderRating = () => {
    if (rating !== null) {
      const ratingStar = rating - Math.floor(rating) !== 0;
      if (ratingStar) {
        return (
          <div className="starRatingContainer">
            {Array.from({ length: rating }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={"fa-star"}
                color={"goldenrod"}
              />
            ))}
            <FontAwesomeIcon icon={"fa-star-half"} color={"goldenrod"} />
          </div>
        );
      } else {
        return (
          <div className="starRatingContainer">
            {Array.from({ length: rating }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={"fa-star"}
                color={"goldenrod"}
              />
            ))}
            {Array.from({ length: 5 - rating }, (_, index) => (
              <FontAwesomeIcon key={index} icon={"fa-star"} />
            ))}
          </div>
        );
      }
    } else if (rating === null) {
      return <p>No Rating Available</p>;
    }
  };
  const ReturnText = (props) => {
    return <p>{props.Text}</p>;
  };

  if (api_featured_image === (null || undefined || ""));
  else {
    const renderPrice = () => {
      if (price > 1 && brand !== "nyx") {
        return <ReturnText Text={`$${parseFloat(price).toFixed(2)}`} />;
      } else if (price > 1 && brand === "nyx") {
        return (
          <ReturnText
            Text={`$${parseFloat(price - price * 0.15).toFixed(2)}`}
          />
        );
      } else {
        return <ReturnText Text={"Price not available"} />;
      }
    };
    return (
      <Link
        onMouseEnter={ShowButtonList}
        onMouseLeave={ShowButtonList}
        ref={contentItemView}
        to={{ pathname: `/${id}`, state: objectItem }}
      >
        <div
          className={`contentItem${
            contentItemInView
              ? " animationActiveProject"
              : " notActiveAnimation"
          }`}
        >
          <div className="imageContainer">
            <img src={api_featured_image} alt={`${name}`} />
            {showList ? (
              <div className="bottomBar">
                <ReturnText Text={product_type} />
              </div>
            ) : null}
          </div>
          {brand ? <p className="brandp">{brand}</p> : null}
          <ReturnText Text={`${name.replaceAll("&trade;", "")}`} />
          {renderPrice()}

          {renderRating()}
        </div>
      </Link>
    );
  }
};
export default ContentItem;
