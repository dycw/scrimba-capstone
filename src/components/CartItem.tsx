import { Photo } from "../data";

type Props = {
  photo: Photo;
};

export default function CartItem(props: Props) {
  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line"></i>
      <img src={props.photo.url} alt="" width="130px" />
      <p>$5.99</p>
    </div>
  );
}
