import { useState, useEffect, RefObject } from "react";

const useClickInside = (ref: RefObject<HTMLElement>): boolean => {
  const [clickedInside, setClickedInside] = useState(false);

  useEffect(() => {
    const handleClickInside = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        setClickedInside(true);
      } else {
        setClickedInside(false);
      }
    };

    document.addEventListener("mousedown", handleClickInside);

    return () => {
      document.removeEventListener("mousedown", handleClickInside);
    };
  }, [ref]);

  return clickedInside;
};

export default useClickInside;
