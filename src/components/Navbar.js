import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserLogIn = localStorage.getItem("userAuth");

  const navigate = useNavigate();

  const handleDelete = () => {
    localStorage.removeItem("userAuth");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="navbar-nav">
        {isUserLogIn ? (
          <>
            {" "}
            <li>
              <Link className="nav-link" to="/">
                DashBoard
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/edit-profile">
                Edit Profile
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/change-password">
                Change Password
              </Link>
            </li>
            <li>
              <button
                className="btn btn-success "
                onClick={() => handleDelete()}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
