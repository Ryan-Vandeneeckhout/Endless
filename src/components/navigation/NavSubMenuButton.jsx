import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavSubMenuButton = (props) => {
  const [hoverOpen, setHoverOpen] = useState(false);

  const setHoverState = () => {
    setHoverOpen((hoverOpen) => !hoverOpen);
  };

  return (
    <Link
      to={`content/${props.buttonValueText}`}
      onMouseEnter={setHoverState}
      onMouseLeave={setHoverState}
    >
      {props.buttonText}
      <span className="navButtonSpan">
        {" "}
        {hoverOpen ? <FontAwesomeIcon icon=" fa-angle-right" /> : null}
      </span>
    </Link>
  );
};
