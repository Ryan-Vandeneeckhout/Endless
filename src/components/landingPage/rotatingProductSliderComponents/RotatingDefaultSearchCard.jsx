export const RotatingDefaultSearchesCard = (props) => {
  return (
    <>
      <div className="upperCard">
        <img
          src={props.api_featured_image}
          alt="makeup products demo example"
        />
      </div>
      <div className="bottomCard">
        <h3>{props.name}</h3>

        {props.price > 1 ? (
          <h4>${parseFloat(`${props.price}`).toFixed(2)}</h4>
        ) : (
          <h4>New Arrival</h4>
        )}
        <h4>
          {props.product_colors.length > 0
            ? props.product_colors.length + ` Shades`
            : null}
        </h4>
      </div>
    </>
  );
};
