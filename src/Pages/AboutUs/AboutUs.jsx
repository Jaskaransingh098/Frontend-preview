import { useState, useEffect, useRef } from "react";
import { Compass, Users, Star } from "lucide-react";
import "./AboutUs.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(ScrollTrigger);

// About-themed SVG illustration for hero
const AboutHeroVisual = () => (
  <svg
    className="about-hero-svg"
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="160" cy="220" rx="120" ry="80" fill="#b8f2e6" opacity="0.35" />
    <ellipse
      cx="320"
      cy="180"
      rx="140"
      ry="100"
      fill="#ffd166"
      opacity="0.28"
    />
    <ellipse cx="440" cy="250" rx="100" ry="60" fill="#38bdf8" opacity="0.22" />
    <ellipse cx="320" cy="120" rx="60" ry="40" fill="#ffb3c6" opacity="0.18" />
    <ellipse cx="500" cy="100" rx="40" ry="30" fill="#a3cef1" opacity="0.18" />
  </svg>
);

const carouselImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
];

const stats = [
  {
    label: "Countries",
    value: "64+",
    icon: <Compass className="about-hero-stat-icon" />,
  },
  {
    label: "Per Year User",
    value: "24M+",
    icon: <Users className="about-hero-stat-icon" />,
  },
  {
    label: "Experiences",
    value: "03k+",
    icon: <Star className="about-hero-stat-icon" />,
  },
];

const sparkles = [
  { style: { top: "10%", left: "70%" } },
  { style: { top: "20%", left: "90%" } },
  { style: { top: "60%", left: "80%" } },
  { style: { top: "80%", left: "95%" } },
];

const AboutUs = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});
  const heroRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Guide",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "With over 15 years of mountaineering experience, Sarah leads our most challenging expeditions and has summited peaks across 6 continents.",
      specialties: [
        "Mountain Climbing",
        "Wilderness Survival",
        "Team Leadership",
      ],
      experience: "15+ Years",
    },
    {
      name: "Mike Chen",
      role: "Adventure Coordinator",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Mike ensures every adventure is perfectly planned and executed with attention to detail. His logistics expertise makes impossible journeys possible.",
      specialties: [
        "Route Planning",
        "Safety Protocols",
        "Equipment Management",
      ],
      experience: "12+ Years",
    },
    {
      name: "Emma Rodriguez",
      role: "Safety Specialist",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Emma brings wilderness first aid expertise and ensures all safety protocols are followed. Her quick thinking has saved countless adventures.",
      specialties: ["First Aid", "Risk Assessment", "Emergency Response"],
      experience: "10+ Years",
    },
  ];

  const values = [
    {
      icon: "🏔️",
      title: "Adventure First",
      description:
        "We believe every journey should be an unforgettable adventure that pushes boundaries and creates lasting memories.",
      details:
        "From sunrise treks to midnight camping under stars, we craft experiences that challenge and inspire.",
    },
    {
      icon: "🌱",
      title: "Sustainable Tourism",
      description:
        "Committed to preserving the natural beauty we explore through responsible and eco-friendly practices.",
      details:
        "Leave no trace principles guide every expedition, ensuring future generations can enjoy pristine wilderness.",
    },
    {
      icon: "🤝",
      title: "Community Focus",
      description:
        "Building connections between travelers and local communities to create meaningful cultural exchanges.",
      details:
        "Supporting local guides, artisans, and conservation efforts in every destination we visit.",
    },
    {
      icon: "⭐",
      title: "Excellence",
      description:
        "Delivering exceptional experiences through meticulous planning, expert guides, and attention to detail.",
      details:
        "Every detail matters, from premium equipment to gourmet trail meals and comfortable accommodations.",
    },
    {
      icon: "🛡️",
      title: "Safety Priority",
      description:
        "Your safety is our top priority with certified guides, quality equipment, and comprehensive safety protocols.",
      details:
        "Rigorous safety training, emergency preparedness, and risk management ensure worry-free adventures.",
    },
    {
      icon: "🎓",
      title: "Learning Experience",
      description:
        "Every adventure is an opportunity to learn about nature, culture, and yourself.",
      details:
        "Expert naturalists share knowledge about local ecosystems, wildlife, and conservation efforts.",
    },
  ];

  const services = [
    {
      title: "Mountain Expeditions",
      description:
        "Conquer peaks and summits with our expert mountaineering guides",
      image:
        "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Technical Climbing",
        "High Altitude Training",
        "Summit Attempts",
      ],
    },
    {
      title: "Wilderness Trekking",
      description: "Multi-day treks through pristine wilderness areas",
      image:
        "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Backcountry Camping",
        "Wildlife Viewing",
        "Photography Tours",
      ],
    },
    {
      title: "Adventure Photography",
      description:
        "Capture stunning landscapes with professional photography guidance",
      image:
        "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Golden Hour Shoots", "Drone Photography", "Post-Processing"],
    },
  ];

  const timelineData = [
    {
      year: "2020",
      title: "Foundation",
      description: "Our journey started with a vision to inspire adventure.",
    },
    {
      year: "2021",
      title: "First 1000 Travelers",
      description:
        "We hit our first milestone and built trust among explorers.",
    },
    {
      year: "2022",
      title: "Global Reach",
      description: "Our tours expanded to 10+ international destinations.",
    },
    {
      year: "2023",
      title: "Sustainability",
      description: "We committed to eco-friendly travel experiences.",
    },
    {
      year: "2024",
      title: "Community First",
      description: "Empowering local guides and adventurers globally.",
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Adventure Enthusiast",
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote:
        "Raahi Outdoors transformed my perspective on adventure travel. The attention to safety and sustainability is unmatched.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Photography Lover",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote:
        "The photography tours are incredible! I captured shots I never thought possible with their expert guidance.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Corporate Executive",
      image:
        "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote:
        "Perfect blend of adventure and comfort. The team made our corporate retreat an unforgettable experience.",
      rating: 5,
    },
  ];

  const sectionRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom+=300% top",
        pin: true,
        scrub: true,
      });

      gsap.utils.toArray(".timeline-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: "top center+=100",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      });

      gsap.to(progressRef.current, {
        height: "100%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom+=300% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-us">
      <section className="about-hero">
        {/* Decorative Sparkles */}
        {sparkles.map((s, i) => (
          <span key={i} className="about-hero-sparkle" style={{ ...s.style }}>
            *
          </span>
        ))}
        {/* Left Side */}
        <div className="about-hero-left">
          <h1 className="about-hero-title">
            Discover{" "}
            <span className="about-hero-title-highlight">
              <span className="about-hero-title-highlight-text">
                Destinations
              </span>
              <span className="about-hero-title-highlight-bg"></span>
            </span>
            <br />
            Tailored to Your Perfect Journey.
          </h1>
          <p className="about-hero-desc">
            Let's embark on a global journey, immersing ourselves in diverse
            cultures and creating unforgettable memories as we travel the world!
            Let's chase horizons, challenge our perspectives, and come home with
            stories that will last a lifetime.
          </p>
          <div className="about-hero-buttons">
            <button className="about-hero-btn about-hero-btn-primary">
              Explore More
            </button>
            <button className="about-hero-btn about-hero-btn-secondary">
              {/* <span className="about-hero-btn-dot"></span> */}
              Join Our Journey
            </button>
          </div>
          <div className="about-hero-stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="about-hero-stat">
                <div>{stat.icon}</div>
                <div className="about-hero-stat-value">{stat.value}</div>
                <div className="about-hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side - Overlapping Carousel */}
        <div className="about-hero-right">
          <div className="about-hero-carousel">
            {carouselImages.map((img, idx) => {
              let base = "about-hero-carousel-img";
              let size = "about-hero-carousel-img-side";
              let offset = "";
              if (idx === current) {
                size = "about-hero-carousel-img-center";
                offset = "";
              } else if ((idx + 1) % 3 === current) {
                offset = "about-hero-carousel-img-left";
                size = "about-hero-carousel-img-side";
              } else if ((idx + 2) % 3 === current) {
                offset = "about-hero-carousel-img-right";
                size = "about-hero-carousel-img-side";
              }
              return (
                <img
                  key={img}
                  src={img}
                  alt="carousel"
                  className={`${base} ${size} ${offset}`}
                />
              );
            })}
            {/* Dots */}
            <div className="about-hero-carousel-dots">
              {carouselImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`about-hero-carousel-dot${
                    current === idx ? " active" : ""
                  }`}
                  onClick={() => setCurrent(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section
        className="about-content-section"
        id="about-content"
        ref={(el) => (sectionRefs.current["about-content"] = el)}
      >
        <div className="container">
          <div
            className={`about-grid ${
              visibleSections.has("about-content") ? "animate-in" : ""
            }`}
          >
            <div className="about-text">
              <div className="section-header">
                <span className="section-tag">Our Story</span>
                <h2 className="section-title">
                  Passionate About <span className="highlight">Adventure</span>
                </h2>
              </div>
              <p className="about-paragraph">
                Born from a deep love for the great outdoors, Raahi Outdoors
                began as a dream to share the transformative power of nature
                with fellow adventurers. What started as weekend hiking trips
                among friends has evolved into a passionate mission to create
                extraordinary outdoor experiences that challenge, inspire, and
                connect people with the natural world.
              </p>
              <p className="about-paragraph">
                We believe that the mountains, forests, and wilderness hold the
                key to discovering not just breathtaking landscapes, but also
                our true selves. Every trail we explore, every summit we
                conquer, and every campfire story we share adds to our
                collective journey of growth, discovery, and environmental
                stewardship.
              </p>
              {/* <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <span className="feature-title">Expert Local Guides</span>
                    <span className="feature-desc">
                      Certified professionals with deep local knowledge
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <span className="feature-title">Safety First Approach</span>
                    <span className="feature-desc">
                      Comprehensive safety protocols and emergency preparedness
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <span className="feature-title">Sustainable Tourism</span>
                    <span className="feature-desc">
                      Eco-friendly practices supporting local communities
                    </span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <span className="feature-title">Premium Equipment</span>
                    <span className="feature-desc">
                      Top-quality gear and equipment for all adventures
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="about-visual">
              <div className="about-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Adventure team"
                  className="about-main-image"
                />
                <div className="experience-badge">
                  <div className="badge-number">15+</div>
                  <div className="badge-text">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
              <div className="about-secondary-image">
                <img
                  src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Mountain climbing"
                  className="secondary-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="services-section"
        id="services"
        ref={(el) => (sectionRefs.current.services = el)}
      >
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">
              Adventure <span className="highlight">Experiences</span>
            </h2>
            <p className="section-description">
              From challenging mountain expeditions to peaceful wilderness
              treks, we offer diverse adventures tailored to every skill level
              and interest.
            </p>
          </div>
          <div
            className={`services-grid ${
              visibleSections.has("services") ? "animate-in" : ""
            }`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-overlay">
                    <div className="service-features">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="service-feature">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="about-service-title">{service.title}</h3>
                  <p className="about-service-description">
                    {service.description}
                  </p>
                  <button className="service-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}

      <h2 className="timeline-headline">Our Timeline</h2>
      <section className="timeline-section" ref={sectionRef}>
        <div className="timeline-progress-wrapper">
          <div className="timeline-progress-bar" ref={progressRef}></div>
        </div>
        <div className="timeline-content">
          {timelineData.map((item, index) => (
            <div className="timeline-card" key={index}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        className="team-section"
        id="team"
        ref={(el) => (sectionRefs.current.team = el)}
      >
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">
              Meet Our <span className="highlight">Expert Guides</span>
            </h2>
            <p className="section-description">
              Our passionate team of adventure specialists brings years of
              experience and local knowledge to every expedition, ensuring safe
              and memorable adventures.
            </p>
          </div>
          <div
            className={`team-grid ${
              visibleSections.has("team") ? "animate-in" : ""
            }`}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="team-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  {/* <div className="team-overlay">
                    <div className="social-links">
                      <a href="#" className="social-link">
                        📧
                      </a>
                      <a href="#" className="social-link">
                        📱
                      </a>
                      <a href="#" className="social-link">
                        🌐
                      </a>
                    </div>
                  </div> */}
                </div>
                <div className="team-info">
                  <div className="team-header">
                    <h3 className="team-name">{member.name}</h3>
                    <span className="team-experience">{member.experience}</span>
                  </div>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="values-section"
        id="values"
        ref={(el) => (sectionRefs.current.values = el)}
      >
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">
              What Drives <span className="highlight">Our Mission</span>
            </h2>
            <p className="section-description">
              Our core values guide every adventure we create and every
              relationship we build with our adventurers and local communities.
            </p>
          </div>
          <div
            className={`values-grid ${
              visibleSections.has("values") ? "animate-in" : ""
            }`}
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
                <p className="value-details">{value.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="testimonials-section"
        id="testimonials"
        ref={(el) => (sectionRefs.current.testimonials = el)}
      >
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">
              What Our <span className="highlight">Adventurers Say</span>
            </h2>
          </div>
          <div
            className={`testimonials-grid ${
              visibleSections.has("testimonials") ? "animate-in" : ""
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-quote-icon">"</div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="mission-section"
        id="mission"
        ref={(el) => (sectionRefs.current.mission = el)}
      >
        <div className="container">
          <div
            className={`mission-content ${
              visibleSections.has("mission") ? "animate-in" : ""
            }`}
          >
            <div className="mission-text">
              <div className="section-header">
                <span className="section-tag">Our Mission</span>
                <h2 className="section-title">
                  Connecting People with{" "}
                  <span className="highlight">Nature's Wonder</span>
                </h2>
              </div>
              <blockquote className="mission-quote">
                "We believe that every person deserves to experience the
                transformative power of nature. Our mission is to create safe,
                sustainable, and unforgettable adventures that not only
                challenge and inspire our guests but also contribute to the
                preservation of the natural world we all cherish."
              </blockquote>
              <div className="mission-author">
                <div className="author-details">
                  <span className="author-name">Sarah Johnson</span>
                  <span className="author-title">Founder & CEO</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="mission-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mission"
                  className="mission-image"
                />
                <div className="mission-overlay">
                  <div className="mission-stats">
                    <div className="mission-stat">
                      <span className="stat-number">100%</span>
                      <span className="stat-label">Satisfaction</span>
                    </div>
                    <div className="mission-stat">
                      <span className="stat-number">Zero</span>
                      <span className="stat-label">Accidents</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
