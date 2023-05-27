import { Photo } from "./data";
import { createContext, Dispatch, SetStateAction } from "react";
import { useImmer } from "use-immer";

type ContextType = {
  photos: Photo[];
  setPhotos: Dispatch<SetStateAction<Photo[]>>;
  toggleFavorite: (id: number) => void;
};
export const Context = createContext<ContextType>({} as ContextType);

type Props = {
  children: React.ReactElement;
};

export function ContextProvider(props: Props) {
  const [photos, setPhotos] = useImmer<Photo[]>([]);

  const toggleFavorite = (id: number) => {
    setPhotos((photos: Photo[]) => {
      const photo = photos.find((photo) => photo.id === id);
      if (photo) {
        photo.isFavorite = !photo.isFavorite;
      }
    });
  };

  return (
    <Context.Provider value={{ photos, setPhotos, toggleFavorite }}>
      {props.children}
    </Context.Provider>
  );
}
