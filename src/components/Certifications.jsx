
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  FileText,
  Download,
  X,
  Award,
} from "lucide-react";
import "./Certifications.css";



const certifications = [
  {
    number: "01",
    issuer: "Kaggle",
    title: "Pandas",
    date: "July 16, 2026",
    file: "/certificates/pandas.pdf",
  },
  {
    number: "02",
    issuer: "Oracle University",
    title: "Oracle Certified Foundations Associate",
    date: "February 17, 2026",
    file: "/certificates/oracle-ai-foundations.pdf",
  },
  {
    number: "03",
    issuer: "Deloitte",
    title: "Data Analytics Job Simulation",
    date: "2026",
    file: "/certificates/jobsimulation-deloitte.pdf",
  },
  
{
  number: "04",
  issuer: "NPTEL",
  title: "Python for Data Science — Elite (Silver)",
  date: "2026",
  file: "/certificates/NPTEL_Certificate_Python_for_DataScience.pdf",
},

];



function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const closeCertificate = () => setSelectedCertificate(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <>
      <section id="certifications" className="certifications-section">
        <div className="certifications-container">
          <motion.div
            className="certifications-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="certifications-heading-main">
              <span className="certifications-number">05</span>

              <div>
                <span className="certifications-label">
                  LEARNING & DEVELOPMENT
                </span>

                <h2 className="certifications-title">
                  Certifications<span>.</span>
                </h2>
              </div>
            </div>

            <p>
              Continuous learning through certifications and practical
              experiences in data, analytics, and technology.
            </p>
          </motion.div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.article
                className="certification-card"
                key={cert.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="certification-top">
                  <div className="certification-icon">
                    <Award size={21} strokeWidth={1.6} />
                  </div>
                  <span className="certification-index">{cert.number}</span>
                </div>

                <div className="certification-content">
                  <p className="certification-issuer">{cert.issuer}</p>
                  <h3>{cert.title}</h3>

                  <div className="certification-date">
                    <CalendarDays size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="certificate-button"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <span>View Certificate</span>
                  <ArrowUpRight size={17} />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} certificate preview`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeCertificate();
            }
          }}
        >
          <div className="certificate-modal-container">
            <div className="certificate-modal-header">
              <div className="certificate-modal-title">
                <FileText size={18} />
                <div>
                  <strong>{selectedCertificate.title}</strong>
                  <span>{selectedCertificate.issuer}</span>
                </div>
              </div>

              <div className="certificate-modal-actions">
                <a
                  href={selectedCertificate.file}
                  download
                  className="certificate-download"
                >
                  <Download size={16} />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  className="certificate-close"
                  onClick={closeCertificate}
                  aria-label="Close certificate preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="certificate-viewer">
              <iframe
                src={`${selectedCertificate.file}#toolbar=1&navpanes=0&view=FitH`}
                title={`${selectedCertificate.title} PDF`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Certifications;
