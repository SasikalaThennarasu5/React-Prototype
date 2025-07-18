import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Electricals from "./pages/Electricals";
import CCTV from "./pages/CCTV";
import BMS from "./pages/BMS";
 import Projects from "./pages/Projects";
import GetAQuote from "./pages/GetAQuote";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Careers from "./pages/Careers";
function App() {
  return (
    <Router>
      <Header />

      {/* Main content routes */}
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
         <Route path="/electricals" element={<Electricals />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/bms" element={<BMS />} /> 
          <Route path="/projects" element={<Projects />} />
          <Route path="/get-a-quote" element={<GetAQuote />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
