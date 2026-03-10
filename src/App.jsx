import React, { useState, useEffect, useRef } from "react";
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
  FaChess
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
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14">
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`nav-link ${
                activeSection === link.toLowerCase() ? "active" : "text-white/60"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="mailto:sirodaniel48@gmail.com"
          className="hidden md:flex items-center gap-2 text-white/60 text-sm hover:text-accent-cyan transition-colors"
        >
          <FaPhone className="text-xs" />
          sirodaniel48@gmail.com
        </a>
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
        <div className="flex items-center gap-2 text-sm text-white/80">
          <span className="text-accent-cyan text-xs">{icon}</span>
          {name}
        </div>
        <span className="text-xs text-white/40">{pct}%</span>
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
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/95 to-dark-900/40 z-10" />
        <img
          src={heroWorkspaceImg}
          alt="Workspace"
          className="absolute right-0 top-0 h-full w-3/5 object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl">
          <p className="text-white/50 text-lg font-heading tracking-widest mb-2 animate-fade-in">
            DANIEL
          </p>
          <h1 className="font-heading font-black text-7xl md:text-8xl lg:text-9xl leading-none mb-2 animate-slide-right">
            SIRO
          </h1>
          <div className="flex items-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="h-px w-10 bg-accent-cyan" />
            <span className="text-accent-cyan font-heading text-sm tracking-[0.3em] uppercase">
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
    <section id="about" className="relative min-h-screen bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left — Text */}
        <div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-4 tracking-tight">
            ABOUT
          </h2>
          <a
            href="mailto:sirodaniel48@gmail.com"
            className="text-white/40 text-sm hover:text-accent-cyan transition-colors mb-8 inline-block"
          >
            sirodaniel48@gmail.com
          </a>

          <p className="text-white/60 leading-relaxed text-[15px] mb-10 max-w-lg">
            Software Developer with a passion for building impactful digital solutions.
            I blend my background in architecture with technology to create innovative
            web platforms, AI-powered tools, and full-stack applications. I specialize
            in React, Next.js, Django, and Python — with experience delivering end-to-end
            projects from concept to deployment. My greatest strength is creative
            problem-solving, which enables me to build streamlined, user-centric products.
          </p>

          <div className="flex items-center gap-2 text-white/40 text-sm">
            <FaMapMarkerAlt className="text-accent-cyan text-xs" />
            <span>Kisii, Kenya</span>
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent-cyan/20 to-transparent rounded-lg blur-sm" />
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
    <section id="resume" className="relative bg-dark-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28">
        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 text-white">
              Software Skills
            </h3>
            {softwareSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 150} />
            ))}

            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mt-12 mb-6 text-white">
              Languages
            </h3>
            {languages.map((l) => (
              <div key={l.name} className="flex justify-between text-sm text-white/60 mb-3">
                <span>{l.name}</span>
                <span className="text-white/30">{l.level}</span>
              </div>
            ))}

            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mt-12 mb-6 text-white">
              Personal Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalSkills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs border border-white/10 text-white/50 rounded-full hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 text-white">
              Experience
            </h3>
            <div className="space-y-7">
              {experiences.map((e) => (
                <div key={e.company} className="flex gap-4">
                  <div className="flex flex-col items-center pt-1.5">
                    <div className="timeline-dot" />
                    <div className="w-px flex-1 bg-white/5 mt-1" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wide">
                      {e.company}
                    </h4>
                    <p className="text-xs text-accent-cyan mb-1">{e.role}</p>
                    <p className="text-xs text-white/40 leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mt-12 mb-6 text-white">
              Education
            </h3>
            {education.map((ed) => (
              <div key={ed.degree} className="flex gap-4">
                <div className="pt-1.5">
                  <FaGraduationCap className="text-accent-cyan text-sm" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-white">
                    {ed.degree}
                  </h4>
                  <p className="text-xs text-white/40">{ed.school}</p>
                  <p className="text-xs text-white/30 mt-1">{ed.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-8 text-white">
              What Can I Do?
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {whatCanIDo.map((item) => (
                <div
                  key={item}
                  className="text-xs text-white/50 border-l-2 border-accent-cyan/30 pl-3 py-1 hover:text-white/80 hover:border-accent-cyan transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>

            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-6 text-white">
              Design Skills
            </h3>
            <ul className="space-y-2 mb-10">
              {designSkills.map((ds) => (
                <li key={ds} className="text-xs text-white/50 leading-relaxed">
                  {ds}
                </li>
              ))}
            </ul>

            <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-6 text-white">
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((h) => (
                <div key={h.name} className="flex flex-col items-center gap-2">
                  <div className="hobby-circle">{h.icon}</div>
                  <span className="text-xs text-white/40">{h.name}</span>
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
    <section id="portfolio" className="relative bg-dark-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28">
        <h2 className="font-heading font-bold text-5xl md:text-6xl mb-16 tracking-tight">
          PORTFOLIO
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-dark-700 rounded-lg overflow-hidden border border-white/5
                         hover:border-accent-cyan/30 transition-all duration-500"
            >
              <div className="p-8">
                <h3 className="font-heading font-semibold text-xl text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">
                  {p.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs text-accent-cyan/80 group-hover:text-accent-cyan tracking-widest uppercase">
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
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 via-transparent to-accent-cyan/0 group-hover:from-accent-cyan/5 group-hover:to-accent-cyan/5 transition-all duration-500 pointer-events-none" />
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
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-2">Let's Connect</h3>
            <p className="text-white/40 text-sm">
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

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
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
    <>
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <PortfolioSection />
      <FooterContact />
    </>
  );
}
