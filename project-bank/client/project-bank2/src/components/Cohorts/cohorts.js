import React, { useEffect, useState } from "react";
import CohortForm from "../CohortForm/cohortForm";
import "./cohort.css";
import AdminSidebar from "./../Admin/adminsidebar";
import Header from "../student/Header";
import { useNavigate } from "react-router-dom";

const Cohorts = () => {
  const [cohorts, setCohorts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCohortIndex, setSelectedCohortIndex] = useState(-1);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCohorts();
  }, []);

  const fetchCohorts = async () => {
    try {
      const res = await fetch("/cohorts");
      const data = await res.json();
      setCohorts(data);
    } catch (err) {
      alert(err);
    }
  };

 

  const handleAddCohort = (newCohort) => {

    setCohorts([...cohorts, newCohort]);
    setShowForm(false);
  };

  

  const handleShowForm = () => {
    setSelectedCohortIndex(-1);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleDeleteCohort = async (id) => {
    try {
      const shouldDelete = window.confirm(
        "Are you sure you want to delete this cohort?"
      );
      if (shouldDelete) {
        const res = await fetch(`/cohorts/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          const newCohorts = cohorts.filter((cohort) => cohort.id !== id);
          setCohorts(newCohorts);
        } else {
          
          throw new Error("Failed to delete cohort");
        }
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete cohort");
    }
  };

  return (
    <>
      <Header />
      <AdminSidebar />
      <div className="cohorts">
        <section className="cohortsHead">
          <h1 className="title__cohorts">COHORTS</h1>
          <button onClick={handleShowForm} className="primary__add">
            ADD COHORT
          </button>
        </section>

        {showForm && (
          <div className="popup">
            <div className="popup-inner">
              <CohortForm
                onClose={handleCloseForm}
                onAdd={handleAddCohort}
                onUpdate={setCohorts}
                selectedCohort={cohorts[selectedCohortIndex]}
              />
            </div>
          </div>
        )}

        {cohorts.length > 0 ? (
          <table className="course__details">
            <thead>
              <tr>
                <th>NAME</th>
                <th>COURSE</th>
                <th>NUMBER OF STUDENT</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cohorts.map((cohort, index) => (
                <tr key={index}>
                  <td>{cohort.name}</td>
                  <td>{cohort.course_id}</td>
                  <td>{cohort.number_of_students}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteCohort(cohort.id)}
                    >
                      Delete
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1
            style={{ width: "100%", textAlign: "center", position: "absolute" }}
          >
            No cohorts found
          </h1>
        )}
      </div>
    </>
  );
};

export default Cohorts;
