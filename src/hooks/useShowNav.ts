import { useEffect, useState } from "react";

const useShowNav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const transitionNav = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return [show] as const;
};

export default useShowNav;
