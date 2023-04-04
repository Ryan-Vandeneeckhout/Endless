import { useRef } from "react";

export const CheckboxInput = (props) => {
  const checkBoxRef = useRef(null);

  const checkboxFunction = (event) => {
    if (checkBoxRef.current.checked) {
      props.setCheckboxState([...props.checkboxItemRef, event.target.value]);
    } else {
      props.setCheckboxState(
        props.checkboxItemRef.filter((item) => item !== event.target.value)
      );
    }
    props.renderData();
  };
  return (
    <>
      <input
        ref={checkBoxRef}
        type="checkbox"
        name={props.buttonText}
        value={props.buttonValueText}
        onChange={checkboxFunction}
      />
      <label htmlFor={props.buttonText}>{props.buttonText}</label>
    </>
  );
};
