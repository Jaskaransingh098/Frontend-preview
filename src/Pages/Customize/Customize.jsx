import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Customize.css"; // Import the CSS file

function Customize() {
  // Hooks and state from the original ContainerScroll component
  const containerRef = useRef(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // Framer Motion transform values
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="customize-hero-scroll-demo-container">
      <div className="customize-bg-shape shape-1"></div>
      <div className="customize-bg-shape shape-2"></div>
      <div className="customize-bg-shape shape-3"></div>
      <div className="customize-bg-shape shape-4"></div>
      <div className="customize-bg-shape shape-5"></div>
      <div className="customize-bg-shape shape-6"></div>
      <div className="customize-bg-shape shape-7"></div>

      <div className="customize-container-scroll-wrapper" ref={containerRef}>
        <div className="customize-container-scroll-content">
          {/* Header section */}
          <motion.div
            style={{
              translateY: translate,
            }}
            className="customize-header-content"
          >
            <h1 className="customize-hero-title">
              Need a Customized Tour Plan?
              <br />
              <span className="customize-hero-title-span">
                Share your travel plans — we'll craft the perfect trip for you!
              </span>
            </h1>
          </motion.div>

          {/* Card section */}
          <motion.div
            style={{
              rotateX: rotate,
              scale,
            }}
            className="customize-card-container"
          >
            <div className="customize-card-content">
              {/* <Image
                src={`https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=3840&q=75`}
                alt="hero"
                height={720}
                width={1400}
                className="customize-hero-image"
                draggable={false}
              /> */}
              <div className="customize-form-container">
                <form className="customize-form">
                  <div className="customize-form-row">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="customize-form-input"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="customize-form-input"
                    />
                  </div>
                  <div className="customize-form-row">
                    <input
                      type="text"
                      placeholder="Destination (e.g., Paris, Bali)"
                      className="customize-form-input"
                    />
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="customize-form-input"
                    />
                  </div>
                  <div className="customize-form-row">
                    <div className="customize-form-input-wrapper">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Start Date"
                        className="customize-form-input"
                        calendarClassName="dark-calendar"
                      />
                    </div>
                    <div className="customize-form-input-wrapper">
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="End Date"
                        className="customize-form-input"
                        calendarClassName="dark-calendar"
                      />
                    </div>
                  </div>
                  <div className="customize-form-row">
                    <input
                      type="number"
                      placeholder="Adults"
                      min="1"
                      className="customize-form-input"
                    />
                    <input
                      type="number"
                      placeholder="Children"
                      min="0"
                      className="customize-form-input"
                    />
                  </div>
                  <textarea
                    placeholder="Tell us more about your dream trip... (e.g., interests, preferred activities, budget)"
                    className="customize-form-textarea"
                    rows="3"
                  ></textarea>
                  <button type="submit" className="customize-form-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Customize;
