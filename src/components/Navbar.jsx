import { Link, NavLink } from "react-router";  
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);

  const handleLogout = () => {
    Logout()
      .then(() => { alert("Logout successfully!"); })
      .catch((error) => { console.log(error); });
  };

  const navLinkClass = ({ isActive }) =>
    `px-3 py-1 rounded ${
      isActive ? "bg-green-400 text-white" : "hover:bg-green-300"
    }`;

  return (
    <div className="p">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to="/my-profile" className={navLinkClass}>My Profile</NavLink></li>
              <li><NavLink to="/my-orders" className={navLinkClass}>My Orders</NavLink></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">ToyTopia</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/my-profile" className={navLinkClass}>My Profile</NavLink></li>
            <li><NavLink to="/my-orders" className={navLinkClass}>My Orders</NavLink></li>
          </ul>
        </div>

        <div className="navbar-end flex gap-4 items-center">
          {user && (
            <div className="flex flex-col items-center group relative">
              <img
                src={user.photoURL || userIcon}
                alt="User avatar"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-green-300 transition-all duration-200 cursor-pointer"
              />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 shadow-md">
                {user.displayName || user.email?.split('@')[0] || "User"}
              </span>
            </div>
          )}

          {user ? (
            <button onClick={handleLogout} className="btn btn-sm text-white bg-green-500 hover:bg-green-600">
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-sm text-white bg-green-500 hover:bg-green-600">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
