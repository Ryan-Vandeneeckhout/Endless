import { useLogout } from "../../hooks/firebase/useLogout.js";
export const UserSettingsMenu = (props) => {
  const { logout } = useLogout();

  return (
    <aside
      className={`userSettingsMenu${
        props.showUserSettingsState ? " smoothClosed" : " smoothShownRight"
      }`}
    >
      <button
        onClick={props.showUserSettings}
        className="closeShoppingCartButton"
      >
        Close User Settings <span>X</span>
      </button>
      <ul>
        <li onClick={logout}>Logout</li>
      </ul>
    </aside>
  );
};
