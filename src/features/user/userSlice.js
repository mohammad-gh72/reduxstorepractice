import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage safely
function loadUserFromLocalStorage() {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
}

const initialUserState = {
  user: loadUserFromLocalStorage(),
  status: null,
  signUpStatus: null,
  loginStatus: null,
};

const userSlice = createSlice({
  initialState: initialUserState,
  name: "user",
  reducers: {
    login: (state, action) => {
      const loggedinUser = action.payload;
      state.user = loggedinUser;
      localStorage.setItem("user", JSON.stringify(loggedinUser));
      if (loggedinUser.username === "demo user") {
        state.status = "Hello guest !";
      } else {
        state.status = `Welcome ${loggedinUser.username}`;
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },

    statusForSignUp: (state, action) => {
      state.signUpStatus = action.payload;
    },
    statusForLogin: (state, action) => {
      state.loginStatus = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { login, logout, statusForSignUp, statusForLogin } =
  userSlice.actions;
