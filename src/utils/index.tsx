export function getClass(i: number): "big" | "wide" | null {
  return i % 5 === 0 ? "big" : i % 6 === 0 ? "wide" : null;
}
