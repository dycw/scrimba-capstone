import { Context } from "../Context";
import { Photo } from "../data";
import { useContext } from "react";
import { useImmer } from "use-immer";

type Props = {
  photo: Photo;
};

export default function CartItem(props: Props) {
  const context = useContext(Context);
  const [isHovered, setIsHovered] = useImmer(false);

  const handleClick = () => {
    context.toggleCart(props.photo);
  };
  const handleMouseEnter = () => {
    setIsHovered((_: boolean) => true);
  };
  const handleMouseLeave = () => {
    setIsHovered((_: boolean) => false);
  };

  const binSuffix = isHovered ? "fill" : "line";

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${binSuffix}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></i>
      <img src={props.photo.url} alt="" width="130px" />
      <p>{props.photo.cost}</p>
    </div>
  );
}
