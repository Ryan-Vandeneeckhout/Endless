import { ShoppingCartQuantityList } from "./shoppingCartItemCard/ShoppingCartQuantityList";

export const ShoppingCartItem = (props) => {
  return (
    <>
      {props.dataArray.map((post, index) => (
        <>
          <ShoppingCartQuantityList
            key={index}
            name={post.name}
            image={post.image}
            count={post.count}
            index={index}
            price={post.price}
          />
        </>
      ))}
    </>
  );
};
