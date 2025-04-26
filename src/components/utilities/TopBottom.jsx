import React, { useEffect, useState } from "react";
import { BiSolidUpArrowSquare } from "react-icons/bi";

const TopBottom = () => {
  const [show, setShow] = useState(false);
  const btn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollBottom = () => {
    let hiddenHeight = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > hiddenHeight) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBottom);
  }, []);

  return (
    <div className="flex justify-center  items-center">
      {show && (
        <div
          onClick={btn}
          className="cursor-pointer items-center w-12 h-12 animate-bottomToTop rounded-full fixed bottom-20 right-20 z-999 justify-center flex bg-primary text-white shadow-xl "
        >
          <BiSolidUpArrowSquare className="text-3xl " />
        </div>
      )}
    </div>
  );
};

export default TopBottom;
