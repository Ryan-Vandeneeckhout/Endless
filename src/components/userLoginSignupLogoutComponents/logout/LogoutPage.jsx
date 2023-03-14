import { useLogout } from "../../hooks/firebase/useLogout.js";
import { Link } from "react-router-dom";

export const LogoutPage = () => {
  //Logout Page JSX Handling//
  const { logout } = useLogout();

  const LogoutButtonHandle = () => {
    logout();
  };

  window.scrollTo({ top: 0 });
  return (
    <section className="errorSection">
      <div className="wrapper">
        <div className="errorContentContainer LogoutError">
          <h2 className="errorContentHeading">
            <span>Error</span> Please <span>Logout</span>
          </h2>
          <h3>Before Creating a New User</h3>
          <div className="buttonsContainer">
            <button onClick={LogoutButtonHandle}>Logout</button>
            <Link aria-label="Go Back to homepage" to="/">
              <span>Go Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
