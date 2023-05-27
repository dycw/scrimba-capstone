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
    return <Image key={photo.id} url={photo.url} className={imageClass} />;
  };

  const photos = context.photos.map(render);

  return (
    <main className="photos">
      <h1>Images go here</h1>
      {photos}
    </main>
  );
}
