import { Context } from "../Context";
import { Photo } from "../data";
import useHover from "../hooks/useHover";
import { useContext } from "react";

type Props = {
  photo: Photo;
};

export default function CartItem(props: Props) {
  const context = useContext(Context);
  const { isHovered, ref } = useHover();

  const handleClick = () => {
    context.toggleCart(props.photo);
  };

  const binSuffix = isHovered ? "fill" : "line";

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${binSuffix}`}
        onClick={handleClick}
        ref={ref}
      ></i>
      <img src={props.photo.url} alt="" width="130px" />
      <p>{props.photo.cost}</p>
    </div>
  );
}
