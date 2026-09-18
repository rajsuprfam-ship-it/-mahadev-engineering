import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Compass,
  DraftingCompass,
  Factory,
  Hospital,
  Home as HomeIcon,
  Lightbulb,
  Settings,
  Wrench,
} from "lucide-react";

import Hero from "../components/Hero";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
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
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main>
      {/* =========================
          HERO
      ========================== */}
      <Hero />

      {/* =========================
          INTRODUCTION
      ========================== */}
      <section className="home-intro">
        <div className="container">
          <motion.div
            className="home-intro-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="section-eyebrow">ABOUT MAHADEV ENGINEERING</span>

              <h2 className="home-section-title">
                One team for
                <br />
                <span>complete project solutions.</span>
              </h2>
            </motion.div>

            <motion.div className="home-intro-copy" variants={fadeUp}>
              <p>
                Mahadev Engineering is a Thane, Maharashtra-based service
                provider offering solutions across interior design, HVAC,
                turnkey projects and consultancy.
              </p>

              <p>
                Established in 2025, we bring design, technical systems and
                project execution together to address different project
                requirements through a single point of coordination.
              </p>

              <a href="/about" className="text-link">
                Discover Mahadev Engineering
                <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          STATS / FACTS
      ========================== */}
      <section className="home-facts">
        <div className="container">
          <motion.div
            className="facts-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div className="fact-item" variants={fadeUp}>
              <span>01</span>
              <strong>2025</strong>
              <p>Established</p>
            </motion.div>

            <motion.div className="fact-item" variants={fadeUp}>
              <span>02</span>
              <strong>Thane</strong>
              <p>Maharashtra</p>
            </motion.div>

            <motion.div className="fact-item" variants={fadeUp}>
              <span>03</span>
              <strong>4</strong>
              <p>Core Solution Areas</p>
            </motion.div>

            <motion.div className="fact-item" variants={fadeUp}>
              <span>04</span>
              <strong>10+</strong>
              <p>Team Capacity</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          WHAT WE DO
      ========================== */}
      <section className="home-solutions">
        <div className="container">
          <motion.div
            className="section-heading-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="section-eyebrow">OUR SOLUTIONS</span>

              <h2 className="home-section-title">
                Designed around
                <br />
                <span>your project.</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp}>
              From interiors and HVAC systems to turnkey execution and
              consultancy, our solutions are structured around the practical
              requirements of each project.
            </motion.p>
          </motion.div>

          <motion.div
            className="solution-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {/* Interior */}
            <motion.a
              href="/services/interior-design"
              className="solution-card"
              variants={fadeUp}
            >
              <div className="solution-card-top">
                <div className="solution-icon">
                  <DraftingCompass size={24} />
                </div>

                <ArrowUpRight size={21} className="solution-arrow" />
              </div>

              <span className="solution-number">01</span>

              <h3>Interior Design</h3>

              <p>
                Interior planning and design solutions for residential,
                commercial and specialized environments.
              </p>

              <div className="solution-tags">
                <span>Residential</span>
                <span>Commercial</span>
                <span>Specialized</span>
              </div>
            </motion.a>

            {/* HVAC */}
            <motion.a
              href="/services/hvac-air-conditioning"
              className="solution-card solution-card-dark"
              variants={fadeUp}
            >
              <div className="solution-card-top">
                <div className="solution-icon">
                  <Settings size={24} />
                </div>

                <ArrowUpRight size={21} className="solution-arrow" />
              </div>

              <span className="solution-number">02</span>

              <h3>HVAC & Air Conditioning</h3>

              <p>
                HVAC installation and air-conditioning solutions including
                ducted systems and specialized applications.
              </p>

              <div className="solution-tags">
                <span>Duct AC</span>
                <span>HVAC</span>
                <span>Installation</span>
              </div>
            </motion.a>

            {/* Turnkey */}
            <motion.a
              href="/services/turnkey-projects"
              className="solution-card"
              variants={fadeUp}
            >
              <div className="solution-card-top">
                <div className="solution-icon">
                  <Building2 size={24} />
                </div>

                <ArrowUpRight size={21} className="solution-arrow" />
              </div>

              <span className="solution-number">03</span>

              <h3>Turnkey Projects</h3>

              <p>
                Integrated project solutions covering interior and technical
                requirements through coordinated execution.
              </p>

              <div className="solution-tags">
                <span>Planning</span>
                <span>Execution</span>
                <span>Coordination</span>
              </div>
            </motion.a>

            {/* Consultancy */}
            <motion.a
              href="/services/consultancy"
              className="solution-card"
              variants={fadeUp}
            >
              <div className="solution-card-top">
                <div className="solution-icon">
                  <Compass size={24} />
                </div>

                <ArrowUpRight size={21} className="solution-arrow" />
              </div>

              <span className="solution-number">04</span>

              <h3>Consultancy</h3>

              <p>
                Project management and management consultancy support for
                better planning, coordination and decision-making.
              </p>

              <div className="solution-tags">
                <span>PMC</span>
                <span>Planning</span>
                <span>Consultancy</span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* =========================
          FEATURE IMAGE / APPROACH
      ========================== */}
      <section className="home-approach">
        <div className="container">
          <motion.div
            className="approach-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div className="approach-image" variants={fadeUp}>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
                alt="Modern commercial interior"
              />

              <div className="approach-image-label">
                <span>MAHADEV ENGINEERING</span>
                <strong>Design + Engineering</strong>
              </div>
            </motion.div>

            <motion.div className="approach-content" variants={fadeUp}>
              <span className="section-eyebrow">OUR APPROACH</span>

              <h2 className="home-section-title">
                From the first idea
                <br />
                <span>to project delivery.</span>
              </h2>

              <p className="approach-description">
                Projects often require multiple specialists, technical
                decisions and coordinated execution. Mahadev Engineering
                brings these requirements together under one structured
                approach.
              </p>

              <div className="approach-list">
                <div>
                  <span>01</span>
                  <div>
                    <h4>Understand</h4>
                    <p>Identify project requirements and priorities.</p>
                  </div>
                </div>

                <div>
                  <span>02</span>
                  <div>
                    <h4>Plan</h4>
                    <p>Develop the technical and project approach.</p>
                  </div>
                </div>

                <div>
                  <span>03</span>
                  <div>
                    <h4>Design</h4>
                    <p>Translate requirements into practical solutions.</p>
                  </div>
                </div>

                <div>
                  <span>04</span>
                  <div>
                    <h4>Execute</h4>
                    <p>Coordinate project requirements towards delivery.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          INDUSTRIES
      ========================== */}
      <section className="home-industries">
        <div className="container">
          <motion.div
            className="section-heading-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="section-eyebrow">APPLICATION AREAS</span>

              <h2 className="home-section-title">
                Solutions across
                <br />
                <span>different environments.</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp}>
              Our service portfolio can be applied across residential,
              commercial and specialized project environments.
            </motion.p>
          </motion.div>

          <motion.div
            className="industry-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div className="industry-card" variants={fadeUp}>
              <HomeIcon size={25} />
              <h3>Residential</h3>
              <p>Interior design and project solutions for homes.</p>
            </motion.div>

            <motion.div className="industry-card" variants={fadeUp}>
              <Building2 size={25} />
              <h3>Commercial</h3>
              <p>Workspaces, offices and commercial environments.</p>
            </motion.div>

            <motion.div className="industry-card" variants={fadeUp}>
              <Hospital size={25} />
              <h3>Healthcare</h3>
              <p>Interior and turnkey requirements for hospitals.</p>
            </motion.div>

            <motion.div className="industry-card" variants={fadeUp}>
              <Factory size={25} />
              <h3>Industrial</h3>
              <p>HVAC and turnkey solutions for industrial environments.</p>
            </motion.div>

            <motion.div className="industry-card" variants={fadeUp}>
              <Lightbulb size={25} />
              <h3>Education</h3>
              <p>Interior and project solutions for educational spaces.</p>
            </motion.div>

            <motion.div className="industry-card" variants={fadeUp}>
              <Wrench size={25} />
              <h3>Specialized Projects</h3>
              <p>
                Technical solutions tailored to specific project
                requirements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="home-cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="section-eyebrow">START A CONVERSATION</span>

              <h2>
                Have a project
                <br />
                <span>in mind?</span>
              </h2>

              <p>
                Tell us about your requirements and let's explore the right
                solution for your project.
              </p>
            </div>

            <a href="/contact" className="cta-button">
              Start a Project
              <ArrowUpRight size={19} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}