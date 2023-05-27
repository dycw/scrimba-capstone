import { Context } from "../Context";
import Image from "../components/Image";
import { Photo, readData } from "../data";
import { getImageClass } from "../utils";
import { useContext, useEffect } from "react";

export default function Photos() {
  const context = useContext(Context);

  useEffect(() => {
    const runReadData = async () => {
      context.setPhotos(await readData());
    };
    runReadData();
  }, []);

  const render = (photo: Photo) => {
    const imageClass = getImageClass(photo.id);
    return <Image key={photo.id} photo={photo} className={imageClass} />;
  };

  const photos = context.photos.map(render);

  return <main className="photos">{photos}</main>;
}
