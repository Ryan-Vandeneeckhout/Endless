export const CartItemAdded = (props) => {
  return (
    <section
      className={`CartItemAddedSection  ${
        props.showItem ? " showItem" : " hideItem"
      }`}
    >
      <div className="imageContainer">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="description">
        <p>{`${props.count} x ${props.name} have been added to your cart`}</p>
      </div>
    </section>
  );
};
