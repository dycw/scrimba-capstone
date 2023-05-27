import { readData, Photo } from "./data";
import { useState, createContext } from "react";

type ContextType = {
  photos: Photo[];
};
const defaultState = { value: "", photos: await readData() };
export const Context = createContext<ContextType>(defaultState);

type Props = {
  children: React.ReactElement;
  initPhotos?: Photo[];
};

export function ContextProvider(props: Props) {
  const [photos, _] = useState<Photo[]>(
    props.initPhotos ?? defaultState.photos
  );

  return (
    <Context.Provider value={{ photos }}>{props.children}</Context.Provider>
  );
}
