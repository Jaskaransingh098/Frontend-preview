import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Navbar.css";

// --- SVG Icons for Mobile Menu ---
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// --- Dropdown Menu Component ---
const Dropdown = ({ children }) => {
  return <div className="dropdown-menu">{children}</div>;
};

// --- Logo Component ---
const Logo = () => (
  <div className="logo-wrapper">
    <DotLottieReact
      src="https://lottie.host/8a36aac5-1bfb-46df-ab10-15c5f892a422/0mZNgATRsj.lottie"
      loop
      autoplay
      className="animated-logo"
    />
    <div className="logo-name">
      <h2 className="raahi">Raahi</h2>
      <h3 className="raahi-sub">Outdoors</h3>
    </div>
  </div>
);

// --- Main Navbar Component ---
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state if user scrolls more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header-container ${isScrolled ? "scrolled" : ""}`}>
      {/* --- Left Side: Logo Container --- */}
      <div className="logo-container">
        <Logo />
      </div>

      {/* --- Right Side: Navbar Pill --- */}
      <div className="navbar-wrapper">
        <nav className="navbar-container">
          <div className="nav-links-desktop">
            <div className="nav-item">
              <a href="/">Home</a>
            </div>
            <div className="nav-item">
              <a href="/treklist">Treks</a>
              <Dropdown>
                <a href="#">Sahyadri Treks</a>
                <a href="#">Himalayan Treks</a>
                {/* <a href="#">Feature Three</a> */}
              </Dropdown>
            </div>
            <div className="nav-item">
              <a href="/tourlist">Tours</a>
              {/* <Dropdown>
                <a href="#">Domestics</a>
                <a href="#">Internationals</a>
                
              </Dropdown> */}
            </div>
            <div className="nav-item">
              <a href="#">Pages</a>
              <Dropdown>
                <a href="/about">About Us</a>
                <a href="/gallery">Our Gallery</a>
                <a href="/whytravel">Why Travel with us?</a>
                <a href="/rules">Rules and Regulations</a>
                <a href="/cancellation">Cancellation and Payment Policy</a>
              </Dropdown>
            </div>
            <div className="nav-item">
              <a href="/contact">Contact Us</a>
            </div>
          </div>
          <Link to="/customize" className="nav-cta-button">Customize Tour</Link>
        </nav>
      </div>

      {/* --- Mobile Menu Button (Only appears on mobile) --- */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <HamburgerIcon />
      </button>

      {/* --- Mobile Navigation Menu --- */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-menu">
          <button
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
          >
            <CloseIcon />
          </button>
          <a href="#">Features</a>
          <a href="#">Prices</a>
          <a href="#">Testimonials</a>
          <button className="nav-cta-button mobile-cta">Get Started</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
