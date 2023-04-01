export const RadioButton = (props) => {
  const RadioChange = (event) => {
    props.setStateValue(event.target.value);
    props.renderData();
  };

  return (
    <>
      {props.checked ? (
        <input
          type="radio"
          onChange={RadioChange}
          name={props.groupradioName}
          defaultChecked
          value={props.buttonValueText}
        />
      ) : (
        <input
          type="radio"
          onChange={RadioChange}
          name={props.groupradioName}
          value={props.buttonValueText}
        />
      )}
      <label htmlFor={props.buttonText}>
        {props.buttonText} <span>{props.extraText}</span>
      </label>
    </>
  );
};
