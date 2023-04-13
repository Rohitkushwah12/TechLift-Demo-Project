import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Regiter from "./components/Regiter";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/register" element={<Regiter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404. Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
