export default function EmailAndPasswordInput(props) {
  const onKeyDownFunction = (e) => {
    props.InputRef.current.classList.remove("redTextO");
  };
  return (
    <div className="labelsEmail">
      <label htmlFor={`${props.valueText}`}>{props.valueText}:</label>
      <input
        required
        aria-label={`${props.valueText} input`}
        type={`${props.valueText}`}
        onChange={(e) => {
          props.setValue(e.target.value);
          props.setErrorFromState(false);
        }}
        placeholder={props.valueInput}
        value={props.value}
        onKeyDown={onKeyDownFunction}
        ref={props.InputRef}
      />
    </div>
  );
}
