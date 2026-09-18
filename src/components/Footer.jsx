export default function Footer() {
    return (
      <footer className="mahadev-footer">
  
        {/* CTA */}
        <section className="mahadev-footer-cta">
          <div className="mahadev-footer-cta-content">
  
            <div>
              <span className="mahadev-footer-label">
                START A CONVERSATION
              </span>
  
              <h2>
                Have a project
                <br />
                <span>in mind?</span>
              </h2>
  
              <p>
                Tell us about your requirements and let's explore
                the right solution for your project.
              </p>
            </div>
  
            <a
              href="/contact"
              className="mahadev-footer-cta-button"
            >
              Start a Project
              <span>↗</span>
            </a>
  
          </div>
        </section>
  
  
        {/* FOOTER */}
        <section className="mahadev-footer-main">
  
          <div className="mahadev-footer-grid">
  
            {/* BRAND */}
            <div className="mahadev-footer-brand">
  
              <a href="/" className="mahadev-footer-logo">
                <span className="mahadev-footer-logo-mark">
                  ME
                </span>
  
                <span>
                  <strong>MAHADEV</strong>
                  <small>ENGINEERING</small>
                </span>
              </a>
  
              <p>
                Interior design, HVAC, turnkey execution
                and consultancy — brought together under
                one team.
              </p>
  
              <span className="mahadev-footer-location">
                THANE · MAHARASHTRA
              </span>
  
            </div>
  
  
            {/* COMPANY */}
            <div className="mahadev-footer-column">
  
              <span className="mahadev-footer-heading">
                COMPANY
              </span>
  
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/projects">Projects</a>
              <a href="/gallery">Gallery</a>
              <a href="/contact">Contact</a>
  
            </div>
  
  
            {/* SERVICES */}
            <div className="mahadev-footer-column">
  
              <span className="mahadev-footer-heading">
                SERVICES
              </span>
  
              <a href="/services">
                Interior Designing
              </a>
  
              <a href="/services">
                HVAC & Air Conditioning
              </a>
  
              <a href="/services">
                Turnkey Projects
              </a>
  
              <a href="/services">
                Consultancy
              </a>
  
            </div>
  
  
            {/* CONTACT */}
            <div className="mahadev-footer-column">
  
              <span className="mahadev-footer-heading">
                CONNECT
              </span>
  
              <span className="mahadev-footer-text">
                Discuss your next project with
                Mahadev Engineering.
              </span>
  
              <a
                href="/contact"
                className="mahadev-footer-contact"
              >
                Get in Touch ↗
              </a>
  
            </div>
  
          </div>
  
  
          <div className="mahadev-footer-bottom">
  
            <span>
              © 2026 Mahadev Engineering
            </span>
  
            <span>
              EST. 2025 · THANE, MAHARASHTRA
            </span>
  
            <span>
              All rights reserved.
            </span>
  
          </div>
  
        </section>
  
      </footer>
    );
  }