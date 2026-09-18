import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Residential Interiors",
    category: "INTERIOR DESIGN",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Commercial Spaces",
    category: "COMMERCIAL INTERIORS",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "HVAC & Climate Systems",
    category: "HVAC",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="projects-preview">

      <div className="container">

        {/* HEADER */}

        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >

          <div>
            <div className="section-label">
              <span></span>
              PROJECTS & APPLICATIONS
            </div>

            <h2>
              From concept
              <br />
              to <em>execution.</em>
            </h2>
          </div>

          <Link
            to="/projects"
            className="projects-view-all"
          >
            View Projects
            <ArrowUpRight size={17} />
          </Link>

        </motion.div>


        {/* PROJECTS */}

        <div className="projects-showcase">

          {projects.map((project, index) => (
            <motion.article
              className={`project-card project-card-${index + 1}`}
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >

              <Link to="/projects">

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-overlay"></div>

                  <div className="project-category">
                    {project.category}
                  </div>

                  <div className="project-arrow">
                    <ArrowUpRight size={19} />
                  </div>

                </div>


                <div className="project-info">

                  <h3>
                    {project.title}
                  </h3>

                  <span>
                    Explore application
                  </span>

                </div>

              </Link>

            </motion.article>
          ))}

        </div>

      </div>

    </section>
  );
}