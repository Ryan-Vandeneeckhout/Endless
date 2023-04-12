import { ShoppingCartQuantityList } from "./shoppingCartItemCard/ShoppingCartQuantityList";

export const ShoppingCartItem = (props) => {
  return (
    <>
      {props.dataArray.map((post, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          key={index}
        >
          <ShoppingCartQuantityList
            name={post.name}
            image={post.image}
            count={post.count}
            index={index}
            price={post.price}
          />
        </div>
      ))}
    </>
  );
};
