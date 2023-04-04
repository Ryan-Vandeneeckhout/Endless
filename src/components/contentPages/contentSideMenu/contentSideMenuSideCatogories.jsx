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
        if (
          props.APIDATA.filter((i) => i.brand === item.buttonText).length > 0 ||
          item.buttonText === "Remove All"
        ) {
          return (
            <div className="BrandButtonContainer">
              <div>
                <RadioButton
                  buttonText={item.buttonText}
                  setStateValue={props.setBrandState}
                  buttonValue={props.buttonValue}
                  buttonValueText={item.buttonValueText}
                  renderData={props.QueryAPIdata}
                  groupradioName={props.asideTextHeader}
                />
              </div>
              <p>
                (
                {
                  props.APIDATA.filter((i) => i.brand === item.buttonText)
                    .length
                }
                )
              </p>
            </div>
          );
        } else {
          return null;
        }
      case "Price":
        if (
          props.APIDATA.filter((i) => i.price < item.buttonValueText).length > 0
        ) {
          return (
            <div className="BrandButtonContainer">
              <div>
                <RadioButton
                  buttonText={item.buttonText}
                  setStateValue={props.setPrice}
                  buttonValue={props.buttonValue}
                  buttonValueText={item.buttonValueText}
                  renderData={props.QueryAPIdata}
                  groupradioName={props.asideTextHeader}
                />
              </div>
              <p>
                (
                {
                  props.APIDATA.filter((i) => i.price < item.buttonValueText)
                    .length
                }
                )
              </p>
            </div>
          );
        } else {
          return null;
        }
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
        if (
          props.APIDATA.filter((i) => i.tag_list.includes(item.buttonValueText))
            .length > 0
        ) {
          return (
            <div className="BrandButtonContainer">
              <div>
                <CheckboxInput
                  buttonText={item.buttonText}
                  setCheckboxState={props.setTagsArray}
                  buttonValue={props.buttonValue}
                  buttonValueText={item.buttonValueText}
                  renderData={props.QueryAPIdata}
                  groupradioName={props.asideTextHeader}
                  checkboxItemRef={props.TagsArrayRef}
                />
              </div>
              <p>
                {
                  props.APIDATA.filter((i) =>
                    i.tag_list.includes(item.buttonValueText)
                  ).length
                }
              </p>
            </div>
          );
        } else {
          return null;
        }

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
          <p>default</p>
        </>
      ) : null}
    </div>
  );
};
