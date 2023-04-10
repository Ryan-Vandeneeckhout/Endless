import { RadioButton } from "../inputs/RadioButton";

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
        <form>
          <p>Would you Recommend Endless Demands to your family and friends?</p>
          <p>
            Overall how was your experience using the Endless Demands website?
          </p>
          <div className="Questions">
            <RadioButton buttonText="Yes" />
            <RadioButton buttonText="No" />
            <RadioButton buttonText="Still Looking" />
          </div>
          <p>What was the princpal Reason for visting Endless Demands today?</p>
          <select>
            <option>Shopping</option>
          </select>
          <label>Additional Comments</label>
          <textarea />
        </form>
      </div>
    </section>
  );
};
