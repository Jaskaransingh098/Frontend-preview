import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Customize from "./Pages/Customize/Customize";
import Gallery from "./Pages/Gallery/Gallery";
import AdminLogin from "./Pages/Admin/pages/AdminLogin";
import AdminDashboard from "./Pages/Admin/pages/AdminDashboard";
import TourList from "./Pages/Admin/components/TourList";
import TrekList from "./Pages/Admin/components/TrekList";
import WhyTravelWithUs from "./Pages/WhyTravelWithUs/WhyTravelWithUs";
import Rules from "./Pages/Rules/Rules";
import Cancellation from "./Pages/Cancellation/Cancellation";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      {/* Navbar is outside of Routes, so it will show on every page */}
      <Navbar />

      {/* Routes will switch between components based on the URL path */}
      <Routes>
        {/* This route renders the Body component ONLY for the homepage ("/") */}
        <Route path="/" element={<Body />} />

        {/* This route renders the AboutUs component ONLY for the "/about" page */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/tourlist" element={<TourList />} />
        <Route path="/treklist" element={<TrekList />} />
        <Route path="/whytravel" element={<WhyTravelWithUs/>}/>
        <Route path="rules" element={<Rules/>}/>
        <Route path="cancellation" element={<Cancellation/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
