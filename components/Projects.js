"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Weather App",
    description: "A real-time weather application that fetches live weather data using a public API. Shows temperature, humidity, wind speed and forecasts for any city.",
    tech: ["React", "API", "JavaScript", "CSS"],
    github: "https://github.com/mdjnaim/mini_project/tree/weather-app",
    live: null,
    color: "#60a5fa",
    border: "rgba(96,165,250,0.2)",
    bg: "rgba(96,165,250,0.05)",
    icon: "ti-cloud",
    tag: "Web",
  },
  {
    title: "IMDB Clone",
    description: "A movie database web app inspired by IMDB. Browse movies, view details, ratings, and cast information fetched from a movie API.",
    tech: ["React", "API", "JavaScript", "CSS"],
    github: "https://github.com/mdjnaim/imdb_clone",
    live: null,
    color: "#facc15",
    border: "rgba(250,204,21,0.2)",
    bg: "rgba(250,204,21,0.05)",
    icon: "ti-movie",
    tag: "Web",
  },
  {
    title: "Quiz Site",
    description: "An interactive quiz application with multiple categories and difficulty levels. Tracks score, shows correct answers and displays final results.",
    tech: ["JavaScript", "HTML", "CSS", "API"],
    github: "https://github.com/mdjnaim/mini_project/tree/quiz-app",
    live: null,
    color: "#34d399",
    border: "rgba(52,211,153,0.2)",
    bg: "rgba(52,211,153,0.05)",
    icon: "ti-help",
    tag: "Web",
  },
  {
    title: "Tic Tac Toe",
    description: "A classic Tic Tac Toe game built with React. Features two-player mode, win detection, score tracking and smooth animations.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/mdjnaim/react/tree/tic-tac-toe",
    live: null,
    color: "#a78bfa",
    border: "rgba(167,139,250,0.2)",
    bg: "rgba(167,139,250,0.05)",
    icon: "ti-layout-grid",
    tag: "Web",
  },
  {
    title: "Mango Leaf Disease Detection",
    description: "A deep learning model that detects diseases in mango leaves using image classification. Built with TensorFlow and achieves high accuracy on test data.",
    tech: ["Python", "TensorFlow", "PyTorch", "NumPy"],
    github: "https://github.com/mdjnaim/leaf-classification-",
    live: null,
    color: "#f97316",
    border: "rgba(249,115,22,0.2)",
    bg: "rgba(249,115,22,0.05)",
    icon: "ti-leaf",
    tag: "ML",
  },
  {
    title: "Automated Attendance System",
    description: "A computer vision system that automates attendance tracking using face detection. Identifies registered faces in real-time using deep learning.",
    tech: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    github: "https://github.com/mdjnaim/face_detection",
    live: null,
    color: "#f43f5e",
    border: "rgba(244,63,94,0.2)",
    bg: "rgba(244,63,94,0.05)",
    icon: "ti-camera",
    tag: "CV",
  },
  {
    title: "Food Image Segmentation",
    description: "A deep learning model that segments food items from images using computer vision techniques. Identifies and classifies different food components with high accuracy.",
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy"],
    github: "https://github.com/mdjnaim/food_segmentation",
    live: null,
    color: "#34d399",
    border: "rgba(52,211,153,0.2)",
    bg: "rgba(52,211,153,0.05)",
    icon: "ti-salad",
    tag: "CV",
  },
  {
    title: "Heart Disease Classification",
    description: "A machine learning model that predicts the likelihood of heart disease based on patient data. Uses classification algorithms to assist in early medical diagnosis.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/mdjnaim/Heart_Disease_Classification",
    live: null,
    color: "#f43f5e",
    border: "rgba(244,63,94,0.2)",
    bg: "rgba(244,63,94,0.05)",
    icon: "ti-heart-rate-monitor",
    tag: "ML",
  },
  {
    title: "Digital Habit vs Mental Health",
    description: "A data science project analyzing the impact of digital habits on mental health. Explores correlations between screen time, social media usage and mental wellbeing.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/mdjnaim/digital-habit-vs-mental-health",
    live: null,
    color: "#a78bfa",
    border: "rgba(167,139,250,0.2)",
    bg: "rgba(167,139,250,0.05)",
    icon: "ti-brain",
    tag: "ML",
  },
  {
    title: "LDA News Analyzer",
    description: "A natural language processing project that analyzes and categorizes news articles using Latent Dirichlet Allocation (LDA) topic modeling. Automatically discovers hidden topics across large news datasets.",
    tech: ["Python", "NLP", "Pandas", "Scikit-learn"],
    github: "https://github.com/mdjnaim/LDA_News_Analyzer",
    live: null,
    color: "#60a5fa",
    border: "rgba(96,165,250,0.2)",
    bg: "rgba(96,165,250,0.05)",
    icon: "ti-news",
    tag: "ML",
  },
];

const filters = ["All", "Web", "ML", "CV"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
  ? projects
  : projects.filter((p) => p.tag.toLowerCase() === active.toLowerCase());

  return (
    <section id="projects" style={{ backgroundColor: "#0f0f1a", padding: "100px 0" }}>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 80px" }} className="about-container">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Section Title */}
          <motion.div variants={fadeUp} style={{ marginBottom: "48px" }}>
            <p style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
              My Work
            </p>
            <h2 style={{ fontSize: "40px", fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.2 }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={fadeUp} style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "20px",
                  border: active === filter ? "1px solid #a78bfa" : "1px solid #2d2d5e",
                  background: active === filter ? "rgba(167,139,250,0.15)" : "transparent",
                  color: active === filter ? "#a78bfa" : "#6b6b8d",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={active}
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            }}
        >
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{
                  background: project.bg,
                  border: `1px solid ${project.border}`,
                  borderRadius: "16px",
                  padding: "24px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transition: "all 0.3s",
                }}
              >
                {/* Top line */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }} />

                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: `${project.color}20`,
                      border: `1px solid ${project.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <i className={`ti ${project.icon}`} aria-hidden="true" style={{ fontSize: "20px", color: project.color }} />
                    </div>
                    <div>
                      <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, margin: 0 }}>{project.title}</h3>
                      <span style={{
                        background: `${project.color}20`,
                        color: project.color,
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: "20px",
                      }}>{project.tag}</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    
                      <a href={project.github}
                      target="_blank"
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid #2d2d5e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = project.color;
                        e.currentTarget.style.background = `${project.color}20`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "#2d2d5e";
                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      }}
                    >
                      <i className="ti ti-brand-github" aria-hidden="true" style={{ fontSize: "18px", color: "#e6edf3" }} />
                    </a>
                    {project.live && (
                      
                        <a href={project.live}
                        target="_blank"
                        style={{
                          width: "34px",
                          height: "34px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid #2d2d5e",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                          transition: "all 0.2s",
                        }}
                      >
                        <i className="ti ti-external-link" aria-hidden="true" style={{ fontSize: "18px", color: "#e6edf3" }} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: "#8b8bad", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                  {project.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                  {project.tech.map((t) => (
                    <span
                        key={t}
                        style={{
                        background: `${project.color}10`,
                        border: `1px solid ${project.border}`,
                        color: project.color,
                        fontSize: "12px",
                        fontWeight: 500,
                        padding: "4px 12px",
                        borderRadius: "20px",
                        transition: "all 0.2s",
                        cursor: "default",
                        }}
                        onMouseEnter={e => {
                        e.target.style.background = `${project.color}30`;
                        e.target.style.color = "#ffffff";
                        e.target.style.borderColor = project.color;
                        }}
                        onMouseLeave={e => {
                        e.target.style.background = `${project.color}10`;
                        e.target.style.color = project.color;
                        e.target.style.borderColor = project.border;
                        }}
                    >{t}</span>
                    ))}
                </div>

              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}