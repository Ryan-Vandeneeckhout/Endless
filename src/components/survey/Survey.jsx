import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Survey = (props) => {
  return (
    <section className="surveySection">
      <div className="wrapper">
        <p onClick={props.ShowSurveyFunction}>
          {props.text}{" "}
          <span>
            <FontAwesomeIcon icon="fa-angle-right" color="white" />
          </span>
        </p>
      </div>
    </section>
  );
};
