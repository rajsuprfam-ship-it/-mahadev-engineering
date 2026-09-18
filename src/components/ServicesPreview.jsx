import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Wind, Layers3, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "Residential, commercial, hospitality, healthcare and institutional interior solutions.",
    icon: Building2,
    link: "/services/interior-design",
  },
  {
    number: "02",
    title: "HVAC & Air Conditioning",
    description:
      "HVAC installation, duct AC systems and climate-control solutions for different environments.",
    icon: Wind,
    link: "/services/hvac-air-conditioning",
  },
  {
    number: "03",
    title: "Turnkey Projects",
    description:
      "Integrated project execution bringing planning, coordination and implementation together.",
    icon: Layers3,
    link: "/services/turnkey-projects",
  },
  {
    number: "04",
    title: "Consultancy",
    description:
      "Project management and management consultancy focused on practical project requirements.",
    icon: BriefcaseBusiness,
    link: "/services/consultancy",
  },
];

export default function ServicesPreview() {
  return (
    <section className="services-preview">

      <div className="container">

        {/* SECTION HEADER */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >

          <div className="section-label">
            <span></span>
            WHAT WE DO
          </div>

          <div className="section-heading-row">

            <h2>
              One team.
              <br />
              Multiple solutions.
            </h2>

            <p>
              From interior environments to HVAC systems and turnkey
              execution, Mahadev Engineering brings complementary
              capabilities together.
            </p>

          </div>

        </motion.div>


        {/* SERVICE CARDS */}

        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                className="service-card"
                initial={{
                  opacity: 0,
                  y: 40,
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >

                <Link to={service.link}>

                  <div className="service-card-top">

                    <span className="service-number">
                      {service.number}
                    </span>

                    <div className="service-icon">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>

                  </div>


                  <div className="service-card-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>


                  <div className="service-card-footer">

                    <span>
                      Explore Service
                    </span>

                    <ArrowUpRight size={18} />

                  </div>

                </Link>

              </motion.div>
            );

          })}

        </div>


        {/* ALL SERVICES */}

        <div className="services-bottom">

          <span>
            ENGINEERING · DESIGN · EXECUTION
          </span>

          <Link to="/services">
            View All Services
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </div>

    </section>
  );
}