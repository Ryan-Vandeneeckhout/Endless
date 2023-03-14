import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Error404 = () => {
  window.scrollTo({ top: 0 });

  return (
    <section className="errorSection">
      <div className="wrapper">
        <div className="errorContentContainer">
          <h2 className="errorContentHeading">
            <span>Error</span> Page Not <span>Found</span>
          </h2>
          <h3>We're Sorry, the Requested Page was not found</h3>
          <div className="buttonsContainer">
            <Link aria-label="Go Back to homepage" to="/">
              <FontAwesomeIcon icon="arrow-left-long" />
              <span>Go Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
