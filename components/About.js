"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    icon: "ti-code",
    color: "#a78bfa",
    border: "rgba(167,139,250,0.2)",
    bg: "rgba(167,139,250,0.05)",
    items: ["Python", "JavaScript", "R"],
  },
  {
    category: "Frontend",
    icon: "ti-layout",
    color: "#60a5fa",
    border: "rgba(96,165,250,0.2)",
    bg: "rgba(96,165,250,0.05)",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "ti-server",
    color: "#34d399",
    border: "rgba(52,211,153,0.2)",
    bg: "rgba(52,211,153,0.05)",
    items: ["FastAPI", "Node.js"],
  },
  {
    category: "AI & Data",
    icon: "ti-brain",
    color: "#f97316",
    border: "rgba(249,115,22,0.2)",
    bg: "rgba(249,115,22,0.05)",
    items: ["TensorFlow", "PyTorch", "Pandas", "NumPy"],
  },
  {
    category: "Database",
    icon: "ti-database",
    color: "#f43f5e",
    border: "rgba(244,63,94,0.2)",
    bg: "rgba(244,63,94,0.05)",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    icon: "ti-tools",
    color: "#facc15",
    border: "rgba(250,204,21,0.2)",
    bg: "rgba(250,204,21,0.05)",
    items: ["Git", "GitHub Actions", "VS Code", "Colab"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="about" style={{
      backgroundColor: "#0f0f1a",
      padding: "100px 0",
    }}>

      {/* Load Tabler Icons */}
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
              About Me
            </p>
            <h2 style={{ fontSize: "40px", fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.2 }}>
              Who I <span className="gradient-text">Am</span>
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.div variants={fadeUp} style={{
            display: "flex",
            flexDirection: "row",
            gap: "4rem",
            alignItems: "flex-start",
            marginBottom: "60px",
          }}
            className="about-top"
          >
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ color: "#8b8bad", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
                I'm <span style={{ color: "#ffffff", fontWeight: 600 }}>Md Jannatun Naim</span>, a Computer Science & Engineering graduate from <span style={{ color: "#a78bfa", fontWeight: 600 }}><a href="https://www.aiub.edu/" target="_blank">American International University-Bangladesh (AIUB).</a></span>
              </p>
              <p style={{ color: "#8b8bad", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
                I recently completed a <span style={{ color: "#ffffff", fontWeight: 600 }}>Software Development Internship</span> at <span style={{ color: "#a78bfa", fontWeight: 600 }}><a href="https://www.sweetitech.co.uk/" target="_blank">Sweet iTech Limited</a></span>, where I worked on real-world web and ML projects. I'm passionate about building intelligent web applications that solve real problems.
              </p>
              <p style={{ color: "#8b8bad", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
                Beyond coding, I enjoy playing badminton, cricket, and puzzle-solving games. I love travelling, listening to music, and always learning new things.
              </p>

              {/* Info Cards */}
              <div className="info-cards">
                {[
                  { label: "Location", value: "Dhaka, Bangladesh" },
                  { label: "Degree", value: "B.Sc. CSE — AIUB" },
                  { label: "Email", value: "jannatun1481naim@gmail.com" },
                  { label: "Status", value: "Open to Work ✅" },
                ].map((info) => (
                  <div key={info.label} style={{
                    background: "linear-gradient(135deg, #1a1a3e, #161b2e)",
                    border: "1px solid #2d2d5e",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    }}>
                    <p style={{ color: "#6b6b8d", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 4px" }}>{info.label}</p>
                    <p style={{ color: "#e6edf3", fontSize: "13px", fontWeight: 500, margin: 0, wordBreak: "break-all" }}>{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={fadeUp}>
            <h3 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, marginBottom: "32px" }}>
              Skills & <span className="gradient-text">Technologies</span>
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}>
              {skills.map((skillGroup) => (
                <motion.div
                  key={skillGroup.category}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  style={{
                    background: skillGroup.bg,
                    border: `1px solid ${skillGroup.border}`,
                    borderRadius: "16px",
                    padding: "24px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s",
                    cursor: "default",
                  }}
                >
                  {/* Top gradient line */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, ${skillGroup.color}, transparent)`,
                  }} />

                  {/* Category header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: `${skillGroup.color}20`,
                      border: `1px solid ${skillGroup.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <i className={`ti ${skillGroup.icon}`} aria-hidden="true" style={{ fontSize: "18px", color: skillGroup.color }} />
                    </div>
                    <p style={{
                      color: skillGroup.color,
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      margin: 0,
                    }}>
                      {skillGroup.category}
                    </p>
                  </div>

                  {/* Skill badges */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          background: `${skillGroup.color}15`,
                          border: `1px solid ${skillGroup.border}`,
                          color: "#e6edf3",
                          fontSize: "13px",
                          fontWeight: 500,
                          padding: "5px 14px",
                          borderRadius: "20px",
                          transition: "all 0.2s",
                          cursor: "default",
                        }}
                        onMouseEnter={e => {
                          e.target.style.background = `${skillGroup.color}30`;
                          e.target.style.color = skillGroup.color;
                          e.target.style.borderColor = skillGroup.color;
                        }}
                        onMouseLeave={e => {
                          e.target.style.background = `${skillGroup.color}15`;
                          e.target.style.color = "#e6edf3";
                          e.target.style.borderColor = skillGroup.border;
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}