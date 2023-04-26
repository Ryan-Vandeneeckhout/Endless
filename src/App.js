import { useState } from "react";
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
import { UserSettingsMenu } from "./components/sideMenus/userSettingsMenu/userSettingsMenu";
import { ChatIcon } from "./components/sideBarIcons/contactChatMenu/ChatIcon";
import { ContactMenu } from "./components/sideMenus/contactMenu/contactMenu";
import { IndividualProductPageMakeupAPI } from "./components/contentPages/individualContentPage/individualProductPageMakeupAPI";
import { CheckoutPage } from "./components/checkoutPage/CheckoutPage";
import { SurveyForm } from "./components/survey/SurveyForm";
import { FeaturedStoriesLandingPage } from "./components/featuredStories/featuredStoriesLandingPage";
import { GlobalPrompt } from "./components/globalPrompt/GlobalPrompt";

import { useInView } from "react-intersection-observer";
import usePageLoad from "./components/hooks/globalhooks/usePageLoad";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [chatState, setChatState] = useState(false);
  const [showUserSettingsState, setShowUserSettingsState] = useState(false);
  const [MusicPlaying, setMusicPlaying] = useState(false);
  const { user, authIsReady } = useAuthContext();
  const [promptBodyTextState, setPromptBodyTextState] = useState("");
  const [promptHeadingTextState, setPromptHeadingTextState] = useState("");
  const [showGlobalPromptState, setGlobalPromptState] = useState(false);
  const [contentItemView, contentItemInView] = useInView({});

  usePageLoad();
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
    setShowUserSettingsState(false);
  };

  const ShowSurveyFunction = () => {
    setShowSurvey((x) => !x);
  };

  const showUserSettings = () => {
    setShowUserSettingsState((x) => !x);
    setShowShoppingCart(false);
  };

  const showChat = () => {
    setChatState((x) => !x);
    setShowShoppingCart(false);
    setShowUserSettingsState(false);
  };

  return (
    <div className="app">
      {authIsReady && (
        <BrowserRouter>
          <header>
            <Navigation
              devMenuFunction={ShowSideMenu}
              devMenuVisible={showMenu}
              setShowMenu={setShowMenu}
              setShowShoppingCart={setShowShoppingCart}
              ShowShoppingCart={ShowShoppingCart}
              showUserSettings={showUserSettings}
              contentItemView={contentItemInView}
            />
          </header>
          <SideMenu
            showMenu={showMenu}
            MusicPlayingTracker={MusicPlayingTracker}
            MusicPlayingTrackerButton={MusicPlayingTrackerButton}
          />
          <ContactMenu showMenu={chatState} showChat={showChat} />
          <div className="sidebarMenu">
            <MusicIcon
              MusicPlayingTracker={MusicPlayingTracker}
              MusicPlaying={MusicPlaying}
            />
            <ChatIcon showChat={showChat} chatState={chatState} />
          </div>

          <ShoppingCart
            showShoppingCart={showShoppingCart}
            ShowShoppingCart={ShowShoppingCart}
          />
          <UserSettingsMenu
            showUserSettingsState={showUserSettingsState}
            showUserSettings={showUserSettings}
          />
          <SurveyForm
            ShowSurveyFunction={ShowSurveyFunction}
            ShowSurvey={showSurvey}
          />
          <GlobalPrompt
            showPrompt={showGlobalPromptState}
            headingText={promptHeadingTextState}
            bodyText={promptBodyTextState}
            setPromptState={setGlobalPromptState}
          />
          <main>
            <Routes>
              <Route
                extact
                path="/"
                element={
                  <LandingPage
                    contentItemViewNav={contentItemView}
                    ShowSurveyFunction={ShowSurveyFunction}
                  />
                }
              />
              <Route extact path="/checkout" element={<CheckoutPage />} />
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
              <Route
                extact
                path="/trending"
                element={<FeaturedStoriesLandingPage />}
              />

              {!user && <Route extact path="/login" element={<LoginPage />} />}
              {!user && <Route extact path="/signup" element={<Signup />} />}
              {user && <Route extact path="/login" element={<LogoutPage />} />}
              {user && <Route extact path="/signup" element={<LogoutPage />} />}
              <Route
                path="/content/:itembuttonText"
                element={<ContentPage />}
              />

              <Route path="/:id" element={<IndividualProductPageMakeupAPI />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <DevMenuOverlay
              setShowMenu={setShowMenu}
              setShowShoppingCart={setShowShoppingCart}
              showMenu={showMenu}
              setShowUserSettingsState={setShowUserSettingsState}
              showShoppingCart={showShoppingCart}
              showUserSettingsState={showUserSettingsState}
              ShowSurvey={showSurvey}
              setShowSurvey={setShowSurvey}
              showPrompt={showGlobalPromptState}
              setPromptState={setGlobalPromptState}
            />
          </main>
          <Footer
            setPromptState={setGlobalPromptState}
            setPromptBodyTextState={setPromptBodyTextState}
            setPromptHeadingTextState={setPromptHeadingTextState}
          />
        </BrowserRouter>
      )}
    </div>
  );
}
export default App;
