"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50"
      style={{
        backgroundColor: "rgba(15, 15, 26, 0.95)",
        borderBottom: "1px solid #2d2d5e",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex items-center justify-between"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "16px 48px",
        }}
      >

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontSize: "22px",
            fontWeight: 700,
            background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            MDJN<span style={{ color: "#a78bfa" }}>.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                style={{
                  color: "#8b8bad",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "#a78bfa"}
                onMouseLeave={e => e.target.style.color = "#8b8bad"}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button — desktop */}
        
          <a href="/cv.pdf"
          target="_blank"
          className="hidden md:block"
          style={{
            background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
            color: "#0f0f1a",
            fontWeight: 700,
            fontSize: "13px",
            padding: "8px 22px",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          Resume ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#a78bfa",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          backgroundColor: "#0f0f1a",
          borderTop: "1px solid #2d2d5e",
          padding: "20px 48px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#8b8bad",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
          
            <a href="/cv.pdf"
            target="_blank"
            style={{
              color: "#a78bfa",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  );
}