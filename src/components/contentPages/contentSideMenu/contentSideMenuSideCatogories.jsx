import { CheckboxInput } from "../../inputs/CheckboxInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RadioButton } from "../../inputs/RadioButton";
import { useState } from "react";

export const ContentSideMenuSideCatogories = (props) => {
  const [showList, setShowList] = useState(false);

  const ShowButtonList = () => {
    setShowList((showList) => !showList);
  };

  const renderBrandOrProductType = (item) => {
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
  };

  const renderPrice = (item) => {
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
  };

  const renderSortPrice = (item) => {
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
  };

  const renderRating = (item) => {
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
  };
  const renderTags = (item) => {
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
                {props.buttonValue === "Brand" ? (
                  <>{renderBrandOrProductType(item)} </>
                ) : null}
                {props.buttonValue === "Price" ? (
                  <>{renderPrice(item)}</>
                ) : null}
                {props.buttonValue === "Sort_By_Rating" ? (
                  <>{renderRating(item)}</>
                ) : null}
                {props.buttonValue === "Sort_By_Price" ? (
                  <>{renderSortPrice(item)} </>
                ) : null}
                {props.buttonValue === "Sort_By_Tags" ? (
                  <>{renderTags(item)}</>
                ) : null}
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};
