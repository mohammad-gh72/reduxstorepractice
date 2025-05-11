import { useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";

function LoggedInBar({ user }) {
  const dispatch = useDispatch();
  return (
    <div className="mr-2 capitalize text-[14px] flex gap-4 justify-center items-center">
      welcome {user?.user?.username}
      <button
        onClick={() => {
          dispatch(logout());
        }}
        className="text-white bg-black p-1 cursor-pointer text-[12px] hover:scale-105 transition-all duration-200 ease-in-out"
      >
        SignOut
      </button>
    </div>
  );
}
export default LoggedInBar;
