import useState from "react-usestateref";
import { useCollection } from "../../hooks/firebase/useFirestoreDatabase.js";
import { db } from "../../hooks/firebase/config.js";

import { doc, deleteDoc } from "firebase/firestore";

export const ShoppingCartTempMenu = (props) => {
  const [, setRemoveItem, removeItemRef] = useState(null);
  const { databaseFirestore } = useCollection(`lol`, ["lol", "==", "lol"]);

  const handleClick = async (e) => {
    //Remove Item from Cart
    setRemoveItem(e.target.value);
    await deleteDoc(doc(db, `lol`, `${removeItemRef.current}`));
    setRemoveItem("");
  };

  const renderShoppingCart = () => {
    if (
      databaseFirestore === null ||
      databaseFirestore === undefined ||
      databaseFirestore.length === 0
    ) {
      return <h3 className="emptycardH3">Your cart is Empty</h3>;
    } else {
      return (
        <>
          {databaseFirestore.map((post) => (
            <li className="shoppingCartItem" key={post.id}>
              <img src={post.api_featured_image} alt={post.name} />
              <div className="cartItems">
                <h3>Product Name: {post.name}</h3>
                <p>Brand: {post.brand}</p>
                <p>Price: ${parseFloat(`${post.price}`).toFixed(2)}</p>
                <p>Quantity: {post.quantity}</p>
              </div>
              <button onClick={handleClick} value={post.name}>
                X
              </button>
            </li>
          ))}
        </>
      );
    }
  };

  return (
    <aside
      className={`shoppingCart${
        props.showShoppingCart ? " smoothClosed" : " smoothShownRight"
      }`}
    >
      <button
        className="closeShoppingCartButton"
        onClick={props.ShowShoppingCart}
      >
        Shopping Bag <span>X</span>
      </button>
      <ul>{renderShoppingCart()}</ul>
    </aside>
  );
};
