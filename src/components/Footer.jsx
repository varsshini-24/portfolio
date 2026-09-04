import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">VNS.</div>

        <button className="back-top" onClick={scrollToTop}>
          Back to top
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Varsshini N.S. All rights reserved.</p>

        <p>Data Science Student · Aspiring Data Analyst</p>
      </div>
    </footer>
  );
}

export default Footer;
