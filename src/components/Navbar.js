import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserLogIn = localStorage.getItem("loginUser");

  const navigate = useNavigate();

  const handleDelete = () => {
    localStorage.removeItem("loginUser");
    navigate("/login");
  };
  return (
    <div>
      <ul>
        {isUserLogIn ? (
          <>
            {" "}
            <li>
              <Link to="/">DashBoard</Link>
            </li>
            <li>
              <button onClick={() => handleDelete()}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
