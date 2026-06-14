"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "ML Enthusiast",
  "Python Developer",
];

const stats = [
  { number: "10+", label: "Projects" },
  { number: "1", label: "Internship" },
  { number: "8+", label: "Technologies" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const fullText = roles[currentRole];
    if (typing) {
      if (displayed.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayed(fullText.slice(0, displayed.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, currentRole]);

  return (
    <section id="hero" className="hero-section" style={{
      position: "relative",
      minHeight: "100vh",
      backgroundColor: "#0f0f1a",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      paddingTop: "64px",
    }}>

      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #a78bfa, #60a5fa)",
        opacity: 0.07,
        filter: "blur(100px)",
        pointerEvents: "none",
      }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="hero-inner"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 80px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4rem",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >

        {/* Left Side */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="hero-left"
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >

          {/* Badge */}
          <motion.div variants={fadeUp} style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid #2d2d5e",
            backgroundColor: "#1a1a3e",
            width: "fit-content",
          }}>
            <span>✨</span>
            <span style={{ color: "#a78bfa", fontSize: "14px", fontWeight: 500 }}>Available for hire</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="hero-name"
            style={{ fontSize: "56px", fontWeight: 800, lineHeight: 1.2, margin: 0 }}
          >
            <span style={{ color: "#ffffff" }}>Md Jannatun </span>
            <span className="gradient-text">Naim</span>
          </motion.h1>

          {/* Typing */}
          <motion.h2
            variants={fadeUp}
            className="hero-role"
            style={{ fontSize: "22px", fontWeight: 500, color: "#8b8bad", margin: 0, minHeight: "2rem" }}
          >
            I'm a <span className="accent-gradient" style={{ fontWeight: 600 }}>{displayed}</span>
            <span style={{ color: "#a78bfa" }}>|</span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={fadeUp} style={{ color: "#8b8bad", fontSize: "16px", lineHeight: 1.7, maxWidth: "480px", margin: 0 }}>
            CSE Graduate from AIUB. Building intelligent web apps with React, Next.js and Python. Open to full-time roles and internships.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="hero-stats"
            style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
                <span className="accent-gradient" style={{ fontSize: "32px", fontWeight: 800 }}>{stat.number}</span>
                <span style={{ color: "#6b6b8d", fontSize: "13px", marginTop: "4px" }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="hero-buttons"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Hire Me</a>
            <a href="/cv.pdf" target="_blank" className="btn-ghost">Download CV</a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeUp}
            className="hero-socials"
            style={{ display: "flex", gap: "1.5rem" }}
          >
            <a href="https://github.com/mdjnaim" target="_blank"
              style={{ color: "#6b6b8d", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}
              onMouseEnter={e => e.target.style.color = "#a78bfa"}
              onMouseLeave={e => e.target.style.color = "#6b6b8d"}>GitHub ↗</a>
            <a href="https://linkedin.com/in/mdjannatunnaim" target="_blank"
              style={{ color: "#6b6b8d", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}
              onMouseEnter={e => e.target.style.color = "#a78bfa"}
              onMouseLeave={e => e.target.style.color = "#6b6b8d"}>LinkedIn ↗</a>
            <a href="mailto:jannatun1481naim@gmail.com"
              style={{ color: "#6b6b8d", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}
              onMouseEnter={e => e.target.style.color = "#a78bfa"}
              onMouseLeave={e => e.target.style.color = "#6b6b8d"}>Email ↗</a>
          </motion.div>

        </motion.div>

        {/* Right Side — Photo */}
        <motion.div variants={fadeLeft} initial="hidden" animate="visible" style={{ flexShrink: 0 }}>
          <div className="hero-photo" style={{ position: "relative", width: "320px", height: "320px" }}>
            <div style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
              opacity: 0.5,
              filter: "blur(20px)",
            }} />
            <div style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #a78bfa",
            }}>
              <Image src="/avatar.png" alt="Md Jannatun Naim" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}