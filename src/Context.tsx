import { Photo } from "./data";
import { createContext, Dispatch, SetStateAction } from "react";
import { useImmer } from "use-immer";

type ContextType = {
  photos: Photo[];
  setPhotos: Dispatch<SetStateAction<Photo[]>>;
  toggleFavorite: (id: number) => void;
  cart: Photo[];
  setCart: Dispatch<SetStateAction<Photo[]>>;
  toggleCart: (photo: Photo) => void;
};
export const Context = createContext<ContextType>({} as ContextType);

type Props = {
  children: React.ReactElement;
};

export function ContextProvider(props: Props) {
  const [photos, setPhotos] = useImmer<Photo[]>([]);
  const [cart, setCart] = useImmer<Photo[]>([]);

  const toggleFavorite = (id: number) => {
    setPhotos((photos: Photo[]) => {
      const photo = photos.find((photo) => photo.id === id);
      if (photo) {
        photo.isFavorite = !photo.isFavorite;
      }
    });
  };

  const toggleCart = (photo: Photo) => {
    setCart((photos: Photo[]) => {
      const index = photos.findIndex((p) => p.id === photo.id);
      if (index !== -1) {
        photos.splice(index, 1);
      } else {
        photos.push(photo);
      }
    });
  };

  return (
    <Context.Provider
      value={{
        photos,
        setPhotos,
        toggleFavorite,
        cart,
        setCart,
        toggleCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
