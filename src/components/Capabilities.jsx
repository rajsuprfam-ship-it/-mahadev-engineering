import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    number: "01",
    title: "Interior Environments",
    text: "Interior solutions designed around the function, character and requirements of each space.",
  },
  {
    number: "02",
    title: "HVAC Systems",
    text: "Air-conditioning and HVAC solutions for residential, commercial, industrial and specialised environments.",
  },
  {
    number: "03",
    title: "Turnkey Execution",
    text: "Integrated execution that brings project coordination and implementation together.",
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities">

      <div className="container capabilities-container">

        {/* IMAGE */}

        <motion.div
          className="capabilities-image"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
            alt="Modern architectural interior"
          />

          <div className="capabilities-image-label">
            <span>MAHADEV ENGINEERING</span>
            <strong>Design × Engineering</strong>
          </div>
        </motion.div>


        {/* CONTENT */}

        <div className="capabilities-content">

          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span></span>
            OUR CAPABILITIES
          </motion.div>


          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Built for projects
            <br />
            that need <em>more.</em>
          </motion.h2>


          <motion.p
            className="capabilities-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Mahadev Engineering combines design, engineering and
            project execution to provide a more connected approach
            to complex requirements.
          </motion.p>


          {/* CAPABILITY LIST */}

          <div className="capability-list">

            {capabilities.map((item, index) => (
              <motion.div
                className="capability-item"
                key={item.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >

                <span className="capability-number">
                  {item.number}
                </span>

                <div className="capability-text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </motion.div>
            ))}

          </div>


          <Link
            to="/services"
            className="capabilities-link"
          >
            Explore our capabilities
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </div>

    </section>
  );
}