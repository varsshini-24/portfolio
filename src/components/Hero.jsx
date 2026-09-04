import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* Background grid */}
      <div className="hero-grid"></div>

      {/* Main content */}
      <div className="hero-content">

        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>


        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >
          Hi, I'm
          <span>Varsshini.</span>
        </motion.h1>


        <motion.div
          className="hero-role"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <span>DATA SCIENCE STUDENT</span>
          <span className="hero-separator">/</span>
          <span>ASPIRING DATA ANALYST</span>
        </motion.div>


        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
        >
          I turn data into meaningful insights and build
          practical technology solutions that solve
          real-world problems.
        </motion.p>


        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
        >

          <a
            href="#projects"
            className="hero-button hero-button-primary"
          >
            View my work
            <ArrowUpRight size={17} />
          </a>

          <a
            href="#contact"
            className="hero-button hero-button-secondary"
          >
            Let's connect
          </a>

        </motion.div>

      </div>


      {/* Bottom information */}
      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >

        <span>COIMBATORE, INDIA</span>

        <div className="hero-scroll">
          <ArrowDown size={14} />
          <span>SCROLL TO EXPLORE</span>
        </div>

        <span>2026</span>

      </motion.div>

    </section>
  );
}

export default Hero;