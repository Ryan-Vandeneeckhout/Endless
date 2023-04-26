import { useEffect, useRef, useState } from "react";

const ThemeMenuButton = (props) => {
  const [currentThemeState, setCurrentThemeState] = useState(null);
  const ButtonRef = useRef(null);
  let htmlElement = document.documentElement;

  const ButtonEntered = () => {
    ButtonRef.current.style.backgroundColor = "white";
    ButtonRef.current.style.color = "black";
  };
  const ButtonLeft = () => {
    ButtonRef.current.style.backgroundColor = props.ButtonColor;
    ButtonRef.current.style.color = "white";
  };

  useEffect(() => {
    if (htmlElement.getAttribute("data-theme") === props.ThemeHTML) {
      setCurrentThemeState(true);
    }
  }, [props.ThemeHTML, htmlElement]);
  return (
    <button
      ref={ButtonRef}
      aria-label={props.ButtonText}
      onClick={() => {
        htmlElement.setAttribute("data-theme", props.ThemeHTML);
        window.localStorage.setItem("dataTheme", props.ThemeHTML);
      }}
      style={{ backgroundColor: props.ButtonColor, color: "white" }}
      onMouseEnter={ButtonEntered}
      onMouseLeave={ButtonLeft}
      onFocus={() => {
        setCurrentThemeState(true);
      }}
      onBlur={() => {
        setCurrentThemeState(false);
      }}
    >
      {props.ButtonText} {currentThemeState ? <span>Current Theme</span> : null}
    </button>
  );
};
export default ThemeMenuButton;
