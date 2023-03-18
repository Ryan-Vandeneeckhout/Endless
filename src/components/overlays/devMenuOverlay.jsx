const DevMenuOverlay = (props) => {
  return (
    <div
      className={`overlay${
        props.showMenu || props.showShoppingCart || props.showUserSettingsState
          ? " displayFlex"
          : " displayNone"
      }`}
      onClick={() => {
        props.setShowMenu(false);
        props.setShowShoppingCart(false);
        props.setShowUserSettingsState(false);
      }}
    />
  );
};
export default DevMenuOverlay;
