import { useState } from "react";

export const EmailAndPasswordInput = (props) => {
  const [isRedText, setIsRedText] = useState(false);

  const handleKeyDown = (e) => {
    e.preventDefault();
    setIsRedText(false);
  };

  const handleChange = (e) => {
    props.setValue(e.target.value);
    props.setErrorFromState(false);
  };

  return (
    <div className="labelsEmail">
      <label htmlFor={props.valueText}>{props.valueText}:</label>
      <input
        required
        aria-label={`${props.valueText} input`}
        type={props.valueText}
        onChange={handleChange}
        placeholder={props.valueInput}
        value={props.value}
        onKeyDown={handleKeyDown}
        ref={props.InputRef}
        className={isRedText ? "redTextO" : ""}
      />
    </div>
  );
};

export default EmailAndPasswordInput;
