import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import "./navbar.css";

const Navbar = () => {

    const handleSearch = () => {
        
    }
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img
            src="https://cdn.dribbble.com/userupload/6810642/file/original-45a54e0571ae13ce154f565f49615607.png?resize=400x0"
            alt="logo"
            className="navbar-logo-image"
          />
          <h3>Bookstore</h3>
        </div>
        <div className="navbar-search-container">
          <input
            type="text"
            placeholder="search for books"
            className="navbar-input"
          />
          <div className="navbar-search-icon" onClick={handleSearch}>
            <CiSearch />
          </div>
        </div>
        <div className="navbar-profile-container">
          <p>
            <IoMdNotificationsOutline />
          </p>
          <p>
            <CgProfile />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;