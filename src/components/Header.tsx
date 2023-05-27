import { Context } from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const context = useContext(Context);

  const cartClassSuffix = context.cart.length >= 1 ? "fill" : "line";

  return (
    <header>
      <Link to="/">
        <h1>Pic Some</h1>
      </Link>
      <Link to="/cart">
        <i className={`ri-shopping-cart-${cartClassSuffix} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}
