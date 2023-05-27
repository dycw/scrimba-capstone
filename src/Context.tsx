import { Photo } from "./data";
import { useState, createContext, Dispatch, SetStateAction } from "react";

type ContextType = {
  photos: Photo[];
  setPhotos: Dispatch<SetStateAction<Photo[]>>;
};
export const Context = createContext<ContextType>({} as ContextType);

type Props = {
  children: React.ReactElement;
};

export function ContextProvider(props: Props) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  return (
    <Context.Provider value={{ photos, setPhotos }}>
      {props.children}
    </Context.Provider>
  );
}
