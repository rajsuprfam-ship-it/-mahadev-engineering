import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { images } from "../data/imageLibrary";

const projects = [
  {
    number: "01",
    title: "Residential Interiors",
    category: "INTERIOR DESIGNING",
    description:
      "Thoughtful interior environments shaped around functionality, comfort and the character of the space.",
    image: images.residential[0],
    size: "large",
  },

  {
    number: "02",
    title: "Office & Commercial Spaces",
    category: "INTERIORS · TURNKEY",
    description:
      "Spaces planned with attention to usability, coordination and the requirements of the working environment.",
    image: images.officeTurnkey[0],
    size: "small",
  },

  {
    number: "03",
    title: "HVAC Systems",
    category: "HVAC · AIR CONDITIONING",
    description:
      "Technical air-conditioning solutions planned around the requirements of the environment and project.",
    image: images.ductableAC[0],
    size: "small",
  },

  {
    number: "04",
    title: "Turnkey Environments",
    category: "TURNKEY PROJECTS",
    description:
      "Integrated project requirements brought together from planning through interior execution.",
    image: images.cinema[0],
    size: "large",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  return (
    <main className="projects-page">

      {/* =====================================
          HERO
      ====================================== */}

      <section className="projects-hero">
        <div className="container">

          <motion.div
            className="projects-hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.13,
                },
              },
            }}
          >

            <motion.span
              className="section-eyebrow"
              variants={fadeUp}
            >
              PROJECTS / 01
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Spaces, systems,
              <br />
              <span>built around purpose.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              A look at the environments and technical requirements
              across which Mahadev Engineering brings together
              design, HVAC, turnkey execution and consultancy.
            </motion.p>

          </motion.div>


          <motion.div
            className="projects-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span>SCROLL TO EXPLORE</span>

            <div className="projects-scroll-line">
              <span></span>
            </div>
          </motion.div>

        </div>
      </section>


      {/* =====================================
          FEATURED PROJECT AREA
      ====================================== */}

      <section className="projects-editorial">

        <div className="container">

          {projects.map((project, index) => (

            <motion.article
              className={`
                project-editorial-item
                ${
                  project.size === "large"
                    ? "project-editorial-large"
                    : "project-editorial-small"
                }
                ${
                  index % 2 !== 0
                    ? "project-editorial-reverse"
                    : ""
                }
              `}
              key={project.number}
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
                className="project-editorial-image"
                variants={fadeUp}
              >

                <img
                  src={project.image}
                  alt={project.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />

                <div className="project-editorial-overlay"></div>

                <span className="project-editorial-number">
                  {project.number}
                </span>

                <span className="project-editorial-category">
                  {project.category}
                </span>

              </motion.div>


              {/* CONTENT */}

              <motion.div
                className="project-editorial-content"
                variants={fadeUp}
              >

                <span className="project-editorial-count">
                  {project.number} / 04
                </span>

                <h2>
                  {project.title}
                </h2>

                <p>
                  {project.description}
                </p>

                <div className="project-editorial-bottom">

                  <span>
                    PROJECT AREA
                  </span>

                  <ArrowUpRight size={17} />

                </div>

              </motion.div>

            </motion.article>

          ))}

        </div>

      </section>


      {/* =====================================
          PROJECT VISUAL STRIP
      ====================================== */}

      <section className="projects-visual-strip">

        <div className="container">

          <div className="projects-visual-heading">

            <span className="section-eyebrow">
              SELECTED VISUALS
            </span>

            <h2>
              A closer look at
              <span> our work.</span>
            </h2>

          </div>


          <div className="projects-visual-grid">

            {[
              images.residential[1],
              images.officeTurnkey[1],
              images.cinema[1],
              images.hospital[0],
              images.school[0],
            ].map((image, index) => (

              <motion.div
                className={`projects-visual-card projects-visual-card-${index + 1}`}
                key={image}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
              >

                <img
                  src={image}
                  alt={`Mahadev Engineering project visual ${index + 1}`}
                  loading="lazy"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          STATEMENT
      ====================================== */}

      <section className="projects-statement">

        <div className="container">

          <motion.div
            className="projects-statement-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <span className="section-eyebrow">
              THE WAY WE WORK
            </span>

            <h2>
              Every project
              <br />
              starts with
              <br />
              <span>understanding.</span>
            </h2>

            <p>
              We look at the requirement, the environment and
              the intended outcome before determining the right
              combination of design, technical and project
              capabilities.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================
          CTA
      ====================================== */}

      <section className="projects-cta">

        <div className="container">

          <motion.div
            className="projects-cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <div>

              <span className="section-eyebrow">
                HAVE A REQUIREMENT?
              </span>

              <h2>
                Let's build
                <br />
                <span>something purposeful.</span>
              </h2>

            </div>

            <Link
              to="/contact"
              className="projects-cta-button"
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