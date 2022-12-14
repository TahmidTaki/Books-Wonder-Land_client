import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-around navbar bg-secondary-content text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-green-800 text-2xl font-bold rounded-box w-52"
          >
            <li className="text-primary-content">
              <Link to="/dashboard">DashBoard</Link>
            </li>
            <li className="text-primary-content">
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost normal-case sm:text-md md:text-xl">
          Books WonderLand
        </Link>
      </div>

      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogOut} to="/signup" className="btn btn-sm">
            SignOut
          </button>
        ) : (
          <Link to="/signup" className="btn btn-sm">
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
