import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

// Import project images
import quickdropImg from "./assets/images/quickdrop.jpg";
import luxepropertiesImg from "./assets/images/luxeproperties.jpg";
import weatherAppImg from "./assets/images/weatherapp.jpg";
import intellidebtmanagerImg from "./assets/images/intellidebtmanager.jpg";

export default function Portfolio() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 gradient-animate p-8 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-32">
        <div className="text-white text-xl font-light">Daniel Siro</div>
        <div className="space-x-6">
          <Button 
            variant="outline" 
            className="border-white text-purple-600 hover:bg-white/10"
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-purple-600 hover:bg-white/10"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-white mb-32">
        <h1 className="text-[120px] leading-none font-serif mb-8">Hello,<br/>World.</h1>
        <p className="text-xl font-light max-w-2xl">
          👋 My name is Daniel. I'm a Software Developer and a Tech Innovator. It is lovely to meet you. Check out my work below.
        </p>
      </div>

      {/* About Me */}
      <section id="about" className="max-w-4xl mx-auto mb-32 text-white">
        <h2 className="text-4xl font-serif mb-8">About Me</h2>
        <p className="text-xl font-light leading-relaxed">
          I blend my background in architecture with a passion for technology to
          build impactful solutions. From web platforms to AI-powered tools,
          I'm driven by creativity, innovation, and practical problem-solving.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto mb-32">
        <h2 className="text-4xl font-serif text-white mb-16">Projects</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="group">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src={quickdropImg} 
                alt="QuickDrop Preview"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-serif text-white mb-3">QuickDrop</h3>
            <p className="text-white/80 font-light mb-4">
              A crowdsourced delivery platform built with Django and SQLite.
            </p>
            <div className="space-x-4">
              <Button 
                variant="outline" 
                className="border-white text-purple-600 hover:bg-white/10"
                onClick={() => openLink('https://github.com/wannabes48/quickdrop')}
              >
                View Project
              </Button>
            </div>
          </div>

          <div className="group">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src={luxepropertiesImg} 
                alt="Luxe Properties Preview"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-serif text-white mb-3">Luxe Properties</h3>
            <p className="text-white/80 font-light mb-4">
              A Luxury real estate platform built with Django and Next.js.
            </p>
            <div className="space-x-4">
              <Button 
                variant="outline" 
                className="border-white text-purple-600 hover:bg-white/10"
                onClick={() => openLink('https://luxe-estate-platform.vercel.app/')}
              >
                View Project
              </Button>
            </div>
          </div>

          <div className="group">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src={intellidebtmanagerImg} 
                alt="IntelliDebt Manager Preview"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-serif text-white mb-3">IntelliDebt Manager</h3>
            <p className="text-white/80 font-light mb-4">
              A Smart Loan Recovery System-- An end-to-end ML system that predicts loan defaults and creates personalized recovery strategies for borrowers. 
            </p>
            <div className="space-x-4">
              <Button 
                variant="outline" 
                className="border-white text-purple-600 hover:bg-white/10"
                onClick={() => openLink('https://intellidebt-manager.onrender.com/')}
              >
                View Project
              </Button>
            </div>
          </div>

          <div className="group">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src={weatherAppImg} 
                alt="Weather App Preview"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-serif text-white mb-3">Weather App</h3>
            <p className="text-white/80 font-light mb-4">
              A responsive weather application built with React and Tailwind CSS.
            </p>
            <div className="space-x-4">
              <Button 
                variant="outline" 
                className="border-white text-purple-600 hover:bg-white/10"
                onClick={() => openLink('https://weather-app-sigma-seven-38.vercel.app')}
              >
                View Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto mb-10 text-white">
        <h2 className="text-4xl font-serif mb-8">Let's Connect</h2>
        <p className="text-xl font-light mb-12">
          Feel free to reach out for collaborations, opportunities, or just to connect!
        </p>
        <div className="space-y-6">
          <Button 
            variant="outline"
            className="border-white text-purple-600 hover:bg-white/10 w-full justify-center"
            onClick={() => window.location.href = 'mailto:sirodaniel48@gmail.com'}
          >
            Email Me
          </Button>
          <Button 
            variant="outline"
            className="border-white text-purple-600 hover:bg-white/10 w-full justify-center"
            onClick={() => openLink('https://github.com/wannabes48')}
          >
            GitHub
          </Button>
          <Button 
            variant="outline"
            className="border-white text-purple-600 hover:bg-white/10 w-full justify-center"
            onClick={() => openLink('https://www.linkedin.com/in/daniel-siro-867715279?utm_source=share_via&utm_content=profile&utm_medium=member_android')}
          >
            LinkedIn
          </Button>
        </div>
      </section>
                 </div>
  );
}
