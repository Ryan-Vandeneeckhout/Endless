import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export const NavMoblieMenuButton = (props) => {
  const ButtonRef = useRef(null);

  const ButtonEntered = () => {
    ButtonRef.current.style.backgroundColor = "white";
    ButtonRef.current.style.color = "black";
  };
  const ButtonLeft = () => {
    ButtonRef.current.style.backgroundColor = props.ButtonColor;
    ButtonRef.current.style.color = "white";
  };

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <Link
      className={
        splitLocation[1] === `${props.Itemhref}` ? " active" : " notActive"
      }
      style={{ backgroundColor: props.ButtonColor, color: "white" }}
      aria-label="Go to home page"
      to={props.Itemhref}
      key={props.index}
      ref={ButtonRef}
      onMouseEnter={ButtonEntered}
      onMouseLeave={ButtonLeft}
    >
      <span>{props.NavText}</span>
    </Link>
  );
};
