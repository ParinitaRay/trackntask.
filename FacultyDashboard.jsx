import React from "react";
import "./FacultyDashboard.css";

const FacultyDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="profile-card">
        <div className="avatar"></div>
        <div className="name">NAME / USERNAME</div>
        <div className="info-box">
          <p>Email</p>
          <p>Department</p>
          <p>Qualification</p>
        </div>
      </div>
      <div className="actions">
        <button className="action-button">Create class</button>
        <button className="action-button">Add works</button>
      </div>
    </div>
  );
};

export default FacultyDashboard;
