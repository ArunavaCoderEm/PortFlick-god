import BackgroundStars from "@/components/my-component/bg-grid";
import Footer from "@/components/my-component/footer";
import Navbar from "@/components/my-component/navbar";
import Dashboard from "@/pages/dashboard";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Signup from "@/pages/sign-up";
import DashboardLayout from "@/utils/dashboard-layout";
import React from "react";
import { Route, Routes } from "react-router-dom";

export default function MainRoute(): React.ReactNode {
  return (
    <div className="barlow">
      <Navbar />
      <BackgroundStars />
      <div className="min-h-[75vh]">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
