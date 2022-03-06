import React from "react";

const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">Juan Lopez</span>
      <button className="btn btn-outline-danger">
        <span>Logout</span>
      </button>
    </div>
  );
};

export default NavBar;
