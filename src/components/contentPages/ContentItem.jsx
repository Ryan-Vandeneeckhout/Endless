import { Link } from "react-router-dom";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const ContentItem = (props) => {
  const [contentItemView, contentItemInView] = useInView({});
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

  if (
    api_featured_image === null ||
    api_featured_image === undefined ||
    api_featured_image === ""
  );
  else {
    const renderPrice = () => {
      if (price > 1) {
        return <p>${parseFloat(price).toFixed(2)} </p>;
      } else {
        return <p>Price not available</p>;
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
                <p>{product_type}</p>
              </div>
            ) : null}
          </div>
          {brand ? <p className="brandp">{brand}</p> : null}
          <p>{name.replaceAll("&trade;", "")}</p>
          {renderPrice()}
          {rating ? <p>Rating: {rating}</p> : <p>No Rating Available</p>}
        </div>
      </Link>
    );
  }
};
export default ContentItem;
