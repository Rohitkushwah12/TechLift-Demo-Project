import userReducer from "./userSlice";
import userAuthReducer from "./authSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    users: userReducer,
    userAuth: userAuthReducer,
  },
});

export default store;
