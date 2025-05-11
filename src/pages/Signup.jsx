import { Form, Link, redirect } from "react-router-dom";
import { FormInput } from "../components";
import { Button } from "../components/shared";
import { customFetch } from "../utils";
import { AxiosError } from "axios";
import store from "../store";
import { statusForSignUp } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const registerData = Object.fromEntries(formData);
    const response = await customFetch.post(
      "auth/local/register",
      registerData
    );
    store.dispatch(statusForSignUp(null));

    return redirect("/login");
  } catch (error) {
    {
      if (error instanceof AxiosError) {
        store.dispatch(statusForSignUp(error?.response?.data?.error?.message));
        return null;
      }

      store.dispatch(statusForSignUp("Something went wrong"));
      return null;
    }
  }
};

function Signup() {
  const dispatch = useDispatch();
  const signUpError = useSelector((state) => state.userState);

  useEffect(() => {
    if (!signUpError.signUpStatus) return;
    let timer = setTimeout(() => {
      dispatch(statusForSignUp(null));
    }, 2000);

    return () => clearTimeout(timer);
  }, [signUpError.signUpStatus]);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center ] relative overflow-hidden ">
      <img
        src="/register.jpg"
        alt="login"
        className="w-[100%] h-[100%] z-[-1111] absolute opacity-[0.3] object-cover"
      />
      <Form method="post">
        <div
          className="flex flex-col  bg-[var(--primary-color)] z-[9999]"
          style={{ color: "var(--secondary-color)" }}
        >
          <FormInput type="text" name="username" label="username" />
          <FormInput type="email" name="email" label="email" className="ml-9" />
          <FormInput
            type="password"
            name="password"
            label="password"
            className="ml-1"
          />

          <Button
            className="bg-[var(--secondary-color)] relative flex justify-center items-center w-[180px] place-self-end"
            style={{
              color: "var(--primary-color)",
              clipPath: `polygon(19% 0, 100% 0, 100% 100%, 60% 100%)`,
            }}
          >
            <span className="absolute right-[15px]  ">Signup</span>
          </Button>
        </div>
      </Form>

      <Link
        to="/"
        className="mt-4 bg-black text-white w-[100px] p-2 flex justify-center items-center hover:text-[17px] transition-all duration-300 ease-in-out "
      >
        Home
      </Link>

      {signUpError?.signUpStatus && <div>{signUpError.signUpStatus}</div>}
    </div>
  );
}
export default Signup;
