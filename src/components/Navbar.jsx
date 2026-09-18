import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Phone,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

const PHONE_NUMBER = "919876543210";

const serviceCategories = [
  {
    number: "01",
    title: "Interior Designing",
    description: "Spaces planned around function, comfort and character.",
    services: [
      {
        name: "Residential Interior Designing",
        path: "/services/residential-interior-design",
      },
      {
        name: "Bedroom Interior Designing",
        path: "/services/bedroom-interior-design",
      },
      {
        name: "Banquet Interior Decoration",
        path: "/services/banquet-interior-decoration",
      },
    ],
  },
  {
    number: "02",
    title: "HVAC & Air Conditioning",
    description: "Air-conditioning and HVAC solutions for diverse applications.",
    services: [
      {
        name: "Ductable AC Installation",
        path: "/services/ductable-air-conditioner-installation",
      },
      {
        name: "22 Ton Duct AC Service",
        path: "/services/22-ton-duct-ac",
      },
      {
        name: "Daikin Ducted AC Repair",
        path: "/services/daikin-ducted-ac-repair",
      },
      {
        name: "HVAC System Installation",
        path: "/services/hvac-system-installation",
      },
      {
        name: "Pharma HVAC Installation",
        path: "/services/pharma-hvac-installation",
      },
    ],
  },
  {
    number: "03",
    title: "Turnkey Projects",
    description: "Integrated solutions from planning through execution.",
    services: [
      {
        name: "School Interior Turnkey",
        path: "/services/school-interior-turnkey",
      },
      {
        name: "Hospital Interior Turnkey",
        path: "/services/hospital-interior-turnkey",
      },
      {
        name: "Chemical Plant Interior Turnkey",
        path: "/services/chemical-plant-interior-turnkey",
      },
      {
        name: "Sales Lounge Turnkey",
        path: "/services/sales-lounge-turnkey",
      },
      {
        name: "Turnkey Projects",
        path: "/services/turnkey-projects",
      },
    ],
  },
  {
    number: "04",
    title: "Consultancy",
    description: "Project management and consultancy support.",
    services: [
      {
        name: "Project Management Consultancy",
        path: "/services/project-management-consultancy",
      },
      {
        name: "Management Consultancy",
        path: "/services/management-consultancy",
      },
    ],
  },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const phoneLink = `tel:+${PHONE_NUMBER}`;
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}`;

  return (
    <>
      <header className="navbar">

        {/* LOGO */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeAllMenus}
        >
          <div className="logo-symbol">
            <span>ME</span>
          </div>

          <div className="logo-name">
            <strong>MAHADEV</strong>
            <small>ENGINEERING</small>
          </div>
        </Link>


        {/* DESKTOP NAV */}

        <nav className="desktop-nav">

          <Link to="/" onClick={closeAllMenus}>
            Home
          </Link>

          <Link to="/about" onClick={closeAllMenus}>
            About
          </Link>

          <button
            type="button"
            className={`services-trigger ${
              servicesOpen ? "services-trigger-active" : ""
            }`}
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
          >
            <span>Services</span>

            <ChevronDown
              size={14}
              strokeWidth={1.5}
            />
          </button>

          <Link to="/projects" onClick={closeAllMenus}>
            Projects
          </Link>

          <Link to="/gallery" onClick={closeAllMenus}>
            Gallery
          </Link>

          <Link to="/contact" onClick={closeAllMenus}>
            Contact
          </Link>

        </nav>


        {/* DESKTOP ACTIONS */}

        <div className="navbar-right-actions">

          <a
            href={phoneLink}
            className="nav-pop-action nav-call"
            aria-label="Call Mahadev Engineering"
          >
            <span className="nav-pop-icon">
              <Phone size={16} strokeWidth={1.7} />
            </span>

            <span className="nav-pop-label">
              Call
            </span>
          </a>


          <a
            href={whatsappLink}
            className="nav-pop-action nav-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Mahadev Engineering"
          >
            <span className="nav-pop-icon">
              <MessageCircle size={16} strokeWidth={1.7} />
            </span>

            <span className="nav-pop-label">
              WhatsApp
            </span>
          </a>


          <Link
            to="/contact"
            className="navbar-cta"
            onClick={closeAllMenus}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={15} />
          </Link>

        </div>


        {/* MOBILE BUTTON */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </header>


      {/* =====================================================
          SERVICES MEGA MENU
      ===================================================== */}

      <AnimatePresence>
        {servicesOpen && (
          <>
            <motion.div
              className="services-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setServicesOpen(false)}
            />

            <motion.div
              className="premium-services-menu"
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.985,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.985,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="premium-services-inner">

                <div className="services-menu-intro">

                  <span className="services-menu-eyebrow">
                    MAHADEV ENGINEERING
                  </span>

                  <h2>
                    Our
                    <br />
                    <span>Services.</span>
                  </h2>

                  <p>
                    Explore our services across interiors,
                    HVAC, turnkey projects and consultancy.
                  </p>

                  <Link
                    to="/services"
                    className="services-menu-all"
                    onClick={() => setServicesOpen(false)}
                  >
                    View all services
                    <ArrowUpRight size={15} />
                  </Link>

                </div>


                <div className="services-menu-categories">

                  {serviceCategories.map((category) => (

                    <div
                      className="premium-service-category"
                      key={category.number}
                    >

                      <div className="premium-category-heading">

                        <span className="premium-category-number">
                          {category.number}
                        </span>

                        <div>
                          <h3>{category.title}</h3>

                          <p>
                            {category.description}
                          </p>
                        </div>

                      </div>


                      <div className="premium-category-links">

                        {category.services.map((service, index) => (

                          <Link
                            key={service.path}
                            to={service.path}
                            className="premium-service-link"
                            onClick={() => setServicesOpen(false)}
                          >

                            <span className="premium-service-index">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="premium-service-name">
                              {service.name}
                            </span>

                            <ArrowUpRight
                              size={14}
                              className="premium-service-arrow"
                            />

                          </Link>

                        ))}

                      </div>

                    </div>

                  ))}

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (

          <motion.div
            className="premium-mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >

            <Link to="/" onClick={closeAllMenus}>
              Home
            </Link>

            <Link to="/about" onClick={closeAllMenus}>
              About
            </Link>


            <button
              type="button"
              className="mobile-services-trigger"
              onClick={() =>
                setMobileServicesOpen(!mobileServicesOpen)
              }
            >
              <span>Services</span>

              <ChevronDown
                size={18}
                className={
                  mobileServicesOpen
                    ? "services-chevron-open"
                    : ""
                }
              />
            </button>


            <AnimatePresence>
              {mobileServicesOpen && (

                <motion.div
                  className="mobile-service-dropdown"
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                >

                  {serviceCategories.map((category) => (

                    <div
                      className="mobile-service-category"
                      key={category.number}
                    >

                      <span>
                        {category.number} · {category.title}
                      </span>

                      {category.services.map((service) => (

                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={closeAllMenus}
                        >
                          {service.name}
                          <ArrowUpRight size={13} />
                        </Link>

                      ))}

                    </div>

                  ))}

                </motion.div>

              )}
            </AnimatePresence>


            <Link to="/projects" onClick={closeAllMenus}>
              Projects
            </Link>

            <Link to="/gallery" onClick={closeAllMenus}>
              Gallery
            </Link>

            <Link to="/contact" onClick={closeAllMenus}>
              Contact
            </Link>


            {/* MOBILE CALL */}

            <a
              href={phoneLink}
              className="mobile-action"
            >
              <Phone size={17} />
              Call Us
            </a>


            {/* MOBILE WHATSAPP */}

            <a
              href={whatsappLink}
              className="mobile-action"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>


            <Link
              to="/contact"
              className="mobile-project-button"
              onClick={closeAllMenus}
            >
              Start a Project
              <ArrowUpRight size={17} />
            </Link>

          </motion.div>

        )}
      </AnimatePresence>
    </>
  );
}