"use client";

import { 
    Code2, 
    Layout,
    Database,
    Palette,
    GitBranch,
    Terminal,
    Globe,
    Cpu
  } from 'lucide-react';
  
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      color: "blue",
      skills: [
        { name: "React/Next.js", level: 90, description: "SPA, SSR, CSR 개발 경험" },
        { name: "TypeScript", level: 85, description: "타입 안정성과 개발 생산성 향상" },
        { name: "HTML5/CSS3", level: 95, description: "웹 표준, 반응형 디자인" },
        { name: "JavaScript", level: 90, description: "ES6+, 비동기 프로그래밍" }
      ]
    },
    {
      title: "UI/UX & Design",
      icon: Palette,
      color: "purple",
      skills: [
        { name: "Tailwind CSS", level: 90, description: "유틸리티 기반 스타일링" },
        { name: "Figma", level: 80, description: "디자인 시스템 구축" },
        { name: "Responsive Design", level: 85, description: "모바일 퍼스트 접근" }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "green",
      skills: [
        { name: "Node.js", level: 75, description: "RESTful API 개발" },
        { name: "MongoDB", level: 70, description: "NoSQL 데이터베이스 활용" },
        { name: "Firebase", level: 80, description: "서버리스 아키텍처" }
      ]
    }
  ];
  
  const additionalSkills = [
    {
      title: "Version Control",
      icon: <GitBranch className="w-5 h-5 text-gray-600" />,
      description: "Git, GitHub"
    },
    {
      title: "Development Tools",
      icon: <Terminal className="w-5 h-5 text-gray-600" />,
      description: "VS Code, Webpack, ESLint"
    },
    {
      title: "Languages",
      icon: <Globe className="w-5 h-5 text-gray-600" />,
      description: "한국어(모국어), English(비즈니스)"
    },
    {
      title: "Computer Science",
      icon: <Cpu className="w-5 h-5 text-gray-600" />,
      description: "자료구조, 알고리즘, 운영체제"
    }
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Code2 className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
  
          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-6">
                  <category.icon className={`w-5 h-5 text-${category.color}-600`} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div 
                          className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
  
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    {skill.icon}
                    <h4 className="font-medium">{skill.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;