export const SurveyForm = (props) => {
  return (
    <section
      className={`surveyFormSection${
        props.ShowSurvey ? " displayFlex" : " displayNone"
      }`}
    >
      <div className="wrapper">
        <h2>Endless Demands</h2>
        <h3>We would love your feedback!</h3>
        <form></form>
      </div>
    </section>
  );
};
