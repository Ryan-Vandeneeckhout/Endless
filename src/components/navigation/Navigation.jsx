import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { NavigationButtonMap } from "./NavgationButtonMap.jsx";
import DevMenu from "./DevMenu.jsx";
import { useState } from "react";
import { brandsMap } from "./submenuMaps/brandsMap.jsx";
import { MakeupMap } from "./submenuMaps/makeupMap.jsx";
import { useAuthContext } from "../hooks/firebase/useAuthContext.js";
import { useLogout } from "../hooks/firebase/useLogout.js";
import { NavButton } from "./NavButton.jsx";

const Navigation = (props) => {
  const [hoverOpen, setHoverOpen] = useState(false);
  const [hoverOpenIcon, setHoverOpenIcon] = useState(false);
  const [subMenu, setSubMenu] = useState("");
  const location = useLocation();
  const { logout } = useLogout();
  const { user } = useAuthContext();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const setHoverState = () => {
    setHoverOpen((hoverOpen) => !hoverOpen);
  };

  const setHoverStateIcon = () => {
    setHoverOpenIcon((hoverOpen) => !hoverOpen);
  };

  const shoppingCartOpen = () => {
    props.ShowShoppingCart();
    props.setShowMenu(false);
  };

  const renderSubMenu = () => {
    if (subMenu === "Brands") {
      return (
        <nav
          className={`subMenu${hoverOpen ? " hoverTrue" : " hoverFalse"}`}
          onMouseEnter={setHoverState}
          onMouseLeave={setHoverState}
        >
          <ul>
            {brandsMap.map((item, index) => {
              return (
                <li key={index}>
                  {" "}
                  <Link to={`content/${item.buttonValueText}`}>
                    {item.buttonText}
                  </Link>{" "}
                </li>
              );
            })}
          </ul>
        </nav>
      );
    } else if (subMenu === "Makeup") {
      return (
        <nav
          className={`subMenu${hoverOpen ? " hoverTrue" : " hoverFalse"}`}
          onMouseEnter={setHoverState}
          onMouseLeave={setHoverState}
        >
          <ul>
            {MakeupMap.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`content/${item.buttonValueText}`}>
                    {item.buttonText}
                  </Link>{" "}
                </li>
              );
            })}
          </ul>
        </nav>
      );
    }
  };

  return (
    <section className="upperNavSection">
      <div className="upperNavWrapper">
        <nav className="navBarUppersite">
          <DevMenu
            devMenuFunction={props.devMenuFunction}
            devMenuVisible={props.devMenuVisible}
            setShowShoppingCart={props.setShowShoppingCart}
          />
          <ul className="upperNav">
            {NavigationButtonMap.map(({ NavText }, index) => {
              return (
                <NavButton
                  key={index}
                  NavText={NavText}
                  setHoverState={setHoverState}
                  setSubMenu={setSubMenu}
                />
              );
            })}
          </ul>
          <div className="userIcons">
            <div className="shoppingCartOpen" onClick={shoppingCartOpen}>
              <FontAwesomeIcon size="1x" icon="fa-shopping-bag" />
            </div>
            <p onClick={logout}>Log out</p>
            {user ? (
              <div>
                {" "}
                <FontAwesomeIcon size="1x" icon="fa-user-circle" />
              </div>
            ) : (
              <Link
                className={
                  splitLocation[1] === "signin" ? " active" : " notActive"
                }
                aria-label="Go to to sign in page"
                to="/signin"
                onMouseEnter={setHoverStateIcon}
                onMouseLeave={setHoverStateIcon}
              >
                <FontAwesomeIcon
                  size="1x"
                  icon={
                    hoverOpenIcon ? "fa-user-circle" : " thinn fa-user-circle"
                  }
                />
              </Link>
            )}
          </div>
        </nav>
        <>{renderSubMenu()}</>
      </div>
    </section>
  );
};
export default Navigation;
