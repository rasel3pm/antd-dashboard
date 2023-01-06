import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h3>Admin Dashboard</h3>

      <NavLink to="/create-post">Create Post</NavLink>
    </div>
  );
};

export default Dashboard;
