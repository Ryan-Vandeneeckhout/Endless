import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavButton = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <li
      aria-label={`Select button for ${props.NavText}`}
      onMouseEnter={() => {
        props.setHoverState();
        setHover(true);
        props.setSubMenu(props.NavText);
      }}
      onMouseLeave={() => {
        props.setHoverState();
        setHover(false);
      }}
    >
      <span>{props.NavText} </span>{" "}
      <span className="arrowDown">
        <FontAwesomeIcon
          size="1x"
          icon={hover ? "fa-times" : "fa-caret-down"}
        />
      </span>
    </li>
  );
};
