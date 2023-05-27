import { Context } from "../Context";
import { Photo } from "../data";
import { ImageClass } from "../utils";
import { useContext } from "react";
import { useImmer } from "use-immer";

type Props = {
  photo: Photo;
  className: ImageClass;
};

export default function Image(props: Props) {
  const context = useContext(Context);
  const [isHovered, setIsHovered] = useImmer(false);

  const handleMouseEnter = () => {
    setIsHovered((_: boolean) => true);
  };
  const handleMouseLeave = () => {
    setIsHovered((_: boolean) => false);
  };
  const handleClickHeart = () => {
    context.toggleFavorite(props.photo.id);
  };
  const handleClickCart = () => {
    context.toggleCart(props.photo);
  };

  const heartClass = props.photo.isFavorite ? "ri-heart-fill" : "ri-heart-line";
  const heartIcon = (props.photo.isFavorite || isHovered) && (
    <i className={`${heartClass} favorite`} onClick={handleClickHeart}></i>
  );
  const isInCart = context.cart.some((photo) => photo.id === props.photo.id);
  const cartClass = isInCart ? "ri-shopping-cart-fill" : "ri-add-circle-line";
  const cartIcon = (isInCart || isHovered) && (
    <i className={`${cartClass} cart`} onClick={handleClickCart}></i>
  );

  return (
    <div
      className={`${props.className} image-container`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={props.photo.url} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}
