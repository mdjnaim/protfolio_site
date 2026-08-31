"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    type: "work",
    title: "Software Development Intern",
    company: "Sweet iTech Limited",
    link: "https://www.sweetitech.co.uk/",
    duration: "February 2026 — May 2026",
    location: "Dhaka, Bangladesh",
    color: "#a78bfa",
    border: "rgba(167,139,250,0.2)",
    bg: "rgba(167,139,250,0.05)",
    icon: "ti-briefcase",
    points: [
      "Worked on real-world web development and machine learning projects",
      "Built and deployed full stack features using React and FastAPI",
      "Collaborated with a team of developers in an agile environment",
      "Gained hands-on experience with production-level codebases",
    ],
  },
];

const education = [
  {
    type: "education",
    title: "B.Sc. Computer Science & Engineering",
    company: "American International University-Bangladesh (AIUB)",
    link: "https://www.aiub.edu/",
    duration: "2022 — 2026",
    location: "Dhaka, Bangladesh",
    color: "#60a5fa",
    border: "rgba(96,165,250,0.2)",
    bg: "rgba(96,165,250,0.05)",
    icon: "ti-school",
    points: [
      "GPA: 3.34 out of 4.00",
      "Specialized in software development and machine learning",
      "Completed projects in computer vision, NLP and web development",
      "IT Essential Certificate from CISCO Networking Academy",
    ],
  },
  {
    type: "education",
    title: "Higher Secondary Certificate (HSC)",
    company: "Mirpur College",
    link: "https://www.mirpurcollege.edu.bd/",
    duration: "2018 — 2020",
    location: "Dhaka, Bangladesh",
    color: "#34d399",
    border: "rgba(52,211,153,0.2)",
    bg: "rgba(52,211,153,0.05)",
    icon: "ti-certificate",
    points: [
      "Science group — GPA 5.00 out of 5.00",
      "Perfect score in all subjects",
    ],
  },
  {
    type: "education",
    title: "Secondary School Certificate (SSC)",
    company: "Narail Govt. High School",
    link: "https://www.narailgovthighschool.edu.bd/",
    duration: "2016 — 2018",
    location: "Narail, Bangladesh",
    color: "#f97316",
    border: "rgba(249,115,22,0.2)",
    bg: "rgba(249,115,22,0.05)",
    icon: "ti-certificate",
    points: [
      "Science group — GPA 5.00 out of 5.00",
      "Perfect score in all subjects",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function TimelineCard({ item }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      style={{
        background: item.bg,
        border: `1px solid ${item.border}`,
        borderRadius: "16px",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s",
      }}
    >
      {/* Top line */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "2px",
        background: `linear-gradient(90deg, ${item.color}, transparent)`,
      }} />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "16px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: `${item.color}20`,
            border: `1px solid ${item.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <i className={`ti ${item.icon}`} aria-hidden="true" style={{ fontSize: "20px", color: item.color }} />
          </div>
          <div>
            <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, margin: "0 0 4px" }}>
              {item.title}
            </h3>
            {item.link ? (
              <a href={item.link} target="_blank" style={{ color: item.color, fontSize: "14px", fontWeight: 500, textDecoration: "none" }}
                onMouseEnter={e => e.target.style.textDecoration = "underline"}
                onMouseLeave={e => e.target.style.textDecoration = "none"}
              >
                {item.company} ↗
              </a>
            ) : (
              <p style={{ color: item.color, fontSize: "14px", fontWeight: 500, margin: 0 }}>{item.company}</p>
            )}
          </div>
        </div>

        {/* Duration + Location */}
        <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{
                background: `${item.color}15`,
                border: `1px solid ${item.border}`,
                color: item.color,
                fontSize: "12px",
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: "20px",
                margin: "0 0 6px",
                whiteSpace: "normal",
                wordBreak: "break-word",
                textAlign: "center",
              }}>
                {item.duration}
              </p>
          <p style={{ color: "#6b6b8d", fontSize: "12px", margin: 0 }}>
            <i className="ti ti-map-pin" aria-hidden="true" style={{ fontSize: "12px", marginRight: "4px" }} />
            {item.location}
          </p>
        </div>
      </div>

      {/* Points */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
        {item.points.map((point, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: item.color,
              marginTop: "8px",
              flexShrink: 0,
            }} />
            <p style={{ color: "#8b8bad", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{point}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ backgroundColor: "#0f0f1a", padding: "100px 0" }}>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 80px" }} className="about-container">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Section Title */}
          <motion.div variants={fadeUp} style={{ marginBottom: "60px" }}>
            <p style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
              My Journey
            </p>
            <h2 style={{ fontSize: "40px", fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.2 }}>
              Experience & <span className="gradient-text">Education</span>
            </h2>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={fadeUp} style={{ marginBottom: "60px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{
                width: "36px", height: "36px",
                borderRadius: "10px",
                background: "rgba(167,139,250,0.1)",
                border: "1px solid rgba(167,139,250,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <i className="ti ti-briefcase" aria-hidden="true" style={{ fontSize: "18px", color: "#a78bfa" }} />
              </div>
              <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: 0 }}>
                Work <span className="gradient-text">Experience</span>
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {experiences.map((item) => (
                <TimelineCard key={item.title} item={item} />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{
                width: "36px", height: "36px",
                borderRadius: "10px",
                background: "rgba(96,165,250,0.1)",
                border: "1px solid rgba(96,165,250,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <i className="ti ti-school" aria-hidden="true" style={{ fontSize: "18px", color: "#60a5fa" }} />
              </div>
              <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: 0 }}>
                <span className="gradient-text">Education</span>
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {education.map((item) => (
                <TimelineCard key={item.title} item={item} />
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}