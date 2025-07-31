import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/tourList.css";

const TourList = ({ isAdmin = false, onEdit, onDelete }) => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/tours")
      .then((res) => setTours(res.data))
      .catch((err) => console.error("Error fetching tours:", err));
  }, []);

  const handleBookNowClick = (tourId) => {
    navigate(`/book/${tourId}`);
  };

  return (
    <div className="tour-list-wrapper">
      {!isAdmin && (
        <>
          {/* Hero Section 1: Discover Amazing Tours */}
          <div className="tour-list-hero-section-discover">
            <h1 className="tour-list-hero-title">Discover Amazing Tours</h1>
            <p className="tour-list-hero-subtitle">
              Explore breathtaking destinations with our carefully curated tour
              packages designed for unforgettable experiences.
            </p>
          </div>

          {/* Hero Section 2: Video Banner */}
          <div className="tour-list-hero-section-video">
            <video
              src="/list-video.mp4"
              className="tour-list-hero-video"
              autoPlay
              loop
              muted
              poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      )}

      <div className="tour-list-search-results-section">
        {!isAdmin && <h2 className="tour-list-section-title">Our Tours</h2>}
        <div className="tour-list-container">
          {tours.map((tour) => (
            <div className="tour-list-card" key={tour._id}>
              <div className="tour-list-card-image-wrapper">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="tour-list-card-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
                  }}
                />
                <div className="tour-list-card-duration-badge">
                  {tour.duration}
                </div>
                <div className="tour-list-card-rating-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 4.517 1.48-8.279L0 9.306l8.332-1.151z" />
                  </svg>
                  {tour.rating}
                </div>
              </div>
              <div className="tour-list-details">
                <h3 className="tour-list-card-title">{tour.title}</h3>
                <p className="tour-list-card-location">
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {tour.location}
                </p>
                <p className="tour-list-card-description">{tour.description}</p>
                <div className="tour-list-card-footer">
                  <div className="tour-list-card-price-wrapper">
                    <span className="tour-list-card-price">${tour.price}</span>
                  </div>
                  {isAdmin ? (
                    <div className="tour-list-admin-buttons">
                      <button
                        className="tour-list-edit-btn"
                        onClick={() => onEdit(tour)}
                      >
                        Edit
                      </button>
                      <button
                        className="tour-list-delete-btn"
                        onClick={() => onDelete(tour._id)}
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <button
                      className="tour-list-book-btn"
                      onClick={() => handleBookNowClick(tour._id)}
                    >
                      Book Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourList;
