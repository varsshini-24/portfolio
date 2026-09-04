import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import "./Contact.css";

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.4a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.98H3.56v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.1c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.77 1.04.77 2.1v3.11c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <div className="contact-number">06</div>

          <div className="contact-label">
            GET IN TOUCH
          </div>

          <h2 className="contact-title">
            Let's build something
            <br />
            <span>meaningful together.</span>
          </h2>

          <p className="contact-description">
            I'm open to internships, entry-level opportunities,
            collaborations and interesting data-driven projects.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="contact-content">

          <motion.a
            href="mailto:varsshinins@gmail.com"
            className="contact-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="contact-icon">
              <Mail size={22} />
            </div>

            <div className="contact-card-info">
              <span>Email</span>
              <h3>varsshinins@gmail.com</h3>
            </div>

            <ArrowUpRight size={20} className="contact-arrow" />
          </motion.a>

          <motion.div
            className="contact-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="contact-icon">
              <MapPin size={22} />
            </div>

            <div className="contact-card-info">
              <span>Location</span>
              <h3>Tiruppur, India</h3>
            </div>
          </motion.div>

        </div>

        {/* SOCIAL LINKS */}
        <div className="social-links">

          <a
            href="https://www.linkedin.com/in/varsshini-n-s-8ab184321/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
            <ArrowUpRight size={15} />
          </a>

          <a
            href="https://github.com/varsshini-24"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <GithubIcon />
            <span>GitHub</span>
            <ArrowUpRight size={15} />
          </a>

        </div>

        {/* FOOTER */}
        <div className="contact-footer">
          <p>© 2026 Varsshini N.S.</p>

          <p>
            Data Science&nbsp; • &nbsp;Analytics&nbsp; • &nbsp;Technology
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;