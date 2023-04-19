import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashBoard from "./components/DashBoard/DashBoard";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import UserProfileEdit from "./components/Pages/UserProfileEdit";
import ChangePassword from "./components/Pages/ChangePassword";
import UserAuthentication from "./components/UserAuth/UserAuthentication";
import Navbar from "./components/Navbar/Navbar";
import {
  changePassword,
  editProfile,
  login,
  register,
} from "./routeTypes/routeTypes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<UserAuthentication component={DashBoard} />}
        />
        <Route path={register} element={<Register />} />
        <Route
          path={login}
          element={<UserAuthentication component={Login} />}
        />
        <Route
          path={editProfile}
          element={<UserAuthentication component={UserProfileEdit} />}
        />
        <Route
          path={changePassword}
          element={<UserAuthentication component={ChangePassword} />}
        />

        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404. Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
