import { useRouteError } from "react-router-dom";

function ApiError() {
  const error = useRouteError();
  console.log(error);
  if ((error.status = "404")) {
    return (
      <p className="w-[100%] bg-amber-700 flex justify-center items-center text-[white] animate-pulse">
        Page Not Found !⛔
      </p>
    );
  }

  return (
    <div className="w-[100%] bg-amber-700 flex justify-center items-center text-[white] animate-pulse">
      <p>
        {error.status} {error.statusText}
      </p>
    </div>
  );
}
export default ApiError;
