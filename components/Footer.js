"use client";

import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: "ti-brand-github", href: "https://github.com/mdjnaim", label: "GitHub" },
  { icon: "ti-brand-linkedin", href: "https://linkedin.com/in/mdjannatunnaim", label: "LinkedIn" },
  { icon: "ti-mail", href: "mailto:jannatun1481naim@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#0a0a14",
      borderTop: "1px solid #2d2d5e",
      padding: "40px 0 24px",
    }}>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 80px" }} className="about-container">

        {/* Top Row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "2rem",
        }} className="footer-top">

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{
              fontSize: "20px",
              fontWeight: 800,
              background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              MDJN.
            </span>
          </Link>

          {/* Nav Links */}
          <div style={{ display: "flex", gap: "2rem" }} className="footer-nav">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: "#6b6b8d",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "#a78bfa"}
                onMouseLeave={e => e.target.style.color = "#6b6b8d"}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "8px" }}>
            {socialLinks.map((social) => (
              
               <a key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "6px",
                  background: "rgba(167,139,250,0.08)",
                  border: "1px solid #2d2d5e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#a78bfa";
                  e.currentTarget.style.background = "rgba(167,139,250,0.15)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#2d2d5e";
                  e.currentTarget.style.background = "rgba(167,139,250,0.08)";
                }}
              >
                <i className={`ti ${social.icon}`} aria-hidden="true" style={{ fontSize: "15px", color: "#a78bfa" }} />
              </a>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, #2d2d5e, transparent)",
          marginBottom: "20px",
        }} />

        {/* Bottom Row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}>
          <p style={{ color: "#6b6b8d", fontSize: "12px", margin: 0 }}>
            © {new Date().getFullYear()} Md Jannatun Naim. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}