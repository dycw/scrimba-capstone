import { ImageClass } from "../utils";
import { useState } from "react";

type Props = {
  url: string;
  className: ImageClass;
};

export default function Image(props: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("entered");
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("left");
  };

  return (
    <div
      className={`${props.className} image-container`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={props.url} className="image-grid" />
    </div>
  );
}
