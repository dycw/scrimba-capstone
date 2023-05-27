import { Photo } from "../data";
import { ImageClass } from "../utils";

type Props = {
  url: string;
  className: ImageClass;
};

export default function Image(props: Props) {
  return (
    <div className={`${props.className} image-container`}>
      <img src={props.url} className="image-grid" />
    </div>
  );
}
