import React from "react";
import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* NavBar */}
      <Navbar></Navbar>

      {/* Outlet */}
      <Outlet></Outlet>

      {/* Footer */}
    </div>
  );
};

export default Main;
