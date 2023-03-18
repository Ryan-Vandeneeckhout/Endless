import { ContentSideBarButtonMap } from "./ContentSideBarButtonMap";
import { ContentSideMenuSideCatogories } from "./contentSideMenuSideCatogories";

export const ContentSideMenu = (props) => {
  return (
    <aside>
      <h3>{props.header.replaceAll("_", " ")}</h3>
      <div className="buttonList">
        {ContentSideBarButtonMap.map(
          ({
            arraylist,
            asideTextHeader,
            ButtonType,
            index,
            allowUserInput,
            buttonValue,
          }) => {
            return (
              <ContentSideMenuSideCatogories
                arraylist={arraylist}
                asideTextHeader={asideTextHeader}
                ButtonType={ButtonType}
                allowUserInput={allowUserInput}
                buttonValue={buttonValue}
                QueryAPIdata={props.QueryAPIdata}
                setBrandState={props.setBrandState}
                setPrice={props.setPrice}
                handlePriceSortOption={props.handlePriceSortOption}
                setPriceSort={props.setPriceSort}
              />
            );
          }
        )}
      </div>
    </aside>
  );
};
