import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaPaintBrush,
  FaBookReader,
  FaCamera,
  FaPencilAlt,
  FaPlane,
  FaGraduationCap,
  FaChess,
  FaSun,
  FaMoon,
  FaDownload,
} from "react-icons/fa";
import {
  SiReact,
  SiPython,
  SiDjango,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiGit,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

import heroWorkspaceImg from "./assets/images/hero-workspace.png";
import profilePortraitImg from "./assets/images/profile-portrait.png";

// ---------- Theme Context ---------- //
const ThemeContext = createContext();

function useTheme() {
  return useContext(ThemeContext);
}

// ---------- CV Download ---------- //
function downloadCV() {
  const cvHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Daniel Siro — CV</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Inter:wght@300;400;500&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; color: #1a1a2e; padding: 40px; max-width: 900px; margin: auto; line-height: 1.6; }
    h1 { font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; margin-bottom: 4px; }
    h2 { font-family: 'Poppins', sans-serif; font-size: 14px; color: #0077b6; text-transform: uppercase; letter-spacing: 3px; margin: 28px 0 12px; padding-bottom: 6px; border-bottom: 2px solid #0077b6; }
    h3 { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600; text-transform: uppercase; margin-bottom: 2px; }
    .subtitle { color: #0077b6; font-size: 14px; letter-spacing: 2px; margin-bottom: 8px; }
    .contact { font-size: 12px; color: #555; margin-bottom: 4px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .skill { margin-bottom: 8px; }
    .skill-name { font-size: 12px; display: flex; justify-content: space-between; margin-bottom: 3px; }
    .skill-bar { height: 4px; background: #e0e0e0; border-radius: 2px; }
    .skill-fill { height: 100%; background: linear-gradient(90deg, #0077b6, #00b4d8); border-radius: 2px; }
    .exp-item { margin-bottom: 12px; }
    .exp-company { font-size: 13px; font-weight: 600; text-transform: uppercase; }
    .exp-role { font-size: 11px; color: #0077b6; }
    .exp-desc { font-size: 11px; color: #666; }
    .tag { display: inline-block; font-size: 11px; padding: 3px 10px; border: 1px solid #ddd; border-radius: 12px; margin: 2px 4px 2px 0; color: #555; }
    .lang-item { font-size: 12px; display: flex; justify-content: space-between; margin-bottom: 4px; }
    .service-item { font-size: 12px; color: #555; padding: 3px 0; border-left: 2px solid #00b4d8; padding-left: 10px; margin-bottom: 4px; }
    .design-item { font-size: 12px; color: #555; margin-bottom: 4px; }
    .edu-degree { font-size: 13px; font-weight: 600; }
    .edu-school { font-size: 11px; color: #666; }
    @media print {
      body { padding: 20px; }
    }
  </style>
</head>
<body>
  <h1>DANIEL SIRO</h1>
  <div class="subtitle">Software Developer</div>
  <div class="contact">✉ sirodaniel48@gmail.com &nbsp;|&nbsp; 📍 Kisii, Kenya</div>
  <div class="contact">GitHub: github.com/wannabes48 &nbsp;|&nbsp; LinkedIn: linkedin.com/in/daniel-siro-867715279</div>

  <div class="grid" style="margin-top: 20px;">
    <div>
      <h2>Software Skills</h2>
      ${[
        { name: "React / Next.js", pct: 90 },
        { name: "Python / Django", pct: 88 },
        { name: "JavaScript", pct: 92 },
        { name: "Tailwind CSS", pct: 85 },
        { name: "PostgreSQL", pct: 78 },
      ].map(s => `
        <div class="skill">
          <div class="skill-name"><span>${s.name}</span><span>${s.pct}%</span></div>
          <div class="skill-bar"><div class="skill-fill" style="width:${s.pct}%"></div></div>
        </div>
      `).join("")}

      <h2>Languages</h2>
      ${[
        { name: "English", level: "Fluent" },
        { name: "Swahili", level: "Native" },
        { name: "Spanish", level: "Basic" },
        { name: "Ekegusii", level: "Native" },
      ].map(l => `<div class="lang-item"><span>${l.name}</span><span>${l.level}</span></div>`).join("")}

      <h2>Personal Skills</h2>
      <div>${["Creativity", "Team Work", "Problem Solving", "Communication", "Leadership"].map(s => `<span class="tag">${s}</span>`).join("")}</div>
    </div>

    <div>
      <h2>Experience</h2>
      ${[
        { company: "Freelance", role: "Full Stack Developer", desc: "Building web platforms and AI-powered tools for various clients" },
        { company: "QuickDrop", role: "Lead Developer", desc: "Crowdsourced delivery platform built with Django" },
        { company: "Luxe Properties", role: "Founder and Developer", desc: "Luxury real estate platform with Django & Next.js" },
        { company: "ForeSafe", role: "Founder and Developer", desc: "Vehicle safety & notification system with Next.js" },
      ].map(e => `
        <div class="exp-item">
          <div class="exp-company">${e.company}</div>
          <div class="exp-role">${e.role}</div>
          <div class="exp-desc">${e.desc}</div>
        </div>
      `).join("")}

      <h2>Education</h2>
      <div class="edu-degree">BSc in Computer Science</div>
      <div class="edu-school">Maseno University</div>
      <div class="edu-school">Focus on Full Stack Development, DevOps & AI/ML</div>
    </div>

    <div>
      <h2>What Can I Do?</h2>
      ${["Web Applications", "REST APIs", "Database Design", "AI Integration", "UI / UX Design", "Mobile Apps", "DevOps", "Cloud Computing", "Machine Learning", "Data Science"].map(s => `<div class="service-item">${s}</div>`).join("")}

      <h2>Design Skills</h2>
      ${["Creativity · Planning & Strategy", "UI / UX · Prototyping · Layout", "Responsive Design · Accessibility", "Color Theory · Typography"].map(d => `<div class="design-item">${d}</div>`).join("")}
    </div>
  </div>
</body>
</html>`;

  const blob = new Blob([cvHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  // Open in new window and trigger print for PDF
  const printWindow = window.open(url, "_blank");
  if (printWindow) {
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 500);
    };
  }
}

// ---------- data ---------- //
const navLinks = ["Home", "About", "Resume", "Portfolio"];

const softwareSkills = [
  { name: "React / Next.js", pct: 90, icon: <SiReact /> },
  { name: "Python / Django", pct: 88, icon: <SiPython /> },
  { name: "JavaScript", pct: 92, icon: <SiJavascript /> },
  { name: "Tailwind CSS", pct: 85, icon: <SiTailwindcss /> },
  { name: "PostgreSQL", pct: 78, icon: <SiPostgresql /> },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Swahili", level: "Native" },
  { name: "Spanish", level: "Basic"},
  { name: "Ekegusii", level: "Native"},
];

const personalSkills = [
  "Creativity",
  "Team Work",
  "Problem Solving",
  "Communication",
  "Leadership",
];

const experiences = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    description: "Building web platforms and AI-powered tools for various clients",
  },
  {
    company: "QuickDrop",
    role: "Lead Developer",
    description: "Crowdsourced delivery platform built with Django",
  },
  {
    company: "Luxe Properties",
    role: "Founder and Developer",
    description: "Luxury real estate platform with Django & Next.js",
  },
  {
    company: "ForeSafe",
    role: "Founder and Developer",
    description: "Vehicle safety & notification system with Next.js",
  },
];

const education = [
  {
    degree: "BSc in Computer Science",
    school: "Maseno University",
    detail: "Focus on Full Stack Development, DevOps & AI/ML",
  },
];

const whatCanIDo = [
  "Web Applications",
  "REST APIs",
  "Database Design",
  "AI Integration",
  "UI / UX Design",
  "Mobile Apps",
  "DevOps",
  "Cloud Computing",
  "Machine Learning",
  "Data Science",
];

const designSkills = [
  "Creativity · Planning & Strategy",
  "UI / UX · Prototyping · Layout",
  "Responsive Design · Accessibility",
  "Color Theory · Typography",
];

const hobbies = [
  { name: "Reading", icon: <FaBookReader /> },
  { name: "Photography", icon: <FaCamera /> },
  { name: "Drawing", icon: <FaPencilAlt /> },
  { name: "Travel", icon: <FaPlane /> },
  { name: "Chess", icon: <FaChess /> },
  { name: "Coding", icon: <FaCode /> },
];

const projects = [
  {
    title: "QuickDrop",
    description: "A crowdsourced delivery platform built with Django and SQLite.",
    link: "https://github.com/wannabes48/quickdrop",
    image: null,
  },
  {
    title: "Luxe Properties",
    description: "A luxury real estate platform built with Django and Next.js.",
    link: "https://luxe-estate-platform.vercel.app/",
    image: null,
  },
  {
    title: "IntelliDebt Manager",
    description: "A Smart Loan Recovery System — an end-to-end ML system that predicts loan defaults.",
    link: "https://intellidebt-manager.onrender.com/",
    image: null,
  },
  {
    title: "Weather App",
    description: "A responsive weather application built with React and Tailwind CSS.",
    link: "https://weather-app-sigma-seven-38.vercel.app",
    image: null,
  },
  {
    title: "ForeSafe",
    description: "Vehicle safety & notification system with Next.js.",
    link: "https://foresafe.vercel.app",
    image: null,
  },
];

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/wannabes48", label: "GitHub" },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/daniel-siro-867715279",
    label: "LinkedIn",
  },
  { icon: <FaInstagram />, url: "#", label: "Instagram" },
  { icon: <FaTwitter />, url: "#", label: "Twitter" },
  { icon: <FaWhatsapp />, url: "#", label: "WhatsApp" },
];

// ---------- components ---------- //

function Navbar({ activeSection }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 themed-bg-nav backdrop-blur-md border-b themed-border no-print">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14">
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`nav-link ${
                activeSection === link.toLowerCase() ? "active" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {/* Download CV button */}
          <button
            onClick={downloadCV}
            className="btn-download hidden md:flex"
            aria-label="Download CV"
          >
            <FaDownload className="text-xs" />
            Download CV
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href="mailto:sirodaniel48@gmail.com"
            className="hidden lg:flex items-center gap-2 themed-text-muted text-sm hover:text-[var(--accent)] transition-colors"
          >
            <FaPhone className="text-xs" />
            sirodaniel48@gmail.com
          </a>
        </div>
      </div>
    </nav>
  );
}

function SkillBar({ name, pct, icon, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-5" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2 text-sm themed-text-secondary">
          <span className="text-[var(--accent)] text-xs">{icon}</span>
          {name}
        </div>
        <span className="text-xs themed-text-muted">{pct}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            "--progress-width": `${pct}%`,
            width: visible ? `${pct}%` : "0%",
            transition: visible ? "width 1.5s ease-out" : "none",
          }}
        />
      </div>
    </div>
  );
}

// ---------- sections ---------- //

function HeroSection() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background: theme === "dark"
              ? "linear-gradient(to right, var(--bg-primary), rgba(10,10,15,0.95), rgba(10,10,15,0.4))"
              : "linear-gradient(to right, var(--bg-primary), rgba(248,249,252,0.95), rgba(248,249,252,0.3))"
          }}
        />
        <img
          src={heroWorkspaceImg}
          alt="Workspace"
          className="absolute right-0 top-0 h-full w-3/5 object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl">
          <p className="themed-text-muted text-lg font-heading tracking-widest mb-2 animate-fade-in">
            DANIEL
          </p>
          <h1 className="font-heading font-black text-7xl md:text-8xl lg:text-9xl leading-none mb-2 themed-text-primary animate-slide-right">
            SIRO
          </h1>
          <div className="flex items-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="h-px w-10" style={{ background: "var(--accent)" }} />
            <span className="font-heading text-sm tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>
              Software Developer
            </span>
          </div>

          <div className="flex gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <a href="#resume" className="btn-outline">
              Resume
            </a>
            <a href="#portfolio" className="btn-outline">
              Portfolio
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-5 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative corner bracket */}
      <div className="corner-bracket bottom-right" />
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen themed-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left — Text */}
        <div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-4 tracking-tight themed-text-primary">
            ABOUT
          </h2>
          <a
            href="mailto:sirodaniel48@gmail.com"
            className="themed-text-muted text-sm hover:text-[var(--accent)] transition-colors mb-8 inline-block"
          >
            sirodaniel48@gmail.com
          </a>

          <p className="themed-text-secondary leading-relaxed text-[15px] mb-10 max-w-lg">
            Software Developer with a passion for building impactful digital solutions.
            I blend my background in architecture with technology to create innovative
            web platforms, AI-powered tools, and full-stack applications. I specialize
            in React, Next.js, Django, and Python — with experience delivering end-to-end
            projects from concept to deployment. My greatest strength is creative
            problem-solving, which enables me to build streamlined, user-centric products.
          </p>

          <div className="flex items-center gap-2 themed-text-muted text-sm">
            <FaMapMarkerAlt className="text-[var(--accent)] text-xs" />
            <span>Kisii, Kenya</span>
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg blur-sm" style={{ background: "linear-gradient(to bottom right, rgba(0,180,216,0.2), transparent)" }} />
            <img
              src={profilePortraitImg}
              alt="Daniel Siro"
              className="relative w-80 md:w-96 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="glow-line" />
    </section>
  );
}

function ResumeSection() {
  return (
    <section id="resume" className="relative min-h-screen themed-bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28">
        {/* Download CV inline for mobile */}
        <div className="flex items-center justify-between mb-12 md:hidden">
          <h2 className="font-heading font-bold text-3xl tracking-tight themed-text-primary">RESUME</h2>
          <button onClick={downloadCV} className="btn-download">
            <FaDownload className="text-xs" />
            Download CV
          </button>
        </div>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 themed-text-primary">
              Software Skills
            </h3>
            {softwareSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 150} />
            ))}

            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mt-12 mb-6 themed-text-primary">
              Languages
            </h3>
            {languages.map((l) => (
              <div key={l.name} className="flex justify-between text-sm themed-text-secondary mb-3">
                <span>{l.name}</span>
                <span className="themed-text-muted">{l.level}</span>
              </div>
            ))}

            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mt-12 mb-6 themed-text-primary">
              Personal Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalSkills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs rounded-full transition-colors themed-text-muted hover:text-[var(--accent)]"
                  style={{ border: "1px solid var(--border-hover)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 themed-text-primary">
              Experience
            </h3>
            <div className="space-y-7">
              {experiences.map((e) => (
                <div key={e.company} className="flex gap-4">
                  <div className="flex flex-col items-center pt-1.5">
                    <div className="timeline-dot" />
                    <div className="w-px flex-1 mt-1" style={{ background: "var(--border-color)" }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold themed-text-primary uppercase tracking-wide">
                      {e.company}
                    </h4>
                    <p className="text-xs mb-1" style={{ color: "var(--accent)" }}>{e.role}</p>
                    <p className="text-xs themed-text-muted leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mt-12 mb-6 themed-text-primary">
              Education
            </h3>
            {education.map((ed) => (
              <div key={ed.degree} className="flex gap-4">
                <div className="pt-1.5">
                  <FaGraduationCap className="text-sm" style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold themed-text-primary">
                    {ed.degree}
                  </h4>
                  <p className="text-xs themed-text-muted">{ed.school}</p>
                  <p className="text-xs themed-text-faint mt-1">{ed.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 themed-text-primary">
              What Can I Do?
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {whatCanIDo.map((item) => (
                <div
                  key={item}
                  className="text-xs themed-text-muted py-1 hover:text-[var(--text-secondary)] transition-colors"
                  style={{ borderLeft: "2px solid rgba(0,180,216,0.3)", paddingLeft: "12px" }}
                >
                  {item}
                </div>
              ))}
            </div>

            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-6 themed-text-primary">
              Design Skills
            </h3>
            <ul className="space-y-2 mb-10">
              {designSkills.map((ds) => (
                <li key={ds} className="text-xs themed-text-muted leading-relaxed">
                  {ds}
                </li>
              ))}
            </ul>

            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-6 themed-text-primary">
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {hobbies.map((h) => (
                <div key={h.name} className="flex flex-col items-center gap-2">
                  <div className="hobby-circle">{h.icon}</div>
                  <span className="text-xs themed-text-muted">{h.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glow-line" />
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="relative min-h-screen themed-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28">
        <h2 className="font-heading font-bold text-5xl md:text-6xl mb-16 tracking-tight themed-text-primary">
          PORTFOLIO
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative themed-bg-card rounded-lg overflow-hidden transition-all duration-500"
              style={{ border: "1px solid var(--border-color)" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,180,216,0.3)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border-color)"}
            >
              <div className="p-8">
                <h3 className="font-heading font-semibold text-xl themed-text-primary mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm themed-text-muted leading-relaxed mb-6">
                  {p.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                  View Project
                  <svg
                    className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{ background: "radial-gradient(ellipse at center, rgba(0,180,216,0.04), transparent)" }} />
            </a>
          ))}
        </div>
      </div>

      <div className="glow-line" />
    </section>
  );
}

function FooterContact() {
  return (
    <footer className="themed-bg-primary" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-2 themed-text-primary">Let's Connect</h3>
            <p className="themed-text-muted text-sm">
              Open for collaborations, opportunities, and new ideas.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:sirodaniel48@gmail.com"
              className="btn-outline flex items-center gap-2"
            >
              <FaEnvelope className="text-xs" />
              Email Me
            </a>
            <a
              href="https://github.com/wannabes48"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <FaGithub className="text-xs" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid var(--border-color)" }}>
          <p className="text-xs themed-text-faint">
            © {new Date().getFullYear()} Daniel Siro. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-sm"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- app ---------- //

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => {
    // Check localStorage, default to dark
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme") || "dark";
    }
    return "dark";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("portfolio-theme", next);
      return next;
    });
  };

  // Apply theme class to root element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <PortfolioSection />
      <FooterContact />
    </ThemeContext.Provider>
  );
}
