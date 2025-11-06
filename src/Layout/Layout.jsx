import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Miscellaneous/NavBar";
import Footer from "../Components/Miscellaneous/Footer";

import Filter from "../Components/Features/Filter";

const Layout = () => {
  return (
    <div>
      <NavBar />

      <div className="flex">
        <main className="w-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
