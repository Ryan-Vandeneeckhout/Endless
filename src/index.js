import "./sass/style.scss";
import { AuthContextProvider } from "./components/context/AuthContext.js";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faCaretDown,
  faCaretUp,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faArrowLeftLong,
  faArrowRightFromBracket,
  faArrowRightLong,
  faBars,
  faBuildingColumns,
  faCircleUser,
  faMusic,
  faPause,
  faPlay,
  faSearch,
  faShoppingBag,
  faSpa,
  faTimes,
  faPlus,
  faUser,
  faUserAlt,
  faUserCircle,
  faComment,
  faMinus,
  faTruck,
  faMailBulk,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
// FontAwesome Global Icons Added
library.add(
  faAngleDown,
  faTruck,
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faCaretUp,
  faComment,
  faAngleUp,
  faArrowLeftLong,
  faArrowRightFromBracket,
  faArrowRightLong,
  fab,
  faBars,
  faBuildingColumns,
  faCircleUser,
  faMusic,
  faPlus,
  faPause,
  faPlay,
  faSearch,
  faShoppingBag,
  faSpa,
  faTimes,
  faUser,
  faUserAlt,
  faUserCircle,
  faMinus,
  faMailBulk,
  faHeart
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
