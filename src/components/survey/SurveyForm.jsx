import { RadioButton } from "../inputs/RadioButton";
import { SurveyQuestions } from "./SurveyQuestions";

export const SurveyForm = (props) => {
  const RatingExperience = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className={`surveyFormSection${
        props.ShowSurvey ? " displayFlex" : " displayNone"
      }`}
    >
      <div className="wrapper">
        <h2>Endless Demands</h2>
        <h3>We would love your feedback!</h3>
        <form onSubmit={handleSubmit}>
          <div className="Questions">
            <p>
              Would you recommend Endless Demands to your family and friends?
            </p>
            <div className="flexRow">
              <RadioButton buttonText="Yes" groupradioName={"recommend"} />
              <RadioButton buttonText="No" groupradioName={"recommend"} />
            </div>
          </div>
          <div className="Questions">
            <p>
              Overall how was your experience using the Endless Demands website?{" "}
              <span className="requiredIcon"> *</span>
            </p>
            <div className="ratingScale">
              {Array.from({ length: 10 }, (_, index) => (
                <button
                  key={index}
                  className="buttonRating"
                  onClick={RatingExperience}
                >
                  {Math.abs(index - 10)}
                </button>
              ))}
            </div>
          </div>

          <div className="Questions">
            <p>
              Did you find what you were looking for?{" "}
              <span className="requiredIcon"> *</span>
            </p>
            <div className="flexRow">
              <RadioButton buttonText="Yes" groupradioName={"lookingfor"} />
              <RadioButton buttonText="No" groupradioName={"lookingfor"} />
              <RadioButton
                buttonText="Still Looking"
                groupradioName={"lookingfor"}
              />
            </div>
          </div>
          <div className="Questions">
            <p>
              What was the princpal Reason for visting Endless Demands today?{" "}
              <span className="requiredIcon"> *</span>
            </p>
            <select placeholder="Please select an option">
              {SurveyQuestions.map((item, index) => {
                return (
                  <option key={index} value={item.buttonText}>
                    {item.buttonText}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="Questions">
            <p>Additional Comments</p>
            <textarea />
          </div>
          <button
            style={{ background: "red", color: "white" }}
            className="formButton"
            type="submit"
          >
            Submit
          </button>
          <button className="formButton" onClick={props.ShowSurveyFunction}>
            Close{" "}
          </button>
        </form>
      </div>
    </section>
  );
};
