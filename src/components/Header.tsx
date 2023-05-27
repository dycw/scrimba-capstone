import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Pic Some</h1>
      </Link>
      <Link to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
    </header>
  );
}
