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

  const ReturnText = (props) => {
    return <p>{props.Text}</p>;
  };

  if (api_featured_image === (null || undefined || ""));
  else {
    const renderPrice = () => {
      if (price > 1) {
        return <ReturnText Text={`$${parseFloat(price).toFixed(2)}`} />;
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
          {rating ? (
            <ReturnText Text={`Rating: ${rating} `} />
          ) : (
            <ReturnText Text={"No Rating Available"} />
          )}
        </div>
      </Link>
    );
  }
};
export default ContentItem;
