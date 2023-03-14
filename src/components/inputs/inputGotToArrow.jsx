import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InputGotoArrow = (props) => {
  return (
    <div className="gotoArrow">
      <Link to={props.link} aria-label="Go to content page">
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
      </Link>
    </div>
  );
};
