import React, { useState, useEffect } from "react";
import "./Gallery.css";

function Gallery() {
  const allImages = [
    {
      id: 1,
      src: "https://placehold.co/600x400/1e293b/ffffff?text=Sahyadri+1",
      tags: ["Sahyadri Treks"],
      size: "medium",
    },
    {
      id: 2,
      src: "https://placehold.co/400x600/3b82f6/ffffff?text=Domestic+1",
      tags: ["Domestic Tours"],
      size: "small",
    },
    {
      id: 3,
      src: "https://placehold.co/600x600/ec4899/ffffff?text=Family+1",
      tags: ["Family And Kids Special"],
      size: "large",
    },
    {
      id: 4,
      src: "https://placehold.co/400x400/f59e0b/ffffff?text=Biker+1",
      tags: ["Biker Special"],
      size: "small",
    },
    {
      id: 5,
      src: "https://placehold.co/600x400/8b5cf6/ffffff?text=Himalaya+1",
      tags: ["Himalaya Calling"],
      size: "medium",
    },
    {
      id: 6,
      src: "https://placehold.co/400x400/10b981/ffffff?text=Devotional+1",
      tags: ["Devotional Tours"],
      size: "small",
    },
    {
      id: 7,
      src: "https://placehold.co/400x600/ef4444/ffffff?text=Sahyadri+2",
      tags: ["Sahyadri Treks"],
      size: "small",
    },
    {
      id: 8,
      src: "https://placehold.co/600x400/6366f1/ffffff?text=Domestic+2",
      tags: ["Domestic Tours"],
      size: "medium",
    },
    {
      id: 9,
      src: "https://placehold.co/400x400/d946ef/ffffff?text=Family+2",
      tags: ["Family And Kids Special"],
      size: "small",
    },
    {
      id: 10,
      src: "https://placehold.co/600x600/22c55e/ffffff?text=Biker+2",
      tags: ["Biker Special"],
      size: "large",
    },
    {
      id: 11,
      src: "https://placehold.co/400x600/f97316/ffffff?text=Himalaya+2",
      tags: ["Himalaya Calling"],
      size: "small",
    },
    {
      id: 12,
      src: "https://placehold.co/600x400/0ea5e9/ffffff?text=Devotional+2",
      tags: ["Devotional Tours"],
      size: "medium",
    },
    {
      id: 13,
      src: "https://placehold.co/400x400/64748b/ffffff?text=Sahyadri+3",
      tags: ["Sahyadri Treks"],
      size: "small",
    },
    {
      id: 14,
      src: "https://placehold.co/600x600/7c3aed/ffffff?text=Domestic+3",
      tags: ["Domestic Tours"],
      size: "large",
    },
    {
      id: 15,
      src: "https://placehold.co/400x600/e11d48/ffffff?text=Family+3",
      tags: ["Family And Kids Special"],
      size: "small",
    },
    {
      id: 16,
      src: "https://placehold.co/600x400/ca8a04/ffffff?text=Biker+3",
      tags: ["Biker Special"],
      size: "medium",
    },
    {
      id: 17,
      src: "https://placehold.co/400x400/059669/ffffff?text=Himalaya+3",
      tags: ["Himalaya Calling"],
      size: "small",
    },
    {
      id: 18,
      src: "https://placehold.co/600x400/be123c/ffffff?text=Devotional+3",
      tags: ["Devotional Tours"],
      size: "medium",
    },
    {
      id: 19,
      src: "https://placehold.co/400x600/0891b2/ffffff?text=Sahyadri+4",
      tags: ["Sahyadri Treks"],
      size: "small",
    },
    {
      id: 20,
      src: "https://placehold.co/600x600/9333ea/ffffff?text=Domestic+4",
      tags: ["Domestic Tours"],
      size: "large",
    },
  ];
  const ChevronDownIcon = () => (
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
      className="ourgallery-featured-arrow"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  const [activeTag, setActiveTag] = useState("Show All");
  const [filteredImages, setFilteredImages] = useState(allImages);

  const tags = [
    "Show All",
    "Sahyadri Treks",
    "Domestic Tours",
    "Biker Special",
    "Devotional Tours",
    "Family And Kids Special",
    "Himalaya Calling",
  ];

  useEffect(() => {
    if (activeTag === "Show All") {
      setFilteredImages(allImages);
    } else {
      const newFilteredImages = allImages.filter((image) =>
        image.tags.includes(activeTag)
      );
      setFilteredImages(newFilteredImages);
    }
  }, [activeTag]);

  return (
    <div className="ourgallery-hero-section">
      <div className="ourgallery-customize-bg-shape gallery-shape-1"></div>
      <div className="ourgallery-customize-bg-shape gallery-shape-2"></div>
      <div className="ourgallery-customize-bg-shape gallery-shape-3"></div>
      <div className="ourgallery-customize-bg-shape gallery-shape-4"></div>
      <div className="ourgallery-customize-bg-shape gallery-shape-5"></div>
      <div className="ourgallery-customize-bg-shape gallery-shape-6"></div>
      <div className="ourgallery-customize-bg-shape gallery-shape-7"></div>
      <div className="ourgallery-content-wrapper">
        {/* Main Heading */}
        <h1 className="ourgallery-main-heading">
          Visual
          <br />
          <span className="ourgallery-gradient-text">Stories</span>
        </h1>

        {/* Description Text */}
        <p className="ourgallery-description">
          Our World, Your Next Destination Journey Highlights
        </p>

        {/* Action Buttons */}
        <div className="ourgallery-button-group">
          <button className="ourgallery-button ourgallery-button-primary">
            {/* <GalleryIcon /> */}
            Explore Gallery
          </button>
          <button className="ourgallery-button ourgallery-button-secondary">
            Learn More
          </button>
        </div>
      </div>

      {/* Featured Works Link */}
      {/* <div className="ourgallery-featured-works">
        <ChevronDownIcon />
        <span>Featured Works</span>
      </div> */}
      <div className="ourgallery-gallery-intro">
        <div className="ourgallery-featured-works">
          <ChevronDownIcon />
          <span>Featured Works</span>
        </div>

        {/* Tags container */}
        <div className="ourgallery-tags-container">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`ourgallery-tag ${
                activeTag === tag ? "ourgallery-tag-active" : ""
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="ourgallery-image-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`ourgallery-grid-item ourgallery-grid-item-${image.size}`}
            >
              <img src={image.src} alt={`Gallery image ${image.id}`} />
              <div className="ourgallery-grid-item-overlay">
                <p>{image.tags.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
