import { Context } from "../Context";
import { Photo, readData } from "../data";
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
    return (
      <div>
        <img src={photo.url} alt="" />
        <p> {photo.isFavorite ? "isFav" : "isNotFav"} </p>
      </div>
    );
  };
  const photos = context.photos.map(render);
  return (
    <main className="photos">
      <h1>Images go here</h1>
      {photos}
    </main>
  );
}
