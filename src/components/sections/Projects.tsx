"use client";

import { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, Zap } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "포트폴리오 웹사이트",
    description: "Next.js와 Tailwind CSS를 활용한 반응형 포트폴리오 웹사이트",
    image: "/projects/project1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com"
    },
    highlights: [
      "서버 사이드 렌더링으로 최적화된 성능",
      "반응형 디자인으로 모든 디바이스 지원",
      "모던한 UI/UX 디자인"
    ]
  },
  {
    title: "SNS 클론 프로젝트",
    description: "React와 Firebase를 활용한 실시간 소셜 네트워크 서비스",
    image: "/projects/project2.jpg",
    tags: ["React", "Firebase", "Styled Components", "Redux"],
    links: {
      github: "https://github.com/yourusername/sns-clone",
      live: "https://your-sns.com"
    },
    highlights: [
      "실시간 데이터 동기화",
      "사용자 인증 및 권한 관리",
      "이미지 업로드 및 공유 기능"
    ]
  }
];

const Projects = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // 또는 로딩 상태를 보여줄 수 있습니다
  }

  return (
    <div className="w-full bg-gray-50">
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;