import { CheckboxInput } from "../../inputs/CheckboxInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RadioButton } from "../../inputs/RadioButton";
import { useState } from "react";

export const ContentSideMenuSideCatogories = (props) => {
  const [showList, setShowList] = useState(false);

  const ShowButtonList = () => {
    setShowList((showList) => !showList);
  };

  const SwitchFunctionContentCatogories = (item) => {
    switch (props.buttonValue) {
      case "Brand":
        return (
          <>
            <RadioButton
              buttonText={item.buttonText}
              setStateValue={props.setBrandState}
              buttonValue={props.buttonValue}
              buttonValueText={item.buttonValueText}
              renderData={props.QueryAPIdata}
              groupradioName={props.asideTextHeader}
            />
          </>
        );
      case "Price":
        return (
          <>
            <RadioButton
              buttonText={item.buttonText}
              setStateValue={props.setPrice}
              buttonValue={props.buttonValue}
              buttonValueText={item.buttonValueText}
              renderData={props.QueryAPIdata}
              groupradioName={props.asideTextHeader}
            />
          </>
        );
      case "Sort_By_Rating":
        return (
          <>
            <RadioButton
              buttonText={item.buttonText}
              setAPIRating={props.setAPIRating}
              buttonValue={props.buttonValue}
              buttonValueText={item.buttonValueText}
              renderData={props.QueryAPIdata}
              groupradioName={props.asideTextHeader}
            />
          </>
        );
      case "Sort_By_Price":
        return (
          <>
            <RadioButton
              buttonText={item.buttonText}
              setStateValue={props.setPriceSort}
              buttonValue={props.buttonValue}
              buttonValueText={item.buttonValueText}
              renderData={props.handlePriceSortOption}
              groupradioName={props.asideTextHeader}
            />
          </>
        );
      case "Sort_By_Tags":
        return (
          <CheckboxInput
            buttonText={item.buttonText}
            setAPIRating={props.setAPIRating}
            buttonValue={props.buttonValue}
            buttonValueText={item.buttonValueText}
            renderData={props.QueryAPIdata}
            groupradioName={props.asideTextHeader}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="buttonCategory">
      <button onClick={ShowButtonList}>
        {props.asideTextHeader}
        <span className="headerButton">
          {showList ? (
            <FontAwesomeIcon icon="fa-angle-up" />
          ) : (
            <FontAwesomeIcon icon="fa-angle-down" />
          )}
        </span>
      </button>
      {showList ? (
        <>
          {props.arraylist.map((item, index) => {
            return (
              <div key={index} className="subMenuButtons">
                {SwitchFunctionContentCatogories(item)}
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};
