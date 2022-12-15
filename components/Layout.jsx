import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-8 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full  mx-auto mr-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
