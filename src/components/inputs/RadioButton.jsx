export const RadioButton = (props) => {
  const RadioChange = (event) => {
    props.setStateValue(event.target.value);
    props.renderData();
  };

  return (
    <>
      <input
        type="radio"
        onChange={RadioChange}
        name={props.groupradioName}
        value={props.buttonValueText}
      />
      <label htmlFor={props.buttonText}>{props.buttonText}</label>
    </>
  );
};
