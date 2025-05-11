import { Link } from "react-router-dom";
import { menueItems } from "../utils";

function Menue() {
  return (
    <nav
      style={{
        fontSize: "var(--menue-fontsize)",
        color: "var(--primary-color)",
      }}
      className="capitalize flex justify-center items-center gap-4 flex-row-reverse "
    >
      {menueItems.map((m) => (
        <Link key={m.label} to={m.path}>
          {m.label}
        </Link>
      ))}
    </nav>
  );
}
export default Menue;
