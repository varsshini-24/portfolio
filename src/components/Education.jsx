
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  BookOpen,
  School,
  Award,
  Sparkles,
} from "lucide-react";
import "./Education.css";

const education = [
  {
    number: "01",
    level: "UNDERGRADUATE",
    title: "B.Sc. Data Science",
    institution: "KPR College of Arts, Science and Research",
    location: "Coimbatore, India",
    period: "2026 – 2029",
    status: "Currently pursuing",
    icon: GraduationCap,
    description:
      "Building a strong foundation in data science, programming, data analytics, and visualization through coursework and practical projects.",
    tags: [
      "Data Science",
      "Data Analytics",
      "Programming",
      "Data Visualization",
    ],
  },
  {
    number: "02",
    level: "HIGHER SECONDARY",
    title: "Class 12",
    institution:
      "Sri Hayakgrevar Vidhyalaya Matric Higher Secondary School",
    period: "2024",
    score: "83%",
    icon: School,
    description:
      "Completed higher secondary education, developing the academic foundation for undergraduate studies.",
  },
  {
    number: "03",
    level: "SECONDARY SCHOOL",
    title: "Class 10",
    institution:
      "Sri Hayakgrevar Vidhyalaya Matric Higher Secondary School",
    period: "2022",
    score: "79.6%",
    icon: BookOpen,
    description:
      "Completed secondary education and established a foundation for further academic learning.",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="education-section-number">04</span>

          <span className="education-eyebrow">
            <Sparkles size={14} />
            EDUCATION & LEARNING
          </span>

          <h2>
            My academic <span>journey.</span>
          </h2>

          <p>
            Every step has helped me build my knowledge, strengthen
            my foundation, and move closer to my goals.
          </p>
        </motion.div>

        <div className="education-timeline">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="education-card"
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
              >
                <div className="education-card-top">
                  <div className="education-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="education-number">
                    {item.number}
                  </span>
                </div>

                <div className="education-card-content">
                  <span className="education-level">
                    {item.level}
                  </span>

                  <div className="education-title-row">
                    <h3>{item.title}</h3>

                    {item.score && (
                      <div className="education-score">
                        <Award size={16} />
                        <span>{item.score}</span>
                      </div>
                    )}
                  </div>

                  <h4>{item.institution}</h4>

                  <div className="education-meta">
                    <span>
                      <BookOpen size={14} />
                      {item.period}
                    </span>

                    {item.location && (
                      <span>
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    )}
                  </div>

                  <p className="education-description">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="education-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}

                  {item.status && (
                    <div className="education-status">
                      <span className="education-status-dot" />
                      {item.status}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="education-footer-note"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles size={17} />
          <span>
            Learning continuously through academics, projects, and
            hands-on experience.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
