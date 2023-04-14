const { createSlice } = require("@reduxjs/toolkit");

const userAuth =
  localStorage.getItem("userAuth") !== null
    ? JSON.parse(localStorage.getItem("userAuth"))
    : {};
const initialState = userAuth;

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    loginAction(state, action) {
      state = action.payload;

      localStorage.setItem("userAuth", JSON.stringify(state));
    },
    logoutAction(state, action) {
      state = {};
    },
  },
});
export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
