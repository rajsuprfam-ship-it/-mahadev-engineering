import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
} from "lucide-react";

import servicesData from "../data/servicesData";
import { getServiceImages } from "../data/imageLibrary";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = servicesData[slug];

  const galleryImages = useMemo(() => {
    if (!service) return [];
    return getServiceImages(slug);
  }, [slug, service]);

  if (!service) {
    return (
      <main className="service-not-found">
        <div className="container">
          <span className="section-eyebrow">SERVICE</span>

          <h1>Service not found.</h1>

          <p>
            The service you are looking for could not be found.
          </p>

          <Link to="/services" className="service-back-button">
            <ArrowLeft size={16} />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const mainImage =
    galleryImages.length > 0
      ? galleryImages[0]
      : service.image;

  const supportingImages =
    galleryImages.length > 1
      ? galleryImages.slice(1)
      : [];

  return (
    <main className="service-detail-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="service-detail-hero">
        <div className="container service-detail-hero-grid">

          <motion.div
            className="service-detail-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <Link
              to="/services"
              className="service-detail-back"
            >
              <ArrowLeft size={15} />
              All Services
            </Link>

            <div className="service-detail-number">
              {service.number}
            </div>

            <span className="service-detail-category">
              {service.category}
            </span>

            <h1>{service.title}</h1>

            <p className="service-detail-description">
              {service.description}
            </p>

            <Link
              to="/contact"
              className="service-detail-cta"
            >
              Discuss Your Project
              <ArrowUpRight size={17} />
            </Link>

          </motion.div>


          {/* HERO IMAGE */}

          <motion.div
            className="service-detail-hero-image"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
          >
            <img
              src={mainImage}
              alt={service.title}
            />

            <div className="service-image-label">
              <span>MAHADEV ENGINEERING</span>
              <strong>{service.shortTitle}</strong>
            </div>
          </motion.div>

        </div>
      </section>


      {/* =========================================
          OVERVIEW
      ========================================= */}

      <section className="service-overview-section">
        <div className="container service-overview-grid">

          <div className="service-overview-label">
            <span>01</span>
            <p>OVERVIEW</p>
          </div>

          <motion.div
            className="service-overview-content"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <h2>
              Designed around
              <span> your requirements.</span>
            </h2>

            <p>
              {service.overview}
            </p>
          </motion.div>

        </div>
      </section>


      {/* =========================================
          APPLICATIONS
      ========================================= */}

      <section className="service-applications-section">
        <div className="container">

          <div className="service-section-heading">

            <div>
              <span className="section-eyebrow">
                APPLICATIONS
              </span>

              <h2>
                Where this
                <span> service fits.</span>
              </h2>
            </div>

            <p>
              The service can be developed around the
              specific requirements of the project environment.
            </p>

          </div>


          <div className="service-applications-grid">

            {service.applications.map((item, index) => (

              <motion.div
                key={item}
                className="service-application-item"
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.55,
                  delay: index * 0.07,
                }}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item}</h3>

                <ArrowUpRight size={17} />

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================
          SERVICE IMAGES
      ========================================= */}

      {supportingImages.length > 0 && (

        <section className="service-gallery-section">

          <div className="container">

            <div className="service-gallery-heading">

              <span className="section-eyebrow">
                PROJECT VISUALS
              </span>

              <h2>
                A closer look at
                <span> the work.</span>
              </h2>

            </div>


            <div className="service-gallery-grid">

              {supportingImages.map((image, index) => (

                <motion.div
                  className={`service-gallery-card service-gallery-card-${index + 1}`}
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
                    alt={`${service.title} visual ${index + 2}`}
                    loading="lazy"
                  />

                </motion.div>

              ))}

            </div>

          </div>

        </section>

      )}


      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="service-process-section">

        <div className="container">

          <div className="service-section-heading">

            <div>
              <span className="section-eyebrow">
                OUR APPROACH
              </span>

              <h2>
                From requirement
                <span> to execution.</span>
              </h2>
            </div>

            <p>
              A structured approach keeps the project
              requirements clear through each stage.
            </p>

          </div>


          <div className="service-process-list">

            {service.process.map(
              ([number, title, description]) => (

                <motion.div
                  className="service-process-item"
                  key={number}
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay:
                      Number(number) * 0.05,
                  }}
                >

                  <div className="service-process-number">
                    {number}
                  </div>

                  <div className="service-process-info">

                    <h3>{title}</h3>

                    <p>{description}</p>

                  </div>

                  <Check
                    size={19}
                    className="service-process-check"
                  />

                </motion.div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="service-detail-cta-section">

        <div className="container">

          <motion.div
            className="service-detail-cta-box"
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div>

              <span className="section-eyebrow">
                START A CONVERSATION
              </span>

              <h2>
                Have a project
                <span> in mind?</span>
              </h2>

              <p>
                Tell us what you are planning and
                let's discuss the requirements.
              </p>

            </div>

            <Link
              to="/contact"
              className="service-detail-cta"
            >
              Start a Project
              <ArrowUpRight size={17} />
            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
}