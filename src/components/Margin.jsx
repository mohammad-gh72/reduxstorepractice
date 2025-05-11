import { useEffect, useRef, useState } from "react";

function Margin() {
  const imgRef = useRef();

  //TODO-add theme state change in dependency array later you created it
  useEffect(() => {
    const theme = document.documentElement.classList.contains("dark");

    if (theme) {
      imgRef.current.style.filter = "invert(1)";
    } else {
      imgRef.current.style.filter = "invert(0)";
    }
  }, []);

  return (
    <div className="w-[100%] opacity-5  ">
      <img
        ref={imgRef}
        className="w-[100%]"
        src="./public/margin.svg"
        draggable="false"
      />
    </div>
  );
}
export default Margin;
