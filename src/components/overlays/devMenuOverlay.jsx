const DevMenuOverlay = (props) => {
  return (
    <div
      className={`overlay${
        props.showMenu || props.showShoppingCart
          ? " displayFlex"
          : " displayNone"
      }`}
      onClick={() => {
        props.setShowMenu(false);
        props.setShowShoppingCart(false);
      }}
    />
  );
};
export default DevMenuOverlay;
