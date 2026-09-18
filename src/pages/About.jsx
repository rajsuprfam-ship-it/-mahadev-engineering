import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const capabilities = [
  {
    number: "01",
    title: "Interior Designing",
    text: "Interior planning and design solutions for residential and other project environments.",
  },
  {
    number: "02",
    title: "HVAC & Air Conditioning",
    text: "Air-conditioning and HVAC installation, service and project solutions.",
  },
  {
    number: "03",
    title: "Turnkey Projects",
    text: "Coordinated project solutions covering relevant planning, interior and execution requirements.",
  },
  {
    number: "04",
    title: "Consultancy",
    text: "Project management and management consultancy support based on project requirements.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by understanding the space, requirement and intended outcome.",
  },
  {
    number: "02",
    title: "Plan",
    text: "The relevant design, technical and project requirements are structured.",
  },
  {
    number: "03",
    title: "Coordinate",
    text: "Different requirements are brought together around the project scope.",
  },
  {
    number: "04",
    title: "Execute",
    text: "The planned solution moves towards practical implementation.",
  },
];

export default function About() {
  return (
    <main className="about-page">

      {/* =====================================
          HERO
      ====================================== */}

      <section className="about-hero">

        <div className="container">

          <motion.div
            className="about-hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >

            <motion.span
              className="section-eyebrow"
              variants={fadeUp}
            >
              ABOUT MAHADEV ENGINEERING
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Engineering spaces.
              <br />
              <span>Creating complete solutions.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Mahadev Engineering brings interior designing, HVAC,
              turnkey projects and consultancy together to address
              diverse project requirements.
            </motion.p>

          </motion.div>


          <motion.div
            className="about-hero-image"
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
              alt="Modern interior space"
            />

            <div className="about-image-overlay"></div>

            <div className="about-image-label">
              <span>ESTABLISHED</span>
              <strong>2025</strong>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================
          COMPANY
      ====================================== */}

      <section className="about-company">

        <div className="container">

          <motion.div
            className="about-company-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >

            <motion.div
              className="about-section-label"
              variants={fadeUp}
            >

              <span className="section-eyebrow">
                WHO WE ARE
              </span>

              <div className="about-location">
                <MapPin size={15} />
                <span>Thane, Maharashtra</span>
              </div>

            </motion.div>


            <motion.div
              className="about-company-content"
              variants={fadeUp}
            >

              <h2>
                One team.
                <br />
                <span>Multiple capabilities.</span>
              </h2>

              <p className="about-lead">
                Established as a proprietor firm in 2025,
                Mahadev Engineering is a service provider based
                in Thane, Maharashtra.
              </p>

              <p>
                Our work brings together interior designing,
                HVAC and air-conditioning solutions, turnkey
                projects and consultancy services. This allows
                project requirements to be approached from
                different perspectives while keeping the overall
                requirement in focus.
              </p>

              <p>
                From residential interiors and HVAC systems to
                specialized turnkey environments and project
                consultancy, our services are structured around
                the specific requirements of each project.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================
          CAPABILITIES
      ====================================== */}

      <section className="about-capabilities">

        <div className="container">

          <motion.div
            className="about-capabilities-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <span className="section-eyebrow">
              WHAT WE BRING TOGETHER
            </span>

            <h2>
              Four areas.
              <br />
              <span>One coordinated approach.</span>
            </h2>

          </motion.div>


          <motion.div
            className="about-capabilities-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={stagger}
          >

            {capabilities.map((item) => (

              <motion.div
                className="about-capability-card"
                key={item.number}
                variants={fadeUp}
              >

                <div className="about-capability-top">

                  <span>
                    {item.number}
                  </span>

                  <ArrowUpRight size={18} />

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================
          APPROACH
      ====================================== */}

      <section className="about-approach">

        <div className="container">

          <div className="about-approach-grid">

            <motion.div
              className="about-approach-intro"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <span className="section-eyebrow">
                OUR APPROACH
              </span>

              <h2>
                Understand.
                <br />
                Plan.
                <br />
                <span>Deliver.</span>
              </h2>

              <p>
                Every requirement is different. Our approach is
                structured to understand the project first and
                then develop the relevant path forward.
              </p>

            </motion.div>


            <motion.div
              className="about-approach-list"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={stagger}
            >

              {approach.map((item) => (

                <motion.div
                  className="about-approach-item"
                  key={item.number}
                  variants={fadeUp}
                >

                  <span className="about-approach-number">
                    {item.number}
                  </span>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                  <ArrowUpRight size={17} />

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================
          COMPANY FACTS
      ====================================== */}

      <section className="about-facts">

        <div className="container">

          <motion.div
            className="about-facts-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <div className="about-fact">
              <span>ESTABLISHED</span>
              <strong>2025</strong>
            </div>

            <div className="about-fact">
              <span>LOCATION</span>
              <strong>Thane, Maharashtra</strong>
            </div>

            <div className="about-fact">
              <span>BUSINESS TYPE</span>
              <strong>Service Provider</strong>
            </div>

            <div className="about-fact">
              <span>LEGAL STATUS</span>
              <strong>Proprietorship</strong>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================
          CTA
      ====================================== */}

      <section className="about-cta">

        <div className="container">

          <motion.div
            className="about-cta-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <div>

              <span className="section-eyebrow">
                WORK WITH US
              </span>

              <h2>
                Have a project
                <br />
                <span>in mind?</span>
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