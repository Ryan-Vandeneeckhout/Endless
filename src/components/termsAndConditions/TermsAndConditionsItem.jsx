import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const TermsAndConditionsItem = (props) => {
  const [open, setOpen] = useState(false);

  const showContent = () => {
    setOpen((x) => !x);
  };
  return (
    <>
      <h3>
        <span className="openCloseTermSection" onClick={showContent}>
          <FontAwesomeIcon icon={open ? "fa-caret-up" : "fa-caret-down"} />
        </span>
        {props.termsTitle}{" "}
      </h3>
      <p className={`paragraphContent${open ? " height100" : " height0"}`}>
        {props.terms}
      </p>
    </>
  );
};
