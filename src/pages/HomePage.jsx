import { Outlet } from "react-router-dom";
import {
  CartWidget,
  Footer,
  LoggedInBar,
  LoginSignup,
  Navbar,
} from "../components";
import { useSelector } from "react-redux";

function HomePage() {
  const isUserLoggedIn = useSelector((state) => state.userState);

  return (
    <div className=" h-[100%] flex flex-col justify-between ">
      <div className="place-self-end absolute top-4 right-8  ">
        <CartWidget />
      </div>
      <div className="flex flex-col w-[100%] align-element ">
        <Navbar />
        <div className="w-[100%] flex justify-end bg-[var(--accent-color)] p-1 mb-4  ">
          {isUserLoggedIn.user ? (
            <LoggedInBar user={isUserLoggedIn} />
          ) : (
            <LoginSignup />
          )}
        </div>
        <Outlet />
      </div>

      <footer
        className="w-[100%] h-[50px]   bg-[var(--primary-color)] flex  items-center "
        style={{ color: "var(--secondary-color)" }}
      >
        <Footer />
      </footer>
    </div>
  );
}
export default HomePage;
