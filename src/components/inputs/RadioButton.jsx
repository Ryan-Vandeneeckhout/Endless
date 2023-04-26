export const RadioButton = ({
  checked,
  setStateValue,
  renderData,
  groupradioName,
  buttonValueText,
  buttonText,
  extraText,
}) => {
  const onRadioChange = (event) => {
    setStateValue(event.target.value);
    renderData();
  };

  return (
    <div className="radioButton">
      <input
        type="radio"
        onChange={onRadioChange}
        name={groupradioName}
        checked={checked}
        value={buttonValueText}
      />
      <label htmlFor={buttonText}>
        {buttonText} <span>{extraText}</span>
      </label>
    </div>
  );
};
