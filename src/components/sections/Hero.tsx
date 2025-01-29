"use client";

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: Github,
    label: "GitHub",
    color: "gray"
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    label: "LinkedIn",
    color: "blue"
  },
  {
    href: "mailto:your.email@example.com",
    icon: Mail,
    label: "Email",
    color: "red"
  }
];

const Hero = () => {
  return (
    <div className="w-full bg-[#E9E8F5]">
      <section id="home" className="min-h-screen">
        <div className="container mx-auto px-4 max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 min-h-screen">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              안녕하세요! 👋
              <br />
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
                노코드 개발자
              </span>
              <br />
              잼업입니다.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              사용자 경험을 중시하는 웹 개발자로서, <br />
              아름답고 효율적인 웹사이트를 만드는 것을 좋아합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                연락하기
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <div className="flex gap-4 justify-center">
                {socialLinks.map(({ href, icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-${color}-100 rounded-full hover:bg-${color}-200 transition-colors`}
                    aria-label={label}
                  >
                    <Icon className={`w-5 h-5 text-${color}-600`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-lg lg:max-w-xl aspect-square">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-sm font-medium text-gray-600">
                현재 활발히 구직중입니다! 👨‍��
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;