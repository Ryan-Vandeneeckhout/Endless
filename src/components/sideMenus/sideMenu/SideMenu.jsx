import { useState } from "react";
import SideMenuMainMenu from "./SideMenuMainMenu";
import ThemeMenuChanger from "../themeMenu/themeMenu";
import { NavMoblieMenu } from "../navMoblieMenu/NavMoblieMenu";
import { MusicMenu } from "../musicMenu/musicMenu";

const SideMenu = (props) => {
  const [mainMenushow, setMainMenu] = useState(true);
  const [themeMenuState, setThemeMenu] = useState(false);
  const [musicMenuState, setMusicMenu] = useState(false);
  const [navMoblieMenu, setNavMoblieMenu] = useState(false);

  return (
    <aside
      className={`sideMenu${
        props.showMenu ? " smoothClosed" : " smoothShownLeft"
      }`}
    >
      <div
        className={`mainMenu${mainMenushow ? " displayFlex" : " displayNone"}`}
      >
        <SideMenuMainMenu
          setMainMenu={setMainMenu}
          setThemeMenu={setThemeMenu}
          setMusicMenu={setMusicMenu}
          setNavMoblieMenu={setNavMoblieMenu}
          musicMenuState={musicMenuState}
        />
      </div>

      <button
        className={`${mainMenushow ? " displayNone" : " displayFlex"}`}
        onClick={() => {
          setMainMenu(true);
          setThemeMenu(false);
          setMusicMenu(false);
          setNavMoblieMenu(false);
        }}
      >
        Main Menu
      </button>
      {themeMenuState && (
        <ThemeMenuChanger
          ResetTheme={props.ResetTheme}
          themeMenuState={themeMenuState}
        />
      )}
      {musicMenuState && (
        <MusicMenu
          MusicPlayingTracker={props.MusicPlayingTracker}
          MusicPlayingTrackerButton={props.MusicPlayingTrackerButton}
        />
      )}
      {navMoblieMenu && <NavMoblieMenu navMoblieMenu={navMoblieMenu} />}
    </aside>
  );
};
export default SideMenu;
