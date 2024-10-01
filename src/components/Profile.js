import React from "react";

const Profile = ({ profile, showGoals }) => {
  if (!profile) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="profile-card">
      <h3>Profile</h3>
      <div className="profile-info-row">
        <strong>Username:</strong> <span>{profile.email}</span>
      </div>
      <div className="profile-info-row">
        <strong>Remaining Analyze Requests:</strong>{" "}
        <span>{profile.analyze_requests}</span>
      </div>
      <div className="profile-info-row">
        <strong>Goals:</strong>{" "}
        <span>
          <button onClick={showGoals}>View Goals</button>
        </span>
      </div>
    </div>
  );
};

export default Profile;
