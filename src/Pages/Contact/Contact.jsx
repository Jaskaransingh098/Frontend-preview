import React, { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  const words = ["Touch", "Contact", "Communication", "Connection"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const EmailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
  const LocationIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
  const SendIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
  const QuickResponseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );

  // useEffect hook to handle the interval for changing words
  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500); // Change word every 2.5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(wordChangeInterval);
  }, []);

  return (
    <>
      <div className="contactus-hero-section">
        {/* Container for the animated background shapes */}
        <div className="contactus-shape-container">
          <div className="ourgallery-customize-bg-shape gallery-shape-1"></div>
          <div className="ourgallery-customize-bg-shape gallery-shape-2"></div>
          <div className="ourgallery-customize-bg-shape gallery-shape-3"></div>
          <div className="ourgallery-customize-bg-shape gallery-shape-4"></div>
          <div className="ourgallery-customize-bg-shape gallery-shape-5"></div>
          <div className="ourgallery-customize-bg-shape gallery-shape-6"></div>
          <div className="ourgallery-customize-bg-shape gallery-shape-7"></div>
        </div>

        {/* Main content wrapper */}
        <div className="contactus-content-wrapper">
          <h1 className="contactus-main-heading">
            Get in {/* Wrapper for the dynamic word and cursor */}
            <span className="contactus-dynamic-word-wrapper">
              <span key={currentWordIndex} className="contactus-gradient-text">
                {words[currentWordIndex]}
              </span>
              <span className="contactus-cursor"></span>
            </span>
          </h1>
          <p className="contactus-description">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
          <button className="contactus-cta-button">Get in Touch</button>
        </div>
      </div>
      <div className="contactus-form-section">
        <div className="contactus-form-header">
          <h2>Let's Start a Conversation</h2>
          <p>
            Whether you have a question, feedback, or just want to say hello,
            we're here to help.
          </p>
        </div>
        <div className="contactus-form-layout">
          {/* Left Column: Form */}
          <div className="contactus-left-column">
            <div className="contactus-form-container">
              <form className="contactus-form">
                <div className="contactus-form-row">
                  <div className="contactus-form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="contactus-form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="contactus-form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="contactus-form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button type="submit" className="contactus-send-button">
                  Send Message <SendIcon />
                </button>
              </form>
            </div>
            {/* Quick Response Card */}
            <div className="contactus-quick-response-card">
              <h4>Quick Response</h4>
              <p>We typically respond within 24 hours during business days.</p>
              <div className="contactus-quick-response-footer">
                <QuickResponseIcon />
                <span>Fast & Reliable</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="contactus-info-container">
            <h3>Contact Information</h3>
            <div className="contactus-info-card">
              <div className="contactus-info-icon">
                <EmailIcon />
              </div>
              <div className="contactus-info-text">
                <h4>Email Us</h4>
                <p>Send us an email anytime</p>
                <a href="mailto:hello@company.com">hello@company.com</a>
              </div>
            </div>
            <div className="contactus-info-card">
              <div className="contactus-info-icon">
                <PhoneIcon />
              </div>
              <div className="contactus-info-text">
                <h4>Call Us</h4>
                <p>Mon-Fri from 8am to 5pm</p>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
            </div>
            <div className="contactus-info-card">
              <div className="contactus-info-icon">
                <LocationIcon />
              </div>
              <div className="contactus-info-text">
                <h4>Visit Us</h4>
                <p>Come say hello at our office</p>
                <span>123 Business St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
