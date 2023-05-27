import { useEffect, useRef } from "react";
import { useImmer } from "use-immer";

export default function useHover() {
  const [isHovered, setIsHovered] = useImmer(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered((_: boolean) => true);
  };
  const handleMouseLeave = () => {
    setIsHovered((_: boolean) => false);
  };

  useEffect(() => {
    ref.current?.addEventListener("mouseenter", handleMouseEnter);
    ref.current?.addEventListener("mouseleave", handleMouseLeave);
    const cleanup = () => {
      ref.current?.removeEventListener("mouseenter", handleMouseEnter);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
    return cleanup;
  }, []);

  return { isHovered, ref };
}
