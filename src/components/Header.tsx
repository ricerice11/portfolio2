"use client";

import { Home, User, Star, Trophy, Mail } from "lucide-react";

const menuItems = [
  {
    title: "Home",
    href: "#home",
    icon: Home,
    style: {
      wrapper: "p-2 bg-blue-100 rounded-lg",
      icon: "w-5 h-5 text-blue-600"
    }
  },
  {
    title: "About",
    href: "#about",
    icon: User,
    style: {
      wrapper: "p-2 bg-purple-100 rounded-lg",
      icon: "w-5 h-5 text-purple-600"
    }
  },
  {
    title: "Projects",
    href: "#projects",
    icon: Star,
    style: {
      wrapper: "p-2 bg-pink-100 rounded-lg",
      icon: "w-5 h-5 text-pink-600"
    }
  },
  {
    title: "Skills",
    href: "#skills",
    icon: Trophy,
    style: {
      wrapper: "p-2 bg-amber-100 rounded-lg",
      icon: "w-5 h-5 text-amber-600"
    }
  },
  {
    title: "Contact",
    href: "#contact",
    icon: Mail,
    style: {
      wrapper: "p-2 bg-green-100 rounded-lg",
      icon: "w-5 h-5 text-green-600"
    }
  }
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-violet-100 rounded-lg">
              <Star className="w-5 h-5 text-violet-600" />
            </div>
            <span className="font-semibold text-lg">Portfolio</span>
          </div>
          
          <div className="flex items-center gap-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className={item.style.wrapper}>
                  <item.icon className={item.style.icon} />
                </div>
                <span className="text-sm">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 