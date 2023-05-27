export type ImageClass = "big" | "wide" | null;

export function getImageClass(i: number): ImageClass {
  return i % 5 === 0 ? "big" : i % 6 === 0 ? "wide" : null;
}
