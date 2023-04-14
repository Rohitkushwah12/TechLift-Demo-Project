import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import UserProfileEdit from "./components/UserProfileEdit";
import ChangePassword from "./components/ChangePassword";
import UserAuthentication from "./components/UserAuthentication";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<UserAuthentication component={DashBoard} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/edit-profile"
          element={<UserAuthentication component={UserProfileEdit} />}
        />
        <Route
          path="/change-password"
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
