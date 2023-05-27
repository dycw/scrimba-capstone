type RawPhoto = { url: string; id: string; isFavorite: boolean };
export type Photo = {
  url: string;
  id: number;
  isFavorite: boolean;
  cost: number;
};

export const readData = async () => {
  const resp = await fetch("scrimba-react-bootcamp-images/images.json");
  const rawPhotos: RawPhoto[] = await resp.json();
  const convert = (p: RawPhoto): Photo => {
    const idAsInt = parseInt(p.id);
    return {
      url: p.url,
      id: idAsInt,
      isFavorite: p.isFavorite,
      cost: round(5.99 * (idAsInt + 1)),
    };
  };
  return rawPhotos.map(convert);
};

const round = (num: number) => {
  return Math.round(num * 100) / 100;
};
