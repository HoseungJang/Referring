import { useLayoutEffect } from "react";

export const useScreenEffect = (listener: () => void, deps: any[]) => {
  useLayoutEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [...deps, listener]);
};
