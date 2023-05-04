import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./projectdets.css";

const ProjectDetails = () => {
  const location = useLocation();
  const projectData = location.state?.projectData;

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`courses/${projectData.course_id}/projects/${projectData.id}}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log(`Project ${projectData.id} deleted successfully`);
        navigate("/projects");
      } else {
        console.error(`Failed to delete project ${projectData.id}`, response.status);
      }
    } catch (error) {
      console.error(`Failed to delete project ${projectData.id}`, error);
    }
  };

  return (
    <div className="project-details">
      <h2 className="project-details__heading">Project Details</h2>
      <div className="project-details__content">
        <p className="project-details__content__item">
          <span className="project-details__content__label">Project Name:</span>{" "}
          {projectData.name}
        </p>
        <p className="project-details__content__item">
          <span className="project-details__content__label">Description:</span>{" "}
          {projectData.description}
        </p>
        <p className="project-details__content__item">
          <span className="project-details__content__label">Members:</span>{" "}
          {projectData.members}
        </p>
        <p className="project-details__content__item">
          <span className="project-details__content__label">GitHub Link:</span>{" "}
          {projectData.github_link}
        </p>
        <p className="project-details__content__item">
         <Link to='/projects'> <button  className="project-details__go-back">
              Go Back to Projects
          </button></Link>
          <button  className="project-details__delete-button" onClick={() => handleDelete()}>delete</button>
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
