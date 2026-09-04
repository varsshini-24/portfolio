import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  FileText,
  Download,
  X,
} from "lucide-react";
import "./Certifications.css";

const certifications = [
  {
    number: "01",
    issuer: "Kaggle",
    title: "Pandas",
    date: "July 16, 2026",
    file: "/certificates/VARSSHINI%20N.S%20-%20Pandas%20%282%29%20%281%29.pdf",
  },
  {
    number: "02",
    issuer: "Oracle University",
    title: "Oracle Certified Foundations Associate",
    date: "February 17, 2026",
    file: "/certificates/oracle%20ai%20foundation.pdf",
  },
  {
    number: "03",
    issuer: "Deloitte",
    title: "Data Analytics Job Simulation",
    date: "2026",
    file: "/certificates/jobsimulation_deloitte%20%281%29.pdf",
  },
];

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = "hidden";
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section id="certifications" className="certifications-section">
        <div className="certifications-container">

          {/* HEADER */}
          <div className="certifications-heading">
            <div>
              <span className="certifications-number">04</span>

              <span className="certifications-label">
                LEARNING & DEVELOPMENT
              </span>
            </div>

            <p>
              Certifications and practical learning experiences that reflect my
              continuous growth in technology and data.
            </p>
          </div>

          {/* TITLE */}
          <h2 className="certifications-title">
            Certifications
          </h2>

          {/* CERTIFICATION CARDS */}
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.article
                className="certification-card"
                key={cert.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="certification-top">
                  <span>{cert.number}</span>

                  <ArrowUpRight
                    size={19}
                    className="certification-top-arrow"
                  />
                </div>

                <div className="certification-content">
                  <p className="certification-issuer">
                    {cert.issuer}
                  </p>

                  <h3>{cert.title}</h3>

                  <div className="certification-date">
                    <CalendarDays size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* VIEW BUTTON */}
                <button
                  type="button"
                  className="certificate-button"
                  onClick={() => openCertificate(cert)}
                >
                  <span>View Certificate</span>

                  <ArrowUpRight size={17} />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeCertificate();
            }
          }}
        >
          <div className="certificate-modal-container">

            {/* MODAL HEADER */}
            <div className="certificate-modal-header">

              <div className="certificate-modal-title">
                <FileText size={18} />

                <span>{selectedCertificate.title}</span>
              </div>

              <div className="certificate-modal-actions">

                {/* DOWNLOAD */}
                <a
                  href={selectedCertificate.file}
                  download
                  className="certificate-download"
                >
                  <Download size={17} />
                  <span>Download</span>
                </a>

                {/* CLOSE */}
                <button
                  type="button"
                  className="certificate-close"
                  onClick={closeCertificate}
                  aria-label="Close certificate"
                >
                  <X size={20} />
                </button>

              </div>
            </div>

            {/* PDF VIEWER */}
            <div className="certificate-viewer">
              <iframe
                src={`${selectedCertificate.file}#toolbar=1&navpanes=0&view=FitH`}
                title={selectedCertificate.title}
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Certifications;