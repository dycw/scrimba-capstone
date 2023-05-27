import { Context } from "../Context";
import { Photo } from "../data";
import { useContext } from "react";

export default function Photos() {
  const context = useContext(Context);
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
