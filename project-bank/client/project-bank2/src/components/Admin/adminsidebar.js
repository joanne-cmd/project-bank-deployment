import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBook,
  faBriefcase,
  faEnvelope,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./adminsidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="options">
          <NavLink to="/cohorts">
            <FontAwesomeIcon icon={faChartLine} /> <span>Cohorts</span>
          </NavLink>
        </li>
        
        <li className="options">
          <NavLink to="/adminprojects">
            <FontAwesomeIcon icon={faBriefcase} /> <span>Projects</span>
          </NavLink>
        </li>
        
        <li className="options">
          <NavLink to="/admincontacts">
            <FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span>
          </NavLink>
        </li>
      
        <li className="auth-options">
          <NavLink to="/logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
