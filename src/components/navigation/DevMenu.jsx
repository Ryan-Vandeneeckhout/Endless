import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SiteName } from "../overlays/siteName";

const DevMenu = (props) => {
  // Controls the opening and closing of the dev menu - located in the upper right corner of the navigation component //
  const [hoverOpen, setHoverOpen] = useState(false);

  const setHoverState = () => {
    setHoverOpen((hoverOpen) => !hoverOpen);
  };

  return (
    <div className="devMenu">
      <button
        aria-label="Dev-Menu Selection Button"
        onClick={() => {
          props.devMenuFunction();
          props.setShowShoppingCart(false);
        }}
        className={`Dev-Menu-button${
          props.devMenuVisible ? " rotating" : " not"
        }`}
        onMouseEnter={setHoverState}
        onMouseLeave={setHoverState}
      >
        {/*On hover state have four icons to dictate more clarity to the user and their potential actions */}
        {props.devMenuVisible ? (
          <FontAwesomeIcon
            icon={`${hoverOpen ? "fa-angle-left" : "fa-times"}`}
          />
        ) : (
          <FontAwesomeIcon
            icon={`${hoverOpen ? "fa-angle-right" : "fa-bars"}`}
          />
        )}
        {/*Closed hover states */}
      </button>
      <h3>
        <Link to="/">
          {SiteName}
          <span className="moblieNav">
            <FontAwesomeIcon color="goldenrod" icon="fa-spa" />
          </span>
        </Link>
      </h3>
    </div>
  );
};
export default DevMenu;
