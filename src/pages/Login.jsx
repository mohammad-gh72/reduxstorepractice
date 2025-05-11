import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput } from "../components";
import { z, ZodError } from "zod";
import { Button } from "../components/shared";
import { useDispatch, useSelector } from "react-redux";
import { login, statusForLogin } from "../features/user/userSlice";
import { customFetch } from "../utils";
import store from "../store";
import { AxiosError } from "axios";
import { useEffect } from "react";

const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, "Username is required")
    .regex(/^[^\d]/, "Username must not start with a number"),

  password: z.string().min(8, "Password should be at least 8 characters long"),
});

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const loginData = Object.fromEntries(formData);

    const validatedLoginData = loginSchema.parse(loginData);
    const response = await customFetch.post("auth/local", validatedLoginData);
    const data = {
      username: response?.data?.user?.username,
      jwt: response?.data?.jwt,
    };
    store.dispatch(login(data));

    return redirect("/");
  } catch (error) {
    if (error instanceof ZodError) {
      store.dispatch(statusForLogin(error.errors));
    } else if (error instanceof AxiosError) {
      store.dispatch(statusForLogin(error?.response?.data?.error?.message));
    } else {
      store.dispatch(statusForLogin("Something went wrong try again later"));
    }
  }
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.userState);

  useEffect(() => {
    if (!loginError.loginStatus) return;
    let timer = setTimeout(() => {
      dispatch(statusForLogin(null));
    }, 20000);

    return () => clearTimeout(timer);
  }, [loginError.loginStatus]);

  async function asGuestLogin() {
    const guest = { identifier: "demo user", password: "secret" };

    try {
      const response = await customFetch.post("auth/local", guest);
      const {
        user: { username },
        jwt,
      } = response.data;

      dispatch(login({ username, jwt }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center ] relative overflow-hidden ">
      <img
        src="public/loginimg.jpg"
        alt="login"
        className="w-[100%] h-[100%] z-[-1111] absolute opacity-[0.5] object-cover"
      />
      <Form method="post">
        <div
          className="flex flex-col  bg-[var(--primary-color)] z-[9999]"
          style={{ color: "var(--secondary-color)" }}
        >
          <FormInput type="text" name="identifier" label="username" />
          <FormInput
            type="password"
            name="password"
            label="password"
            className="ml-1"
          />
          <div className="flex flex-row-reverse">
            <Button
              className="bg-[var(--secondary-color)] relative flex justify-center items-center"
              style={{
                color: "var(--primary-color)",
                clipPath: `polygon(19% 0, 100% 0, 100% 100%, 60% 100%)`,
              }}
            >
              <span className="absolute right-[15px]  ">Login</span>
            </Button>
            <Button
              className="bg-[var(--secondary-color)] relative  flex justify-center items-center"
              style={{
                color: "var(--primary-color)",
                clipPath: `polygon(0 1%, 60% 0, 100% 100%, 0% 100%)`,
              }}
            >
              <span className="absolute left-[25px]  ">Signup</span>
            </Button>
          </div>
        </div>
      </Form>
      <div className="flex gap-2">
        <Link
          to="/"
          className="mt-4 bg-black text-white w-[100px] p-2 flex justify-center items-center hover:text-[17px] transition-all duration-300 ease-in-out "
        >
          Home
        </Link>
        <button
          onClick={() => asGuestLogin()}
          className="mt-4 bg-black text-white w-[100px] p-2 flex justify-center items-center hover:text-[17px] transition-all duration-300 ease-in-out cursor-pointer "
        >
          As Guest
        </button>
      </div>
      <div className="flex flex-col mt-2">
        {loginError?.loginStatus !== null &&
        Array.isArray(loginError?.loginStatus) ? (
          loginError?.loginStatus.map((err, ind) => (
            <div className="flex flex-col gap-1 text-yellow-200" key={ind}>
              {err.message}
            </div>
          ))
        ) : (
          <div className="  text-yellow-200">{loginError.loginStatus}</div>
        )}
      </div>
    </div>
  );
}
export default Login;
