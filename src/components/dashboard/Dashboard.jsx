import React from "react";

// import component
import Sidebar from "./components/sidebar/Sidebar";
import Desktop from "./components/desktop/Desktop";

// import style
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Sidebar />

        <Desktop />
      </div>
    </>
  );
};

export default Dashboard;
