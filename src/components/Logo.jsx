import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Logo() {
  const logoRef = useRef();

  //TODO-add theme state change in dependency array later you created it
  useEffect(() => {
    const theme = document.documentElement.classList.contains("dark");

    if (theme) {
      logoRef.current.style.filter = "invert(1)";
    } else {
      logoRef.current.style.filter = "invert(0)";
    }
  }, []);

  return (
    <Link to="/">
      <div className="text-2xl font-bold text-blue-600 cursor-pointer hover:animate-pulse">
        <img
          ref={logoRef}
          className="w-[100px]"
          src="./public/happyshop-logo.png"
          alt="logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
