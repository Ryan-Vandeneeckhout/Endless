import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export const InputGotoArrow = ({ link }) => {
  return (
    <div className="gotoArrow">
      <Link to={link} aria-label="Go to content page">
        <FontAwesomeIcon icon={faArrowRightLong} />
      </Link>
    </div>
  );
};
