type RawPhoto = { url: string; id: string; isFavorite: boolean };
export type Photo = { url: string; id: number; isFavorite: boolean };

export const readData = async () => {
  const resp = await fetch("scrimba-react-bootcamp-images/images.json");
  const rawPhotos: RawPhoto[] = await resp.json();
  const convert = (p: RawPhoto): Photo => {
    return { url: p.url, id: parseInt(p.id), isFavorite: p.isFavorite };
  };
  return rawPhotos.map(convert);
};
