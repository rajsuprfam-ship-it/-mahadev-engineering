
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="contact-hero-content"
          >
            <span className="section-eyebrow">CONTACT US</span>

            <h1>
              Let's discuss your
              <br />
              <span>next project.</span>
            </h1>

            <p>
              Whether it's Interior Designing, HVAC Installation,
              Turnkey Projects or Consultancy, our team is ready
              to help you plan the right solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-details">
        <div className="container contact-grid">

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">GET IN TOUCH</span>

            <h2>Mahadev Engineering</h2>

            <div className="contact-item">
              <MapPin size={18} />
              <div>
                <strong>Office Address</strong>
                <p>
                  Gala No. 12, Mahadev Industrial Estate,
                  Wagle Estate, Thane, Maharashtra 400604
                </p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={18} />
              <div>
                <strong>Call Us</strong>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={18} />
              <div>
                <strong>Email</strong>
                <p>info@mahadevengineering.in</p>
              </div>
            </div>

            <div className="contact-item">
              <Clock size={18} />
              <div>
                <strong>Working Hours</strong>
                <p>Monday – Saturday | 9:00 AM – 6:30 PM</p>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            className="contact-form-box"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Request a Consultation</h3>

            <form className="contact-form">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <select>
                <option>Select Service</option>
                <option>Residential Interior</option>
                <option>Bedroom Interior</option>
                <option>Banquet Interior</option>
                <option>Office Interior</option>
                <option>HVAC Installation</option>
                <option>Hospital Turnkey</option>
                <option>School Turnkey</option>
                <option>Consultancy</option>
              </select>

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
              ></textarea>

              <button type="submit">
                Send Inquiry
              </button>

            </form>
          </motion.div>

        </div>
      </section>

      {/* MAP */}
      <section className="contact-map">
        <div className="container">

          <div className="map-card">
            <iframe
              title="Mahadev Engineering Location"
              src="https://www.google.com/maps?q=Wagle+Estate+Thane&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
    </main>
  );
}