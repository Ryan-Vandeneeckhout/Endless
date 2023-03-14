import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import SideMenu from "./components/sideMenus/sideMenu/SideMenu";
import DevMenuOverlay from "./components/overlays/devMenuOverlay";

import { LandingPage } from "./components/landingPage/LandingPage";
import { Footer } from "./components/footer/footer";
import { Error404 } from "./components/error/Error404";
import { LandingPageSignUpLogin } from "./components/userLoginSignupLogoutComponents/LandingPageSignUpLogin";
import Signup from "./components/userLoginSignupLogoutComponents/signup/SignUpPage";
import { useAuthContext } from "./components/hooks/firebase/useAuthContext";
import { LogoutPage } from "./components/userLoginSignupLogoutComponents/logout/LogoutPage";
import { MusicIcon } from "./components/sideBarIcons/MusicIcon";
import LoginPage from "./components/userLoginSignupLogoutComponents/login/loginPage";
import { ContentPage } from "./components/contentPages/contentPage";
import { ShoppingCart } from "./components/sideMenus/shoppingCartMenu/ShoppingCart";
import { TermsAndConditions } from "./components/termsAndConditions/TermsAndConditions";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [MusicPlaying, setMusicPlaying] = useState(false);
  const { user, authIsReady } = useAuthContext();

  const MusicPlayingTracker = () => {
    setMusicPlaying(!MusicPlaying);
  };
  const MusicPlayingTrackerButton = () => {
    setMusicPlaying(true);
  };

  const ShowSideMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  const ShowShoppingCart = () => {
    setShowShoppingCart((x) => !x);
  };

  //Check local browser storage for user settings
  let htmlElement = document.documentElement;

  useEffect(() => {
    const onPageLoad = () => {};

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [htmlElement]);

  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          <header>
            <Navigation
              devMenuFunction={ShowSideMenu}
              devMenuVisible={showMenu}
              setShowMenu={setShowMenu}
              setShowShoppingCart={setShowShoppingCart}
              ShowShoppingCart={ShowShoppingCart}
            />
          </header>
          <SideMenu
            showMenu={showMenu}
            MusicPlayingTracker={MusicPlayingTracker}
            MusicPlayingTrackerButton={MusicPlayingTrackerButton}
          />
          <MusicIcon
            MusicPlayingTracker={MusicPlayingTracker}
            MusicPlaying={MusicPlaying}
          />
          <ShoppingCart
            showShoppingCart={showShoppingCart}
            ShowShoppingCart={ShowShoppingCart}
          />
          <main>
            <Routes>
              <Route extact path="/" element={<LandingPage />} />
              <Route
                extact
                path="/termsandconditions"
                element={<TermsAndConditions />}
              />
              <Route
                extact
                path="/signin"
                element={<LandingPageSignUpLogin />}
              />
              {!user && <Route extact path="/login" element={<LoginPage />} />}
              {!user && <Route extact path="/signup" element={<Signup />} />}
              {user && <Route extact path="/login" element={<LogoutPage />} />}
              {user && <Route extact path="/signup" element={<LogoutPage />} />}
              <Route
                path="/content/:itembuttonText"
                element={<ContentPage />}
              />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <DevMenuOverlay
              setShowMenu={setShowMenu}
              setShowShoppingCart={setShowShoppingCart}
              showMenu={showMenu}
              showShoppingCart={showShoppingCart}
            />
          </main>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}
export default App;
