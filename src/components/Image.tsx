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
  const handleClick = () => {
    context.toggleFavorite(props.photo.id);
  };

  const isFavorite = props.photo.isFavorite;
  const heartClass = isFavorite ? "ri-heart-fill" : "ri-heart-line";
  const heartIcon = (isFavorite || isHovered) && (
    <i className={`${heartClass} favorite`} onClick={handleClick}></i>
  );
  const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>;

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
