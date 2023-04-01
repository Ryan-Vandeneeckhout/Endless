import { useAuthContext } from "../../hooks/firebase/useAuthContext";
import { ShoppingCartBottom } from "./ShoppingCartBottom";
import { ShoppingCartMenu } from "./ShoppingCartMenu";
import { ShoppingCartTempMenu } from "./ShoppingCartTempUser";

export const ShoppingCart = (props) => {
  const { user } = useAuthContext();
  return (
    <section className="shoppingCartSection">
      {user && (
        <ShoppingCartMenu
          showShoppingCart={props.showShoppingCart}
          ShowShoppingCart={props.ShowShoppingCart}
        />
      )}
      {!user && (
        <ShoppingCartTempMenu
          showShoppingCart={props.showShoppingCart}
          ShowShoppingCart={props.ShowShoppingCart}
        />
      )}
      <ShoppingCartBottom
        showShoppingCart={props.showShoppingCart}
        ShowShoppingCart={props.ShowShoppingCart}
      />
    </section>
  );
};
