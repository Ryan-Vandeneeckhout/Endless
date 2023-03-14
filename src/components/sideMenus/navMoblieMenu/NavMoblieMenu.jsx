import { NavigationButtonMap } from "../../navigation/NavgationButtonMap.jsx";
import { NavMoblieMenuButton } from "./NavMoblieMenuButton.jsx";

export const NavMoblieMenu = (props) => {
  return (
    <div
      className={`mainMenuContainer${
        props.moblieNavMenu ? "  displayFlex" : " displayNone"
      }`}
    >
      {NavigationButtonMap.map((item, index) => {
        return (
          <NavMoblieMenuButton
            Itemhref={item.href}
            ButtonColor={item.ButtonColor}
            NavText={item.NavText}
            key={index}
          />
        );
      })}
    </div>
  );
};
