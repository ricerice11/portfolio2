"use client";

import Image from "next/image";
import { 
  HomeIcon, UserCircle, Code2, Mail, 
  Github, Linkedin, Globe2, Trophy, 
  Rocket, Star 
} from "lucide-react";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const navigation = [
  { name: 'Home', href: '#home', icon: HomeIcon, color: 'blue' },
  { name: 'About', href: '#about', icon: UserCircle, color: 'purple' },
  { name: 'Projects', href: '#projects', icon: Star, color: 'green' },
  { name: 'Skills', href: '#skills', icon: Trophy, color: 'amber' },
  { name: 'Contact', href: '#contact', icon: Mail, color: 'rose' },
];

const socialLinks = [
  { href: 'https://github.com/yourusername', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/yourusername', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:your.email@example.com', icon: Mail, label: 'Email' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <nav className="container mx-auto px-4 py-4 max-w-[1240px]">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Rocket className="w-6 h-6 text-indigo-500" />
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                Portfolio
              </span>
            </h1>
            
            <div className="flex gap-8">
              {navigation.map(({ name, href, icon: Icon, color }) => (
                <a
                  key={name}
                  href={href}
                  className={`group flex flex-col items-center gap-1 hover:text-${color}-500 transition-colors`}
                >
                  <Icon className={`w-5 h-5 text-${color}-500 group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="mx-auto max-w-[1240px] pt-20">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">Seoul, South Korea</span>
            </div>
            
            <div className="flex gap-6">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
