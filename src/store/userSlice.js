import { createSlice } from "@reduxjs/toolkit";
import { saveState } from "../components/LocalStorage";

const users =
  localStorage.getItem("users") !== null
    ? JSON.parse(localStorage.getItem("users"))
    : [];
const initialState = users;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser(state, action) {
      state.push({
        name: action.payload.name,
        mobile: action.payload.mobile,
        email: action.payload.email,
        password: action.payload.password,
      });
      saveState(state);
    },
    editUser(state, action) {
      console.log(action.payload);
      state.map((user) => {
        if (user.email === action.payload.email) {
          user.name = action.payload.name;
          user.mobile = action.payload.mobile;
        }
      });
      saveState(state);
    },
    changePassword(state, action) {
      state.map((user) => {
        if (user.email === action.payload.email) {
          user.password = action.payload.newPassword;
        }
      });
      saveState(state);
    },
  },
});

export const { registerUser, editUser, changePassword } = userSlice.actions;
export default userSlice.reducer;
