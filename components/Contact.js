"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: "ti-mail",
    label: "Email",
    value: "jannatun1481naim@gmail.com",
    link: "mailto:jannatun1481naim@gmail.com",
    color: "#a78bfa",
    border: "rgba(167,139,250,0.2)",
    bg: "rgba(167,139,250,0.05)",
  },
  {
    icon: "ti-brand-github",
    label: "GitHub",
    value: "github.com/mdjnaim",
    link: "https://github.com/mdjnaim",
    color: "#60a5fa",
    border: "rgba(96,165,250,0.2)",
    bg: "rgba(96,165,250,0.05)",
  },
  {
    icon: "ti-brand-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/mdjannatunnaim",
    link: "https://linkedin.com/in/mdjannatunnaim",
    color: "#34d399",
    border: "rgba(52,211,153,0.2)",
    bg: "rgba(52,211,153,0.05)",
  },
  {
    icon: "ti-map-pin",
    label: "Location",
    value: "Dhaka, Bangladesh",
    link: null,
    color: "#f97316",
    border: "rgba(249,115,22,0.2)",
    bg: "rgba(249,115,22,0.05)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    background: "#1a1a3e",
    border: "1px solid #2d2d5e",
    borderRadius: "10px",
    color: "#e6edf3",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const labelStyle = {
    color: "#8b8bad",
    fontSize: "13px",
    fontWeight: 500,
    marginBottom: "8px",
    display: "block",
  };

  return (
    <section id="contact" style={{ backgroundColor: "#0f0f1a", padding: "100px 0" }}>

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
              Get In Touch
            </p>
            <h2 style={{ fontSize: "40px", fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.2 }}>
              Contact <span className="gradient-text">Me</span>
            </h2>
            <p style={{ color: "#8b8bad", fontSize: "16px", lineHeight: 1.7, marginTop: "16px", maxWidth: "500px" }}>
              I'm currently open to full-time, part-time roles and freelance opportunities. Feel free to reach out — I'll get back to you as soon as possible!
            </p>
          </motion.div>

          {/* Two column layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem", alignItems: "start" }} className="contact-grid">

            {/* Left — Contact Info */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 4 }}
                  style={{
                    background: info.bg,
                    border: `1px solid ${info.border}`,
                    borderRadius: "12px",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    transition: "all 0.2s",
                    textDecoration: "none",
                    cursor: info.link ? "pointer" : "default",
                  }}
                  onClick={() => info.link && window.open(info.link, "_blank")}
                >
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: `${info.color}20`,
                    border: `1px solid ${info.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <i className={`ti ${info.icon}`} aria-hidden="true" style={{ fontSize: "18px", color: info.color }} />
                  </div>
                  <div>
                    <p style={{ color: "#6b6b8d", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 2px" }}>{info.label}</p>
                    <p style={{ color: "#e6edf3", fontSize: "13px", fontWeight: 500, margin: 0, wordBreak: "break-all" }}>{info.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Availability badge */}
              <div style={{
                background: "rgba(52,211,153,0.08)",
                border: "1px solid rgba(52,211,153,0.2)",
                borderRadius: "12px",
                padding: "16px",
                marginTop: "8px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#34d399", animation: "pulse 2s infinite" }} />
                  <p style={{ color: "#34d399", fontSize: "13px", fontWeight: 600, margin: 0 }}>Available for work</p>
                </div>
                <p style={{ color: "#8b8bad", fontSize: "13px", margin: 0, lineHeight: 1.5 }}>
                  Open to full-time, part-time roles and freelance projects.
                </p>
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div variants={fadeUp}>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                {/* Name + Email row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Abrar Fahad"
                      required
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#a78bfa"}
                      onBlur={e => e.target.style.borderColor = "#2d2d5e"}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="abrar@email.com"
                      required
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#a78bfa"}
                      onBlur={e => e.target.style.borderColor = "#2d2d5e"}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={labelStyle}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Collaboration"
                    required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#a78bfa"}
                    onBlur={e => e.target.style.borderColor = "#2d2d5e"}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={e => e.target.style.borderColor = "#a78bfa"}
                    onBlur={e => e.target.style.borderColor = "#2d2d5e"}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading ? "#2d2d5e" : "linear-gradient(90deg, #a78bfa, #60a5fa)",
                    color: loading ? "#6b6b8d" : "#0f0f1a",
                    fontWeight: 700,
                    fontSize: "15px",
                    padding: "14px 32px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  {loading ? (
                    <>
                      <i className="ti ti-loader" aria-hidden="true" style={{ fontSize: "18px" }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="ti ti-send" aria-hidden="true" style={{ fontSize: "18px" }} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status messages */}
                {status === "success" && (
                  <div style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: "10px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <i className="ti ti-circle-check" aria-hidden="true" style={{ fontSize: "18px", color: "#34d399" }} />
                    <p style={{ color: "#34d399", fontSize: "14px", margin: 0 }}>Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                {status === "error" && (
                  <div style={{ background: "rgba(244,63,94,0.1)", border: "1px solid rgba(244,63,94,0.2)", borderRadius: "10px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <i className="ti ti-circle-x" aria-hidden="true" style={{ fontSize: "18px", color: "#f43f5e" }} />
                    <p style={{ color: "#f43f5e", fontSize: "14px", margin: 0 }}>Something went wrong. Please email me directly!</p>
                  </div>
                )}

              </form>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}