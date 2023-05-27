import { Context } from "../Context";
import CartItem from "../components/CartItem";
import { Photo } from "../data";
import { useContext } from "react";
import { useImmer } from "use-immer";

const PLACE_ORDER = "Place Order";

export default function Cart() {
  const context = useContext(Context);
  const [buttonText, setButtonText] = useImmer(PLACE_ORDER);

  const render = (photo: Photo) => <CartItem key={photo.id} photo={photo} />;
  const cart = context.cart.map(render);

  const total = context.cart.reduce((acc, el) => acc + el.cost, 0);
  const isButtonDisabled = context.cart.length === 0;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setButtonText((_: string) => "Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText((_: string) => PLACE_ORDER);
      context.setCart((_: Photo[]) => []);
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cart}
      <p className="total-cost">Total: ${total}</p>
      <div className="order-button">
        <button disabled={isButtonDisabled} onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </main>
  );
}
