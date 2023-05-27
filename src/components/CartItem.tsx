import { Context } from "../Context";
import { Photo } from "../data";
import { useContext } from "react";

type Props = {
  photo: Photo;
};

export default function CartItem(props: Props) {
  const context = useContext(Context);

  const handleClick = () => {
    context.toggleCart(props.photo);
  };

  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" onClick={handleClick}></i>
      <img src={props.photo.url} alt="" width="130px" />
      <p>$5.99</p>
    </div>
  );
}
