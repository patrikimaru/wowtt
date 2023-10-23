import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function MyNavbar() {
  const { logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      window.location.replace("/");
    }
  };

  return (
    <div className="sidebar">
      <div>
        <img src="/logo.png" width={170} height={60} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/home/appointments">
              Reservation
            </Link>
          </li>
          <li>
            <Link to="/home/confirm">
              Confirm Reservation
            </Link>
          </li>
          <li>
            <span onClick={handleLogout}>
              Logout
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MyNavbar;
