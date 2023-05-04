import React from "react";
import "./logout.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";

const LogoutForm = () => {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Logged out successfully");
          navigate("/");
        } else {
          alert("Error logging out");
        }
      })
      .catch((error) => {
        console.error("Error logging out:", error);
        alert("Error logging out");
      });
  }

  return (
    <div className="logout-form-container">
      <div className="form-container">
        <h2 className="goingout">Logout</h2>
        <form onSubmit={handleLogout} className="logout-form">
          <p className="paragraph">Are you sure you want to logout?</p>
          <button onClick={handleLogout} className="btnn__logout" type="button">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogoutForm;
