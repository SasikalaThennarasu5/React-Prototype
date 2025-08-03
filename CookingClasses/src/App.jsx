import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoginNavbar from "./components/LoginNavbar";
import BakeryBusiness from "./pages/BakeryBusiness";
import CourseDescription from "./pages/CourseDescription";
import Enroll from "./components/Enroll";
import EnrollNavbar from "./components/EnrollNavbar";
import CloudKitchen from "./pages/CloudKitchen";
import ForgotPassword from "./components/ForgotPassword";
import EnrollCompleted from "./components/EnrollCompleted";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';

import { DropdownProvider } from "./components/DropdownContext";


function LayoutRoutes() {
  const location = useLocation();
  const isAuthPage = ["/login", "/signup","/forgot-pass"].includes(location.pathname);
   const isEnrollPage = ["/enroll", "/enrollsuccess"].includes(location.pathname);

  return (
    <>
       {isAuthPage ? (
        <LoginNavbar />
      ) : isEnrollPage ? (
        <EnrollNavbar />
      ) : (
        <Header />
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/bakery-business" element={<BakeryBusiness />} />
        <Route path="/cloud-kitchen" element={<CloudKitchen />} />
        <Route path="/course-des" element={<CourseDescription />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/enrollCompleted" element={<EnrollCompleted />} />
       
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <DropdownProvider>
      <ScrollToTop />
      <LayoutRoutes />
      </DropdownProvider>
    </Router>
  );
}

export default App;