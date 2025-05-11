import Logo from "./Logo";
import Menue from "./Menue";

function Navbar() {
  return (
    <div className="w-[100%] flex justify-between items-center mt-16">
      <Logo />
      <Menue />
    </div>
  );
}
export default Navbar;
