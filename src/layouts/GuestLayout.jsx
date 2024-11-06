import React from "react";
import { Outlet } from "react-router-dom";
import GuestHeader from "../components/guest/GuestHeader";
import GuestFooter from "../components/guest/GuestFooter";

const GuestLayout = () => {
  return (
    <div className="min-h-screen">
      <GuestHeader />
      <Outlet />
      <GuestFooter />
    </div>
  );
};

export default GuestLayout;
