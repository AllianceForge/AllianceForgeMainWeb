import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LegalPageLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <nav className="mb-6 flex space-x-4 border-b pb-4">
        <NavLink 
          to="/legal/transparency" 
          className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-400"}
        >
          Transparency
        </NavLink>
        <NavLink 
          to="/legal/privacy" 
          className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-400"}
        >
          Privacy
        </NavLink>
        <NavLink 
          to="/legal/terms" 
          className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "text-gray-400"}
        >
          Terms of Service
        </NavLink>
      </nav>

      {/* Render nested legal pages */}
      <Outlet />
    </div>
  );
};

export default LegalPageLayout;
