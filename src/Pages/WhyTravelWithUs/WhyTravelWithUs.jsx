import React, { useState, useEffect, useRef } from "react";
import "./WhyTravelWithUs.css";

function WhyTravelWithUs() {
  const AnimatedStat = ({ finalValue, suffix, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const duration = 2000; // Animation duration in milliseconds

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Start animation when the element is intersecting (visible)
          if (entry.isIntersecting) {
            let start = 0;
            const end = finalValue;
            if (start === end) return;

            let startTime = null;
            // Animation step function
            const step = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              setCount(Math.floor(progress * (end - start) + start));
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
            observer.disconnect(); // Disconnect after animating once
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
      );

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      // Cleanup function to unobserve when the component unmounts
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [finalValue]); // Rerun effect if finalValue changes

    return (
      <div className="why-travel-stat-item" ref={ref}>
        <p className="why-travel-stat-number">
          {count}
          {suffix}
        </p>
        <p className="why-travel-stat-label">{label}</p>
      </div>
    );
  };
  const StartJourneyIcon = () => (
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
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );

  const ViewGalleryIcon = () => (
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );

  const AdventureIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.2 6.8l-1.4-1.4-2.8 2.8-1.4-1.4-2.8 2.8-1.4-1.4L4.6 8.2l1.4 1.4 2.8-2.8 1.4 1.4 2.8-2.8 1.4 1.4 2.8-2.8zM2 22l2-6 6-2-2 6-6 2zM13 11l6-2 2 6-6 2-2-6z" />
    </svg>
  );

  const SafeTravelIcon = () => (
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
  const ExpertGuidesIcon = () => (
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
      <path d="m9 18 6-6-6-6"></path>
      <path d="m18 18-6-6 6-6"></path>
      <path d="M3 6l9 9 9-9"></path>
    </svg>
  );
  const PassionateTeamIcon = () => (
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
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
  const CustomizedAdventuresIcon = () => (
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
  const ExcellentServiceIcon = () => (
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
      <path d="M12 8V4H8v4H4v8h4v4h8v-4h4V8h-4z"></path>
      <path d="M12 12v4"></path>
      <path d="M12 12h4"></path>
    </svg>
  );
  const SociallyConsciousIcon = () => (
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

  return (
    <>
      <section className="why-travel-hero-section">
        <div className="why-travel-container">
          <div className="why-travel-tag">
            <AdventureIcon />
            <span>Adventure Awaits</span>
          </div>

          <h1 className="why-travel-title">
            Why Travel With <br /> RAAHI?
          </h1>

          <p className="why-travel-subtitle">
            Discover the beauty of nature with passionate travel lovers who
            believe everyone should explore the outdoors and find peace within.
          </p>

          <div className="why-travel-button-group">
            <button className="why-travel-button why-travel-button-primary">
              <StartJourneyIcon />
              <a href="/contact">Start Your Journey</a>
            </button>
            <button className="why-travel-button why-travel-button-secondary">
              <ViewGalleryIcon />
              <a href="/gallery">View Gallery</a>
            </button>
          </div>
        </div>
      </section>
      <section className="why-travel-stats-section">
        <div className="why-travel-container">
          <h2 className="why-travel-section-title">Our Journey in Numbers</h2>
          <p className="why-travel-section-subtitle">
            Years of experience creating unforgettable adventures and building
            lasting memories
          </p>
          <div className="why-travel-stats-grid">
            <AnimatedStat finalValue={6} suffix="+" label="Years Experience" />
            <AnimatedStat finalValue={500} suffix="+" label="Happy Travelers" />
            <AnimatedStat finalValue={50} suffix="+" label="Destinations" />
            <AnimatedStat finalValue={100} suffix="%" label="Safety Record" />
          </div>
        </div>
      </section>

      <section className="why-travel-features-section">
        <div className="why-travel-container">
          <h2 className="why-travel-section-title">What Makes Us Different</h2>
          <p className="why-travel-section-subtitle">
            We work on the philosophy of "Safe travel, Best travel" with a
            commitment to excellent service and memorable experiences
          </p>
          <div className="why-travel-features-grid">
            {/* Feature Card 1 */}
            <div className="why-travel-feature-card">
              <div className="why-travel-feature-icon">
                <SafeTravelIcon />
              </div>
              <h3 className="why-travel-feature-title">Safe Travel</h3>
              <p className="why-travel-feature-description">
                Our philosophy of "Safe travel, Best travel" ensures your
                security is our top priority with professional guides and safety
                protocols.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="why-travel-feature-card">
              <div className="why-travel-feature-icon">
                <ExpertGuidesIcon />
              </div>
              <h3 className="why-travel-feature-title">Expert Guides</h3>
              <p className="why-travel-feature-description">
                Well-trained and experienced outdoor experts with 6+ years of
                organizing treks and tours across India's most beautiful
                destinations.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="why-travel-feature-card">
              <div className="why-travel-feature-icon">
                <PassionateTeamIcon />
              </div>
              <h3 className="why-travel-feature-title">Passionate Team</h3>
              <p className="why-travel-feature-description">
                We are travel lovers who explore nature's beauty and share our
                passion to provide fun-filled, memorable experiences.
              </p>
            </div>
            {/* Feature Card 4 */}
            <div className="why-travel-feature-card">
              <div className="why-travel-feature-icon">
                <CustomizedAdventuresIcon />
              </div>
              <h3 className="why-travel-feature-title">
                Customized Adventures
              </h3>
              <p className="why-travel-feature-description">
                Personalized treks and tours designed for your preferences,
                ensuring every journey is unique and tailored to your needs.
              </p>
            </div>
            {/* Feature Card 5 */}
            <div className="why-travel-feature-card">
              <div className="why-travel-feature-icon">
                <ExcellentServiceIcon />
              </div>
              <h3 className="why-travel-feature-title">Excellent Service</h3>
              <p className="why-travel-feature-description">
                Committed to providing happy, comfortable, and memorable
                experiences with attention to every detail of your journey.
              </p>
            </div>
            {/* Feature Card 6 */}
            <div className="why-travel-feature-card">
              <div className="why-travel-feature-icon">
                <SociallyConsciousIcon />
              </div>
              <h3 className="why-travel-feature-title">Socially Conscious</h3>
              <p className="why-travel-feature-description">
                We organize environmentally responsible tours that respect local
                communities and preserve the natural beauty we explore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-travel-story-section">
        <div className="why-travel-container why-travel-story-grid">
          <div className="why-travel-story-text">
            <h2 className="why-travel-section-title">Our Story & Mission</h2>
            <p>
              RAAHI is a team of passionate travel lovers who love to explore
              nature and its beauty. With the aim of providing a safe, economic,
              and fun-filled travelling experience, RAAHI was formed. We
              strongly believe everyone should travel, explore the outdoors, and
              find peace within.
            </p>
            <p>
              We are a group of professional, well-trained, and experienced
              outdoor experts offering customized treks and tours for your
              leisure time. With 6+ years of experience in organizing socially
              conscious treks and tours across India, we guide safe and
              thrilling adventures based on our own experiences as hikers and
              mountain bikers.
            </p>
            <p>
              Committed to excellent service, we ensure a happy, comfortable,
              and memorable experience with us. Every journey is crafted with
              care, attention to detail, and a deep respect for the natural
              environments we explore.
            </p>
          </div>
          <div className="why-travel-story-image-box">
            <div className="why-travel-story-icon">
              <ExpertGuidesIcon />
            </div>
            <h3 className="why-travel-story-image-title">Adventure Awaits</h3>
            <p className="why-travel-story-image-subtitle">
              Explore the unexplored
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyTravelWithUs;
