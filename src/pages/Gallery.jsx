import { motion } from "framer-motion";

const sections = [
  {
    category: "INTERIOR DESIGN",
    title: "Residential Interiors",
    images: [
      "/images/residential/Residential_Interior_Designing_Service_1.jpg",
      "/images/residential/Residential_Interior_Designing_Service_2.jpg",
      "/images/residential/Residential_Interior_Designing_Service_3.jpg",
      "/images/residential/Residential_Interior_Designing_Service_4.jpg",
    ],
  },
  {
    category: "INTERIOR DESIGN",
    title: "Bedroom Interiors",
    images: [
      "/images/bedroom/Bedroom_Interior_Designing_Services_1.jpg",
      "/images/bedroom/Bedroom_Interior_Designing_Services_2.jpg",
    ],
  },
  {
    category: "INTERIOR DESIGN",
    title: "Banquet Interiors",
    images: [
      "/images/banquet/Banquet_Interior_Decoration_Services_1.jpg",
      "/images/banquet/Banquet_Interior_Decoration_Services_2.jpg",
      "/images/banquet/Banquet_Interior_Decoration_Services_3.jpg",
    ],
  },
  {
    category: "COMMERCIAL",
    title: "Office Interiors",
    images: [
      "/images/office-design/Office_Interior_Designing_Service_1.jpg",
      "/images/office-design/Office_Interior_Designing_Service_2.jpg",
    ],
  },
  {
    category: "TURNKEY",
    title: "Office Turnkey Projects",
    images: [
      "/images/office-turnkey/Office_Interior_Turnkey_Projects_1.jpg",
      "/images/office-turnkey/Office_Interior_Turnkey_Projects_2.jpg",
      "/images/office-turnkey/Office_Interior_Turnkey_Projects_3.jpg",
      "/images/office-turnkey/Office_Interior_Turnkey_Projects_4.jpg",
      "/images/office-turnkey/Office_Interior_Turnkey_Projects_5.jpg",
    ],
  },
  {
    category: "TURNKEY",
    title: "Cinema & Multiplex",
    images: [
      "/images/cinema/Multiplex_Cinema_Interior_Turnkey_Projects_1.jpg",
      "/images/cinema/Multiplex_Cinema_Interior_Turnkey_Projects_2.jpg",
      "/images/cinema/Multiplex_Cinema_Interior_Turnkey_Projects_3.jpg",
      "/images/cinema/Multiplex_Cinema_Interior_Turnkey_Projects_4.jpg",
      "/images/cinema/Multiplex_Cinema_Interior_Turnkey_Projects_5.jpg",
    ],
  },
  {
    category: "TURNKEY",
    title: "Hospital Interiors",
    images: [
      "/images/hospital/Hospital_Interior_TurnKey_Service_1.jpg",
      "/images/hospital/Hospital_Interior_TurnKey_Service_2.jpg",
      "/images/hospital/Hospital_Interior_TurnKey_Service_3.jpg",
      "/images/hospital/Hospital_Interior_TurnKey_Service_4.jpg",
    ],
  },
  {
    category: "TURNKEY",
    title: "School Interiors",
    images: [
      "/images/school/School_Interior_Turnkey_Services_1.jpg",
      "/images/school/School_Interior_Turnkey_Services_2.jpg",
      "/images/school/School_Interior_Turnkey_Services_3.jpg",
    ],
  },
  {
    category: "TURNKEY",
    title: "Chemical Plant",
    images: [
      "/images/chemical-plant/Chemical_Plant_Interior_Turnkey_Service_1.jpg",
    ],
  },
  {
    category: "HVAC",
    title: "Ductable AC Systems",
    images: [
      "/images/ductable-ac/Ductable_Air_Conditioner_Installation_Service_1.jpg",
      "/images/ductable-ac/Ductable_Air_Conditioner_Installation_Service_2.jpg",
    ],
  },
  {
    category: "HVAC",
    title: "Daikin Ducted AC",
    images: [
      "/images/daikin-ac/Daikin_Ducted_Air_Conditioner_Repairing_Service_1.jpg",
      "/images/daikin-ac/Daikin_Ducted_Air_Conditioner_Repairing_Service_2.jpg",
      "/images/daikin-ac/Daikin_Ducted_Air_Conditioner_Repairing_Service_3.jpg",
    ],
  },
  {
    category: "HVAC",
    title: "HVAC Systems",
    images: [
      "/images/hvac/Hvac_Air_Conditioning_System_Installation_Service_1.jpg",
      "/images/hvac/Hvac_Air_Conditioning_System_Installation_Service_2.jpg",
    ],
  },
  {
    category: "INTERIOR DESIGN",
    title: "Cafe Interiors",
    images: [
      "/images/cafe/Cafe_Interior_Designing_Service_1.jpg",
    ],
  },
];

export default function Gallery() {
  return (
    <main className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero-inner">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">PROJECT VISUALS</span>

            <h1>
              A closer look at
              <br />
              <span>our work.</span>
            </h1>

            <p>
              Explore selected visuals across interiors,
              turnkey environments and HVAC applications.
            </p>
          </motion.div>

          <motion.div
            className="gallery-intro-number"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <strong>13</strong>
            <span>Visual Categories</span>
          </motion.div>

        </div>
      </section>


      {/* GALLERY */}
      <section className="gallery-content">
        <div className="gallery-container">

          {sections.map((section, index) => (
            <motion.section
              className="gallery-section"
              key={section.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65 }}
            >

              <div className="gallery-section-header">

                <div>
                  <span className="gallery-category">
                    {section.category}
                  </span>

                  <h2>{section.title}</h2>
                </div>

                <span className="gallery-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <div className="gallery-images">

                {section.images.map((image, imageIndex) => (
                  <motion.div
                    className="gallery-image"
                    key={image}
                    whileHover={{ scale: 0.985 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={image}
                      alt={`${section.title} ${imageIndex + 1}`}
                      loading="lazy"
                    />

                    <span className="gallery-image-number">
                      {String(imageIndex + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ))}

              </div>

            </motion.section>
          ))}

        </div>
      </section>


      {/* CTA */}
      <section className="gallery-cta">
        <div className="gallery-cta-inner">

          <span className="eyebrow">START A PROJECT</span>

          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            Let’s discuss your requirement and explore
            the right approach for your space or system.
          </p>

          <a href="/contact" className="gallery-cta-button">
            Discuss Your Project
          </a>

        </div>
      </section>

    </main>
  );
}