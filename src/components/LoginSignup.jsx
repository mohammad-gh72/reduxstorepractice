import { Link } from "react-router-dom";

function LoginSignup() {
  return (
    <div className="flex gap-2 text-[14px]">
      <Link to="login">Login</Link>/<Link to="signup">Signup</Link>
    </div>
  );
}
export default LoginSignup;
