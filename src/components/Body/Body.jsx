import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { ShieldCheck, Users, Award, ArrowRight } from "lucide-react";
import {
  FaRegCalendarCheck,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaCalendarAlt,
  FaMapPin,
  FaStar,
  FaBriefcase,
  FaThumbsUp,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

// import { useInView } from "react-intersection-observer";
import CardSwap, { Card } from "../AutoCardSwap/CardSwap";
import CircularGallery from "../CircularGallery/CircularGallery";
import FloatingBackground from "../FloatingBackground/FloatingBackground";
import "./Body.css";

export default function Body() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [visibleCardCount, setVisibleCardCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const rotatingWords = ["Adventure", "Journey", "Destination", "World"];
  const treks = [
    {
      id: 1,
      image: "https://admin.raahioutdoors.com/images/uploads/visapur.jpg",
      title: "Visapur Fort Trek",
      duration: "26 July 2025",
      price: "1,350 / per person",
      description:
        "Visapur Fort is a popular trekking destination near Lonavala, known for its scenic trail through lush greenery and waterfalls, especially in monsoon.",
    },
    {
      id: 2,
      image:
        "https://admin.raahioutdoors.com/images/uploads/IMG_20211010_121408.jpg",
      title: "Devkund Waterfall Trek",
      duration: "26 July 2025",
      price: "1,380 / per person",
      description:
        "A beautiful trek leading to a pristine plunge waterfall. The trail goes through a dense forest alongside a river, offering a refreshing experience.",
    },
    {
      id: 3,
      image:
        "https://admin.raahioutdoors.com/images/uploads/image_6487327-01-01.jpeg",
      title: "Harishchandragad Trek",
      duration: "1 August 2025",
      price: "1,350 / per person",
      description:
        "A challenging trek to a historic hill fort offering stunning views of the Konkan Kada (cliff) and the surrounding mountain ranges.",
    },
    {
      id: 4,
      image:
        "https://admin.raahioutdoors.com/images/uploads/PXL_20240803_052444461MP.jpg",
      title: "Andharban Jungle Trek",
      duration: "5 August 2025",
      price: "1,450 / per person",
      description:
        'Meaning "dark forest," this trek takes you through a dense, shaded jungle, offering beautiful views of valleys and waterfalls along the way.',
    },
    {
      id: 5,
      image:
        "https://admin.raahioutdoors.com/images/uploads/Rajmachi_Trek-4.jpg",
      title: "Rajmachi Monsoon Trek",
      duration: "10 August 2025",
      price: "1,350 / per person",
      description:
        "A classic monsoon trek leading to the twin forts of Shrivardhan and Manaranjan, offering panoramic views of the Sahyadri mountains.",
    },
  ];

  const toursData = [
    {
      id: 1,
      special: "Beach Special",
      title: "Goa Beach & Adventure",
      description:
        "Combine relaxation with adventure in Goa. Enjoy pristine beaches, water sports, and vibrant nightlife in this tropical paradise.",
      duration: "6 Days",
      groupSize: "8-14 People",
      location: "Goa, India",
      rating: 4.4,
      reviews: 267,
      price: 22000,
      image:
        "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      special: "Adventure Special",
      title: "Ladakh Adventure Special",
      description:
        "Experience the breathtaking landscapes of Ladakh with our specially curated adventure package. Journey through high-altitude passes, pristine lakes, and ancient monasteries.",
      duration: "12 Days",
      groupSize: "8-12 People",
      location: "Ladakh, India",
      rating: 4.8,
      reviews: 124,
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1588924334862-3870b433da4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      special: "Biking Special",
      title: "Royal Enfield Bike Expedition",
      description:
        "Ride through the majestic Himalayas on a Royal Enfield. Perfect for motorcycle enthusiasts seeking adventure on two wheels through challenging terrains.",
      duration: "10 Days",
      groupSize: "6-10 Riders",
      location: "Manali to Leh",
      rating: 4.9,
      reviews: 89,
      price: 55000,
      image:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      special: "Spiritual Special",
      title: "Spiritual Char Dham Yatra",
      description:
        "Embark on a sacred journey to the four holy shrines of Uttarakhand. A spiritually enriching experience with comfortable accommodations and guided tours.",
      duration: "14 Days",
      groupSize: "15-20 People",
      location: "Uttarakhand, India",
      rating: 4.7,
      reviews: 156,
      price: 35000,
      image:
        "https://images.unsplash.com/photo-1597656372493-434857b24a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const factsData = [
    { icon: FaUsers, value: 10000, label: "Total Clients" },
    { icon: FaCalendarAlt, value: 1000, label: "Total Events" },
    { icon: FaMapPin, value: 100, label: "Destinations" },
    { icon: FaStar, value: 40, label: "International Tours" },
    { icon: FaBriefcase, value: 200, label: "Customised Tours" },
    { icon: FaThumbsUp, value: 4.8, label: "Ratings" },
  ];

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop",
      title: "Forest Path",
      category: "Nature",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
      title: "Mountain View",
      category: "Landscape",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop",
      title: "Adventure",
      category: "People",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop",
      title: "Cityscape",
      category: "Urban",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop",
      title: "Lakeside",
      category: "Nature",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop",
      title: "Alpine Lake",
      category: "Landscape",
    },
  ];

  const testimonials = [
    {
      id: 1,
      image: "/assets/user1.jpg",
      text: "InnoLinkk helped me turn my raw idea into a real, scalable project. Brilliant experience!",
      name: "Aarav Kapoor",
      role: "Startup Enthusiast",
    },
    {
      id: 2,
      image: "/assets/user2.jpg",
      text: "This platform gave me the courage to share my concept without fear of judgment. Love it!",
      name: "Riya Mehta",
      role: "Freelance Designer",
    },
    {
      id: 3,
      image: "/assets/user3.jpg",
      text: "As a developer, I met great collaborators here. It's a safe space for real innovation.",
      name: "Devansh S.",
      role: "Full-Stack Developer",
    },
    {
      id: 4,
      image: "/assets/user4.jpg",
      text: "Honestly, this is what the startup world needed — open sharing without bias or fear.",
      name: "Neha Rana",
      role: "Product Strategist",
    },
    {
      id: 5,
      image: "/assets/user5.jpg",
      text: "I found my co-founder here. What else can I say? It just works.",
      name: "Rohit G.",
      role: "Tech Co-Founder",
    },
  ];

  const testimonialsData = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://i.pravatar.cc/100?img=1",
      stars: 5,
      text: "An absolutely transformative experience. The attention to detail and customer care is unparalleled. I couldn't be happier with the results!",
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://i.pravatar.cc/100?img=2",
      stars: 5,
      text: "From start to finish, the process was seamless and professional. The team went above and beyond to meet our needs. Highly recommended!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      image: "https://i.pravatar.cc/100?img=3",
      stars: 5,
      text: "I was skeptical at first, but the quality of their work speaks for itself. A truly five-star service that delivers on its promises.",
    },
    {
      id: 4,
      name: "David Lee",
      image: "https://i.pravatar.cc/100?img=4",
      stars: 4,
      text: "A very solid service. There were a few minor hiccups, but they were addressed quickly and professionally. Overall, a great value.",
    },
    {
      id: 5,
      name: "Jessica Williams",
      image: "https://i.pravatar.cc/100?img=5",
      stars: 5,
      text: "The best investment we've made this year. The impact on our business was immediate and significant. Thank you for your excellent work!",
    },
    {
      id: 6,
      name: "Chris Martinez",
      image: "https://i.pravatar.cc/100?img=6",
      stars: 5,
      text: "Exceptional quality and a pleasure to work with. They are true experts in their field and I would not hesitate to work with them again.",
    },
    {
      id: 7,
      name: "Amanda White",
      image: "https://i.pravatar.cc/100?img=7",
      stars: 5,
      text: "If you are looking for a reliable and high-quality service, look no further. They exceeded all my expectations and delivered a fantastic final product.",
    },
  ];

  // HomeTestimonials Data
  const homeTestimonialsData = [
    {
      tempId: 0,
      testimonial:
        "My favorite solution in the market. We work 5x faster with COMPANY.",
      by: "Alex, CEO at TechCorp",
      imgSrc: "https://i.pravatar.cc/150?img=1",
    },
    {
      tempId: 1,
      testimonial:
        "I'm confident my data is safe with COMPANY. I can't say that about other providers.",
      by: "Dan, CTO at SecureNet",
      imgSrc: "https://i.pravatar.cc/150?img=2",
    },
    {
      tempId: 2,
      testimonial:
        "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!",
      by: "Stephanie, COO at InnovateCo",
      imgSrc: "https://i.pravatar.cc/150?img=3",
    },
    {
      tempId: 3,
      testimonial:
        "COMPANY's products make planning for the future seamless. Can't recommend them enough!",
      by: "Marie, CFO at FuturePlanning",
      imgSrc: "https://i.pravatar.cc/150?img=4",
    },
    {
      tempId: 4,
      testimonial: "If I could give 11 stars, I'd give 12.",
      by: "Andre, Head of Design at CreativeSolutions",
      imgSrc: "https://i.pravatar.cc/150?img=5",
    },
    {
      tempId: 5,
      testimonial:
        "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
      by: "Jeremy, Product Manager at TimeWise",
      imgSrc: "https://i.pravatar.cc/150?img=6",
    },
    {
      tempId: 6,
      testimonial:
        "Took some convincing, but now that we're on COMPANY, we're never going back.",
      by: "Pam, Marketing Director at BrandBuilders",
      imgSrc: "https://i.pravatar.cc/150?img=7",
    },
    {
      tempId: 7,
      testimonial:
        "I would be lost without COMPANY's in-depth analytics. The ROI is EASILY 100X for us.",
      by: "Daniel, Data Scientist at AnalyticsPro",
      imgSrc: "https://i.pravatar.cc/150?img=8",
    },
    {
      tempId: 8,
      testimonial: "It's just the best. Period.",
      by: "Fernando, UX Designer at UserFirst",
      imgSrc: "https://i.pravatar.cc/150?img=9",
    },
    {
      tempId: 9,
      testimonial: "I switched 5 years ago and never looked back.",
      by: "Andy, DevOps Engineer at CloudMasters",
      imgSrc: "https://i.pravatar.cc/150?img=10",
    },
    {
      tempId: 10,
      testimonial:
        "I've been searching for a solution like COMPANY for YEARS. So glad I finally found one!",
      by: "Pete, Sales Director at RevenueRockets",
      imgSrc: "https://i.pravatar.cc/150?img=11",
    },
    {
      tempId: 11,
      testimonial:
        "It's so simple and intuitive, we got the team up to speed in 10 minutes.",
      by: "Marina, HR Manager at TalentForge",
      imgSrc: "https://i.pravatar.cc/150?img=12",
    },
    {
      tempId: 12,
      testimonial:
        "COMPANY's customer support is unparalleled. They're always there when we need them.",
      by: "Olivia, Customer Success Manager at ClientCare",
      imgSrc: "https://i.pravatar.cc/150?img=13",
    },
    {
      tempId: 13,
      testimonial:
        "The efficiency gains we've seen since implementing COMPANY are off the charts!",
      by: "Raj, Operations Manager at StreamlineSolutions",
      imgSrc: "https://i.pravatar.cc/150?img=14",
    },
    {
      tempId: 14,
      testimonial:
        "COMPANY has revolutionized how we handle our workflow. It's a game-changer!",
      by: "Lila, Workflow Specialist at ProcessPro",
      imgSrc: "https://i.pravatar.cc/150?img=15",
    },
    {
      tempId: 15,
      testimonial:
        "The scalability of COMPANY's solution is impressive. It grows with our business seamlessly.",
      by: "Trevor, Scaling Officer at GrowthGurus",
      imgSrc: "https://i.pravatar.cc/150?img=16",
    },
    {
      tempId: 16,
      testimonial:
        "I appreciate how COMPANY continually innovates. They're always one step ahead.",
      by: "Naomi, Innovation Lead at FutureTech",
      imgSrc: "https://i.pravatar.cc/150?img=17",
    },
    {
      tempId: 17,
      testimonial:
        "The ROI we've seen with COMPANY is incredible. It's paid for itself many times over.",
      by: "Victor, Finance Analyst at ProfitPeak",
      imgSrc: "https://i.pravatar.cc/150?img=18",
    },
    {
      tempId: 18,
      testimonial:
        "COMPANY's platform is so robust, yet easy to use. It's the perfect balance.",
      by: "Yuki, Tech Lead at BalancedTech",
      imgSrc: "https://i.pravatar.cc/150?img=19",
    },
    {
      tempId: 19,
      testimonial:
        "We've tried many solutions, but COMPANY stands out in terms of reliability and performance.",
      by: "Zoe, Performance Manager at ReliableSystems",
      imgSrc: "https://i.pravatar.cc/150?img=20",
    },
  ];

  const logos = [
    {
      src: "https://placehold.co/150x50/white/black?text=TechFlow",
      alt: "TechFlow",
    },
    {
      src: "https://placehold.co/150x50/white/black?text=FinanceCore",
      alt: "FinanceCore",
    },
    {
      src: "https://placehold.co/150x50/white/black?text=MedTech",
      alt: "MedTech",
    },
    { src: "https://placehold.co/150x50/white/black?text=Nexus", alt: "Nexus" },
    {
      src: "https://placehold.co/150x50/white/black?text=PowerGrid",
      alt: "PowerGrid",
    },
    {
      src: "https://placehold.co/150x50/white/black?text=RetailMax",
      alt: "RetailMax",
    },
  ];

  const SQRT_5000 = Math.sqrt(5000);
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] =
    useState(homeTestimonialsData);

  // const handleMove = (steps) => {
  //   const newList = [...testimonialsList];
  //   if (steps > 0) {
  //     for (let i = steps; i > 0; i--) {
  //       const item = newList.shift();
  //       if (!item) return;
  //       newList.push({ ...item, tempId: Math.random() });
  //     }
  //   } else {
  //     for (let i = steps; i < 0; i++) {
  //       const item = newList.pop();
  //       if (!item) return;
  //       newList.unshift({ ...item, tempId: Math.random() });
  //     }
  //   }
  //   setTestimonialsList(newList);
  // };
  const handleMove = useCallback((steps) => {
    // Functional update to avoid depending on testimonialsList directly
    setTestimonialsList((currentList) => {
      const newList = [...currentList];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) return newList; // Return original list if empty
          newList.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (!item) return newList; // Return original list if empty
          newList.unshift({ ...item, tempId: Math.random() });
        }
      }
      return newList;
    });
  }, []); // Now the dependency array can be empty!

  // The useEffect from the previous answer now works perfectly
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleMove(1);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [handleMove]);

  useEffect(() => {
    const updateSize = () => {
      setCardSize(window.innerWidth >= 640 ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 992) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (activeSlide < treks.length - cardsToShow) {
      setActiveSlide((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide((prevIndex) => prevIndex - 1);
    }
  };

  const cardWidthPercentage = 100 / cardsToShow;

  const [tourIndex, setTourIndex] = useState(0);

  const goToNext = useCallback(() => {
    // Use the new state setter
    setTourIndex((prevIndex) => (prevIndex + 1) % toursData.length);
  }, []);

  const goToPrevious = () => {
    // Use the new state setter
    setTourIndex(
      (prevIndex) => (prevIndex - 1 + toursData.length) % toursData.length
    );
  };

  useEffect(() => {
    const sliderInterval = setInterval(goToNext, 5000);
    return () => clearInterval(sliderInterval);
  }, [goToNext]);

  // Use the new state variable
  const activeTour = toursData[tourIndex];

  const cardRefs = useRef([]);

  // This effect runs only once after the component mounts
  useEffect(() => {
    // The animation function that directly updates the h3 element's text
    const animateValue = (element, end) => {
      const duration = 2000; // 2-second animation
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentVal = end * percentage;

        // Handle both whole numbers and decimals
        if (end % 1 !== 0) {
          element.textContent = `${currentVal.toFixed(1)}+`;
        } else {
          element.textContent = `${Math.floor(currentVal).toLocaleString()}+`;
        }

        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          // Ensure it ends precisely on the final value
          element.textContent = `${end.toLocaleString()}+`;
        }
      };
      requestAnimationFrame(step);
    };

    // The observer that watches for cards entering the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardElement = entry.target;
            const h3 = cardElement.querySelector("h3");
            // We get the final value from the 'data-value' attribute on the h3
            const endValue = parseFloat(h3.dataset.value);

            animateValue(h3, endValue);

            // Stop observing the element after it has animated once
            observer.unobserve(cardElement);
          }
        });
      },
      { threshold: 0.5 } // Start animation when 50% of the card is visible
    );
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  // Add auto-advance effect for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentTestimonial((prev) => (prev + 1) % homeTestimonialsData.length);
      setTestimonialIndex((prev) => (prev + 1) % homeTestimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [homeTestimonialsData.length]);

  return (
    <div className="body">
      <section className="hero-section">
        {/* <div className="hero-floating-background">
          <FloatingBackground
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div> */}

        <div className="hero-left">
          <h1 className="hero-title">
            Find Your Next
            <div className="rotating-text-container">
              {rotatingWords.map((word, index) => (
                <span
                  key={word}
                  className={`rotating-text-word ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </h1>
          <p className="hero-subtitle">
            Let us guide you to the most beautiful places on earth. We curate
            bespoke journeys to the world's most exclusive destinations and
            hidden gems, crafting experiences that are as unique as you are.
            This is more than a vacation; it's a seamless narrative of
            discovery, designed to perfection. Your unforgettable story starts
            now.
          </p>
          <button className="hero-button">Get Started</button>
        </div>

        <div className="hero-right">
          <div style={{ height: "600px", position: "relative" }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <img
                  src="https://admin.raahioutdoors.com/images/uploads/WhatsAppImage2025-05-11at85912PM.jpeg"
                  alt="Beach Adventure"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </Card>

              <Card>
                <img
                  src="https://admin.raahioutdoors.com/images/uploads/WhatsAppImage2025-04-14at75408PM.jpeg"
                  alt="Mountain Trek"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </Card>

              <Card>
                <img
                  src="https://admin.raahioutdoors.com/images/uploads/PXL_20220817_115318198.jpg"
                  alt="Forest Trails"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>
      <section className="search-section">
        <div className="search-container">
          <div className="search-filter">
            <label htmlFor="destination">Destinations</label>
            <select id="destination" name="destination">
              <option value="">Where to next?</option>
              <option value="thailand">Thailand</option>
              <option value="italy">Italy</option>
              <option value="switzerland">Switzerland</option>
              <option value="france">France</option>
              <option value="nepal">Nepal</option>
              <option value="indonesia">Indonesia</option>
            </select>
          </div>

          <div className="search-filter">
            <label htmlFor="activity">Activity</label>
            <select id="activity" name="activity">
              <option value="">Trip Type</option>
              <option value="adventure">Adventure Tours</option>
              <option value="cultural">Cultural Tours</option>
              <option value="historical">Historical Tours</option>
            </select>
          </div>

          <div className="search-filter">
            <label htmlFor="duration">Duration</label>
            <select id="duration" name="duration">
              <option value="">Select duration</option>
              <option value="1-3">1-3 days</option>
              <option value="3-5">3-5 days</option>
              <option value="5-10">5-10 days</option>
            </select>
          </div>

          <div className="search-filter">
            <label htmlFor="guests">Guests</label>
            <select id="guests" name="guests">
              <option value="">Select guests</option>
              <option value="1-2">01-02 People</option>
              <option value="2-5">02-05 People</option>
              <option value="5-10">05-10 People</option>
            </select>
          </div>

          <div className="search-button-container">
            <button className="search-button">Search</button>
          </div>
        </div>

        <div className="popular-section-header">
          <h2 className="popular-section-title">Popular Destinations</h2>
          <p className="popular-section-subtitle">
            Discover The Amazing Tours Places Around World, Countries
          </p>
        </div>
        <div style={{ height: "600px", width: "100%", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#8d6a9fff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </section>
      <section className="homeaboutus-app-background">
        <div className="homeaboutus-section">
          <div className="homeaboutus-container">
            <div className="homeaboutus-grid">
              <div className="homeaboutus-left-column">
                <div className="homeaboutus-image-wrapper-main">
                  <img
                    src="/destinations-pics/aboutus-homepage.jpg"
                    alt="Woman swimming in a pool at a tropical resort"
                    className="homeaboutus-main-image"
                  />
                  <div className="homeaboutus-discount-badge">
                    <p className="homeaboutus-discount-percent">23%</p>
                    <p className="homeaboutus-discount-text">Discount</p>
                  </div>
                </div>
                <div className="homeaboutus-image-wrapper-secondary">
                  <img
                    src="/destinations-pics/travel-guide.jpg"
                    alt="Travel suitcase with stickers in front of a beach scene"
                    className="homeaboutus-secondary-image"
                  />
                </div>
                <div className="homeaboutus-award-box">
                  <Award size={48} className="homeaboutus-award-icon" />
                  <p>We're Award Winning Travel Agency</p>
                </div>
              </div>
              <div className="homeaboutus-right-column">
                <p className="homeaboutus-sub-heading">Know About Us</p>
                <h2 className="homeaboutus-main-heading">
                  We Believe That Travel is More than Just Visiting New Places
                </h2>
                <p className="homeaboutus-description">
                  We don't just plan trips—we craft unforgettable experiences.
                  With expertise, personalized service, and a deep passion for
                  travel, we ensure every journey is smooth, safe, and
                  inspiring, from handpicked accommodations.
                </p>

                <div className="homeaboutus-features-container">
                  <div className="homeaboutus-feature-item">
                    <div className="homeaboutus-feature-icon-wrapper">
                      <Users size={24} />
                    </div>
                    <div className="homeaboutus-feature-text">
                      <h3>Friendly Guide</h3>
                      <p>
                        At the heart of every great journey is a great best in
                        the world.
                      </p>
                    </div>
                  </div>
                  <div className="homeaboutus-feature-item">
                    <div className="homeaboutus-feature-icon-wrapper">
                      <ShieldCheck size={24} />
                    </div>
                    <div className="homeaboutus-feature-text">
                      <h3>Safety Travel</h3>
                      <p>
                        We go above and beyond to ensure that your journey is
                        not exciting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="homeaboutus-cta-container">
                  <button className="homeaboutus-learn-more-btn">
                    <span>Learn More Us</span>
                    <ArrowRight size={20} />
                  </button>
                  <div className="homeaboutus-trusted-clients">
                    <div className="homeaboutus-avatar-group">
                      <img
                        src="https://placehold.co/40x40/FFC300/000?text=A"
                        alt="Client 1"
                      />
                      <img
                        src="https://placehold.co/40x40/FF5733/000?text=B"
                        alt="Client 2"
                      />
                      <img
                        src="https://placehold.co/40x40/C70039/000?text=C"
                        alt="Client 3"
                      />
                    </div>
                    <p>10m+ Trusted Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trek-slider-container">
        <div className="slider-header">
          <h2>Upcoming Treks</h2>

          <div className="slider-nav">
            {/* Left Arrow SVG */}
            <svg
              onClick={prevSlide}
              className={`slider-arrow left ${
                activeSlide === 0 ? "disabled" : ""
              }`} // Renamed from currentIndex
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>

            {/* Right Arrow SVG */}
            <svg
              onClick={nextSlide}
              className={`slider-arrow right ${
                activeSlide >= treks.length - cardsToShow ? "disabled" : ""
              }`} // Renamed from currentIndex
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
        <h3 className="trek-subhead">Top Picks for the Ultimate Journey</h3>
        <div className="trek-slider">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(-${activeSlide * cardWidthPercentage}%)`,
            }} // Renamed from currentIndex
          >
            {/* Trek Cards JSX */}
            {treks.map((trek) => (
              <div className="trek-card" key={trek.id}>
                <img src={trek.image} alt={trek.title} className="trek-image" />
                <div className="trek-info">
                  <h3 className="trek-title">{trek.title}</h3>
                  <p className="trek-description">{trek.description}</p>
                  <div className="trek-details">
                    <span className="trek-duration">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                      {trek.duration}
                    </span>
                    <span className="trek-price">₹{trek.price}</span>
                  </div>
                  <button className="trek-button">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="tours-section">
        <h2 className="tours-text">Our Specials</h2>
        <div className="tour-card">
          {/* Use the new state variable as the key */}
          <div className="tour-info" key={tourIndex}>
            <div className="tour-special">{activeTour.special}</div>
            <h2 className="tour-title">{activeTour.title}</h2>
            <p className="tour-description">{activeTour.description}</p>
            <div className="tour-details">
              <div className="detail-item">
                <span className="detail-label">Duration</span>
                <span className="detail-value">{activeTour.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Group Size</span>
                <span className="detail-value">{activeTour.groupSize}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">{activeTour.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Rating</span>
                <span className="detail-value">
                  ⭐ {activeTour.rating} ({activeTour.reviews})
                </span>
              </div>
            </div>
            <div className="tour-booking">
              <div className="tour-price">
                Starting from <span>₹{activeTour.price.toLocaleString()}</span>{" "}
                per person
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>

          <div className="tour-image-slider">
            {toursData.map((tour, index) => (
              <img
                key={tour.id}
                src={tour.image}
                alt={tour.title}
                // Compare with the new state variable
                className={`slider-image ${
                  index === tourIndex ? "active" : ""
                }`}
              />
            ))}
            <div className="slider-controls">
              <button className="slider-arrow prev" onClick={goToPrevious}>
                &lt;
              </button>
              <button className="slider-arrow next" onClick={goToNext}>
                &gt;
              </button>
            </div>
            <div className="slider-dots">
              {toursData.map((_, index) => (
                <span
                  key={index}
                  // Compare with the new state variable
                  className={`dot ${index === tourIndex ? "active" : ""}`}
                  // Update state with the new setter
                  onClick={() => setTourIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us-section">
        <div className="choose-us-container">
          <div className="why-features-content">
            <h2 className="why-section-title">Why Choose Us</h2>
            <p className="why-section-subtitle">
              Discover what makes our travel experiences extraordinary and why
              thousands of travelers trust us with their adventures.
            </p>
            <div className="why-features-list">
              <div className="why-feature-item">
                <FaRegCalendarCheck className="why-feature-icon" />
                <div className="why-feature-text">
                  <h3>Seamless Booking Experience</h3>
                  <p>
                    Book your dream vacation with our intuitive platform.
                    Simple, fast, and secure booking process that gets you
                    traveling in minutes.
                  </p>
                </div>
              </div>
              <div className="why-feature-item">
                <FaMapMarkedAlt className="why-feature-icon" />
                <div className="why-feature-text">
                  <h3>Local Experience & Authenticity</h3>
                  <p>
                    Discover hidden gems and authentic local experiences curated
                    by our expert guides who know every corner of your
                    destination.
                  </p>
                </div>
              </div>
              <div className="why-feature-item">
                <FaShieldAlt className="why-feature-icon" />
                <div className="why-feature-text">
                  <h3>Safe & Security Travels</h3>
                  <p>
                    Travel with confidence knowing that your safety is our
                    priority. 24/7 support and comprehensive travel insurance
                    included.
                  </p>
                </div>
              </div>
            </div>
            <button className="start-adventure-btn">
              Start Your Adventure &rarr;
            </button>
          </div>
          <div className="features-visual">
            {/* Animated sparkles */}
            <img
              src="https://html.pixelfit.agency/tripex/assets/images/home-one/gallery/choose-img1.png"
              alt=""
            />
          </div>
        </div>
        <section className="home-video-section">
          <div className="home-video-container">
            <video className="home-video-player" nocontrols loop autoPlay muted>
              <source src="/home-page-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </section>

      <section className="facts-section">
        <div className="facts-container">
          <div className="facts-header">
            <h2>Interesting Facts</h2>
            <p>Experiences Away From Crowd</p>
          </div>
          <div className="facts-grid">
            {factsData.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="fact-card"
                  // This function adds the DOM element to our array of refs
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  <Icon className="fact-icon" />
                  {/* The h3 starts at 0 and we store the real value in a data attribute */}
                  <h3 data-value={fact.value}>0+</h3>
                  <p>{fact.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-container">
          {/* Text content moved to its own div for layout */}
          <div className="gallery-text-content">
            <h2 className="gallery-title">
              Browse By <span className="shining-text">Camping & Tour</span>{" "}
              Collection
            </h2>
            <p className="gallery-subtitle">
              Discover stunning photography across various categories. Hover on
              any image to explore more details.
            </p>
          </div>

          {/* Image grid is now the second item in the main container grid */}
          <div className="image-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="image-card">
                <img src={item.src} alt={item.title} className="card-image" />
                <div className="card-overlay">
                  <button className="expand-icon">
                    <FiArrowUpRight />
                  </button>
                  <div className="card-text">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-category">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HomeTestimonials Section Start */}
      <section className="hometestimonials-section-stacked">
        <h2 className="hometestimonials-title">What Our Travelers Say</h2>
        <div className="hometestimonials-stacked-carousel">
          {testimonialsList.map((testimonial, index) => {
            // Centered position logic
            const position =
              testimonialsList.length % 2
                ? index - (testimonialsList.length + 1) / 2
                : index - testimonialsList.length / 2;
            const isCenter = position === 0;
            return (
              <div
                key={testimonial.tempId}
                className={`hometestimonials-stacked-card${
                  isCenter ? " hometestimonials-stacked-center" : ""
                }`}
                style={{
                  width: cardSize,
                  height: cardSize,
                  zIndex: isCenter ? 10 : 0,
                  left: "50%",
                  top: "50%",
                  position: "absolute",
                  transform: `translate(-50%, -50%) translateX(${
                    (cardSize / 1.5) * position
                  }px) translateY(${
                    isCenter ? -65 : position % 2 ? 15 : -15
                  }px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
                }}
                onClick={() => handleMove(position)}
              >
                <span
                  className="hometestimonials-stacked-clip"
                  style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 2,
                    position: "absolute",
                    display: "block",
                    background: "#374151",
                    transform: "rotate(45deg)",
                  }}
                />
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.by.split(",")[0]}
                  className="hometestimonials-stacked-avatar"
                  style={{ boxShadow: "3px 3px 0px #181f2a" }}
                />
                <h3 className="hometestimonials-stacked-text">
                  "{testimonial.testimonial}"
                </h3>
                <p className="hometestimonials-stacked-by">
                  - {testimonial.by}
                </p>
              </div>
            );
          })}
          <div className="hometestimonials-stacked-arrows">
            <button
              className="hometestimonials-stacked-arrow"
              onClick={() => handleMove(-1)}
            >
              &lt;
            </button>
            <button
              className="hometestimonials-stacked-arrow"
              onClick={() => handleMove(1)}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
      {/* HomeTestimonials Section End */}

      <section className="corporate-gallery-section">
        <div className="corporate-gallery-container">
          {/* Logo Slider on the Left */}
          <div className="corporate-logo-slider-container">
            <div className="corporate-logo-slider-blur corporate-left-blur" />
            <div className="corporate-logo-slider-wrapper">
              <div className="corporate-logo-slider">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="corporate-logo-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
            <div className="corporate-logo-slider-blur corporate-right-blur" />
          </div>

          {/* Text on the Right */}
          <div className="corporate-gallery-text-content">
            <h2 className="corporate-gallery-title corporate-shining-text">
              Our Corporate Clients
            </h2>
            <p className="corporate-gallery-subtitle">
              Trusted by leading companies across industries.
            </p>
          </div>
        </div>
      </section>

      <section className=""></section>
    </div>
  );
}
