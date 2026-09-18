import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const serviceAreas = [
  {
    number: "01",
    title: "Interior Designing",
    description:
      "Interior planning and design solutions for residential, commercial and specialized spaces. We focus on creating environments that balance functionality, comfort and visual character.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    tag: "SPACES · DESIGN · PLANNING",
  },

  {
    number: "02",
    title: "HVAC & Air Conditioning",
    description:
      "Air-conditioning and HVAC solutions covering installation, ducted systems, repair and specialized applications. Solutions are planned around the requirements of the space and project.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=85",
    tag: "HVAC · AC · SYSTEMS",
  },

  {
    number: "03",
    title: "Turnkey Projects",
    description:
      "Integrated project solutions bringing planning, interior requirements and execution together. Our turnkey approach is structured around the specific scope and environment of each project.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
    tag: "PLANNING · EXECUTION · DELIVERY",
  },

  {
    number: "04",
    title: "Consultancy",
    description:
      "Project management and management consultancy support focused on understanding requirements, planning activities and coordinating the relevant project considerations.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85",
    tag: "PLANNING · MANAGEMENT · SUPPORT",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <main className="services-main-page">

      {/* =====================================
          HERO
      ====================================== */}

      <section className="services-main-hero">

        <div className="container">

          <motion.div
            className="services-main-hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >

            <motion.span
              className="section-eyebrow"
              variants={fadeUp}
            >
              WHAT WE DO
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Engineering,
              <br />
              <span>interiors & projects.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Mahadev Engineering brings interior designing, HVAC,
              turnkey project execution and consultancy together
              to address diverse project requirements.
            </motion.p>

          </motion.div>


          <motion.div
            className="services-main-hero-bottom"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >

            <span>
              04 SERVICE AREAS
            </span>

            <span>
              THANE · MAHARASHTRA
            </span>

          </motion.div>

        </div>

      </section>


      {/* =====================================
          INTRO
      ====================================== */}

      <section className="services-main-intro">

        <div className="container">

          <div className="services-main-intro-grid">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <span className="section-eyebrow">
                OUR CAPABILITIES
              </span>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <h2>
                Different requirements.
                <br />
                <span>One coordinated approach.</span>
              </h2>

              <p>
                From designing a space to supporting its technical
                systems, project execution and management requirements,
                our services are structured around the needs of the
                individual project.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================
          FOUR SERVICE AREAS
      ====================================== */}

      <section className="services-main-areas">

        <div className="container">

          {serviceAreas.map((service, index) => (

            <motion.article
              className={`service-main-area ${
                index % 2 !== 0
                  ? "service-main-area-reverse"
                  : ""
              }`}
              key={service.number}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >

              {/* IMAGE */}

              <motion.div
                className="service-main-area-image"
                variants={fadeUp}
              >

                <img
                  src={service.image}
                  alt={service.title}
                />

                <div className="service-main-image-overlay"></div>

                <div className="service-main-image-tag">
                  {service.tag}
                </div>

              </motion.div>


              {/* CONTENT */}

              <motion.div
                className="service-main-area-content"
                variants={fadeUp}
              >

                <div className="service-main-number">
                  {service.number}
                </div>

                <span className="section-eyebrow">
                  MAHADEV ENGINEERING
                </span>

                <h2>
                  {service.title}
                </h2>

                <p>
                  {service.description}
                </p>

                <div className="service-main-line"></div>

                <span className="service-main-note">
                  SERVICE AREA
                </span>

              </motion.div>

            </motion.article>

          ))}

        </div>

      </section>


      {/* =====================================
          BOTTOM CTA
      ====================================== */}

      <section className="services-main-cta">

        <div className="container">

          <motion.div
            className="services-main-cta-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <div>

              <span className="section-eyebrow">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's understand
                <br />
                <span>your requirement.</span>
              </h2>

            </div>

            <Link
              to="/contact"
              className="cta-button"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
}