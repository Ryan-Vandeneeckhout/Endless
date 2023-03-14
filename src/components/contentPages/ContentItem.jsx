import { Link } from "react-router-dom";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const ContentItem = (props) => {
  const [contentItemView, contentItemInView] = useInView({});
  const [showList, setShowList] = useState(false);

  const ShowButtonList = () => {
    setShowList((showList) => !showList);
  };

  if (
    props.itemImage_url === null ||
    props.itemImage_url === undefined ||
    props.itemImage_url === ""
  );
  else {
    const renderPrice = () => {
      if (props.price > 1) {
        return <p>${parseFloat(props.price).toFixed(2)} </p>;
      } else {
        return <p>Price not available</p>;
      }
    };
    return (
      <Link
        onMouseEnter={ShowButtonList}
        onMouseLeave={ShowButtonList}
        ref={contentItemView}
        key={props.index}
        to={`/${props.itemid}`}
      >
        <div
          className={`contentItem${
            contentItemInView
              ? " animationActiveProject"
              : " notActiveAnimation"
          }`}
        >
          <div className="imageContainer">
            <img src={props.itemImage_url} alt={`${props.itemname}`} />
            {showList ? (
              <div className="bottomBar">
                <p>{props.itemProductType}</p>
              </div>
            ) : null}
          </div>
          {props.itemBrand ? <p>{props.itemBrand}</p> : null}
          <p>{props.itemname}</p>
          {renderPrice()}
          {props.itemRating ? (
            <p>Rating: {props.itemRating}</p>
          ) : (
            <p>No Rating Available</p>
          )}
        </div>
      </Link>
    );
  }
};
export default ContentItem;
