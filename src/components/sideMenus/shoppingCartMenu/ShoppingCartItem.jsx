export const ShoppingCartItem = (props) => {
  return (
    <>
      {props.dataArray.map((post, index) => (
        <li className="shoppingCartItem" key={index}>
          <img src={post.image} alt={post.name} />
          <div className="cartItems">
            <h4>{post.name}</h4>
            <p>Price: ${parseFloat(`${post.price}`).toFixed(2)}</p>
            <p>Quantity: {post.count}</p>
          </div>
          <button value={post.name}>X</button>
        </li>
      ))}
    </>
  );
};
