import { Context } from "../Context";
import CartItem from "../components/CartItem";
import { Photo } from "../data";
import { useContext } from "react";

export default function Cart() {
  const context = useContext(Context);

  const render = (photo: Photo) => <CartItem key={photo.id} photo={photo} />;
  const cart = context.cart.map(render);

  const total = context.cart.reduce((acc, el) => acc + el.cost, 0);

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cart}
      <p className="total-cost">Total: ${total}</p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}
