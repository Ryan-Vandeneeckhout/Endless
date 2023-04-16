const DevMenuOverlay = (props) => {
  return (
    <div
      className={`overlay${
        props.showMenu ||
        props.showShoppingCart ||
        props.showUserSettingsState ||
        props.showPrompt ||
        props.ShowSurvey
          ? " displayFlex"
          : " displayNone"
      }`}
      onClick={() => {
        props.setShowMenu(false);
        props.setShowShoppingCart(false);
        props.setShowUserSettingsState(false);
        props.setShowSurvey(false);
        props.setPromptState(false);
      }}
    />
  );
};
export default DevMenuOverlay;
