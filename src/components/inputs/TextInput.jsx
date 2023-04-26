const TextInput = ({
  labelText,
  placeholderInput,
  setTextInput,
  callFunctionProps,
}) => {
  const handleUserInput = (e) => {
    setTextInput(`${e.target.value}`);
    e.preventDefault();
  };

  const callFunction = (e) => {
    if (e.key === "Enter") {
      callFunctionProps();
      e.preventDefault();
    }
  };

  return (
    <>
      <label htmlFor="builder-Name-Input">{labelText}</label>
      <input
        aria-label="builder-Name-Input"
        type="text"
        onChange={handleUserInput}
        className="textinput"
        placeholder={placeholderInput}
        onKeyDown={callFunction}
      />
    </>
  );
};

export default TextInput;
