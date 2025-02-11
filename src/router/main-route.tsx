import BackgroundStars from "@/components/my-component/bg-grid";
import Footer from "@/components/my-component/footer";
import Navbar from "@/components/my-component/navbar";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Signup from "@/pages/sign-up";
import About from "@/pages/about-us";
import Contact from "@/pages/contact-us";
import TemplatesChoose from "@/dashboard-pages/templates-choose";
import Services from "@/pages/services";
import DashboardLayout from "@/utils/dashboard-layout";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Template1 from "@/template1/template1";
import DashboardHome from "@/dashboard-pages/dashboard-home";

export default function MainRoute(): React.ReactNode {
  const location = useLocation();
  const hideNavbar = location.pathname === "/template1";

  return (
    <div className="barlow">
      {!hideNavbar && <Navbar />}
      <BackgroundStars />
      <div className="min-h-[75vh]">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/template-choose"} element={<TemplatesChoose />} />
          <Route path={"/template1"} element={<Template1 />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path={"template-choose"} element={<TemplatesChoose />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
