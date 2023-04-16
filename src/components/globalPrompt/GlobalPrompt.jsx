export const GlobalPrompt = (props) => {
  const closePrompt = () => {
    props.setPromptState(false);
  };
  return (
    <section
      className={`globalPrompt ${
        props.showPrompt ? " displayFlex" : " displayNone"
      }`}
    >
      <button onClick={closePrompt}>X</button>
      <div className="wrapper">
        <h3>{props.headingText}</h3>
        <p>{props.bodyText}</p>
      </div>
    </section>
  );
};
