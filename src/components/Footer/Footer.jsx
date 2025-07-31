import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// --- SVG Icons ---
// Using inline SVGs to avoid external dependencies.
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
  </svg>
);
const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.053 3.863-.764-.024-1.482-.232-2.11-.583v.062c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.303 3.204 4.337 3.24-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.094 7.14 2.094 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.604.91-.658 1.7-1.476 2.323-2.41z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);
const MediumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M5.429 22.714h-5.429v-1.998c2.998-1.332 4.143-3.236 4.143-5.571v-6.286c0-1.616-.952-3.236-2.857-3.236h-1.286v-1.618h5.143v16.429c0 1.07.286 1.616.857 1.616h1.429v1.998h-1.998c-.476 0-.857-.19-.857-.529v-.743zm9.714-18.714h-6v1.618h1.714c1.809 0 2.286.714 2.286 2.143v10.429c0 1.616-.286 2.429-.857 2.429h-1.143v1.998h5.143c3.429 0 4.857-1.809 4.857-5.429v-5.286c0-3.429-1.429-5.143-4-5.143zm-.286 11.286c0 1.905.714 2.857 1.857 2.857h.571v-7.714h-.571c-1.143 0-1.857.952-1.857 2.429v2.429z" />
  </svg>
);
const TiktokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.26 4.26 0 0 1-4.26-4.26v-.02c-1.43-.2-2.88.34-3.9 1.35a5.49 5.49 0 0 0-1.35 3.9v7.52a4.35 4.35 0 0 1-4.35 4.35A4.35 4.35 0 0 1 1.33 15a4.35 4.35 0 0 1 4.35-4.35v0a.34.34 0 0 0 .34-.34V1.83a.34.34 0 0 0-.34-.34H1.33a.34.34 0 0 0-.34.34v13.08a8.69 8.69 0 0 0 8.69 8.69A8.69 8.69 0 0 0 18.37 15V9.41a8.6 8.6 0 0 0 1.22-2.72h.01z" />
  </svg>
);
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// --- Footer Component ---
function Footer() {
  return (
    <footer className="footer-container">
      {/* Top CTA Section */}
      <section className="footer-cta-section">
        <video autoPlay loop muted className="footer-cta-video-bg">
          {/* Royalty-free video from Pexels */}
          <source
            src="/footer-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="footer-cta-overlay"></div>
        <div className="footer-cta-container">
          <h2>Ready for Your Next adventure?</h2>
          <p>
            Whether you're dreaming of sun-soaked beaches, charming city
            escapes, or thrilling mountain treks, we've got the perfect getaway
            for you.
          </p>
          <div className="footer-cta-buttons">
            <button className="footer-cta-button-primary">Get Started</button>
          </div>
        </div>
      </section>

      <div className="footer-main-content">
        {/* Links and Socials Section */}
        <div className="footer-links-container">
          {/* Column 1: Brand */}
          <div className="footer-column brand-column">
            <h3 className="brand-name">Raahi</h3>
            {/* <p>
              Adventure is all about having the freedom to follow your curiosity
              and discovering the unknown. No matter the Travel Style, our tours
              balance well-planned itineraries with the flexibility to do your
              own thing and explore a bit on your own.
            </p> */}
          </div>

          {/* Column 2: Company */}
          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/whytravel">Why Travel With Us?</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="/rules">Rules and Regulations</a>
              </li>
              <li>
                <a href="/cancellation">Cancellation and Payment Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund and Return Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="footer-column footer-contact">
            <h4>SUPPORT</h4>
            <ul>
              <li>
                <a href="#">
                  Flat No. 101, 1st Floor, Bauhinia, Damle Path, Law College Rd,
                  Pune, Maharashtra 411004
                </a>
              </li>
              <li>
                <a href="#">+91 9292929292</a>
              </li>
              <li>
                <a href="#">raahioutdoors@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="footer-column">
            <h4>SOCIALS</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook" className="social-icon">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <LinkedinIcon />
              </a>
              <a href="#" aria-label="Medium" className="social-icon">
                <MediumIcon />
              </a>
              <a href="#" aria-label="TikTok" className="social-icon">
                <TiktokIcon />
              </a>
              <a href="#" aria-label="Github" className="social-icon">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>Copyright @2025 - raahi outdoors</p>
          <Link to="/admin-login" className="footer-bottom-cta-button">
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
