import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mahadev-video-hero">

      {/* =====================================================
          FULL SCREEN HERO VIDEO
      ===================================================== */}

      <video
        className="mahadev-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/videos/mahadev-hero.mp4"
          type="video/mp4"
        />

        Your browser does not support the video tag.
      </video>


      {/* =====================================================
          VERY LIGHT OVERLAY
          Keeps the original video visible
      ===================================================== */}

      <div className="mahadev-hero-overlay"></div>


      {/* =====================================================
          CTA BUTTONS
          Bottom-center so they don't cover Gemini text
      ===================================================== */}

      <motion.div
        className="mahadev-hero-buttons"

        initial={{
          opacity: 0,
          y: 15,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.7,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* EXPLORE SERVICES */}

        <a
          href="/services"
          className="mahadev-hero-btn mahadev-hero-btn-primary"
        >
          <span>Explore Services</span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
          />
        </a>


        {/* START A PROJECT */}

        <a
          href="/contact"
          className="mahadev-hero-btn mahadev-hero-btn-secondary"
        >
          <span>Start a Project</span>
        </a>

      </motion.div>

    </section>
  );
}