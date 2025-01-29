"use client";

import { 
    Briefcase, 
    GraduationCap,
    Target,
    Heart,
    Coffee
  } from 'lucide-react';
  
  const experiences = [
    {
      title: "프론트엔드 개발자",
      company: "ABC Tech",
      period: "2021 - 현재",
      description: "React와 TypeScript를 활용한 웹 애플리케이션 개발",
      icon: Briefcase,
      color: "blue"
    },
    {
      title: "웹 개발자 인턴",
      company: "XYZ Solutions",
      period: "2020 - 2021",
      description: "JavaScript와 HTML/CSS를 활용한 웹사이트 개발",
      icon: Briefcase,
      color: "green"
    }
  ];
  
  const education = [
    {
      degree: "컴퓨터공학 학사",
      school: "서울대학교",
      period: "2016 - 2020",
      description: "웹 개발 및 소프트웨어 공학 전공",
      icon: GraduationCap,
      color: "purple"
    }
  ];
  
  const values = [
    {
      title: "사용자 중심 개발",
      description: "사용자의 니즈를 최우선으로 생각하며, 직관적이고 효율적인 UI/UX를 구현합니다.",
      icon: Heart,
      color: "rose"
    },
    {
      title: "지속적인 학습",
      description: "새로운 기술과 트렌드를 꾸준히 학습하며, 더 나은 개발자가 되기 위해 노력합니다.",
      icon: Target,
      color: "amber"
    },
    {
      title: "협업과 소통",
      description: "팀원들과의 원활한 소통과 협업을 통해 더 나은 결과물을 만들어냅니다.",
      icon: Coffee,
      color: "purple"
    }
  ];
  
  const About = () => {
    return (
      <div className="w-full bg-[#E9E8F5]">
        <section id="about" className="py-20 w-full">
          <div className="container mx-auto px-4 max-w-[1240px]">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {/* Experience Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">경력</h3>
                  <div className="space-y-4">
                    {experiences.map((exp, index) => (
                      <div key={index} className="flex gap-4">
                        <div className={`p-2 bg-${exp.color}-100 rounded-lg h-fit`}>
                          <exp.icon className={`w-5 h-5 text-${exp.color}-600`} />
                        </div>
                        <div>
                          <h4 className="font-semibold">{exp.title}</h4>
                          <p className="text-gray-600">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.period}</p>
                          <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
  
                {/* Education Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">학력</h3>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={index} className="flex gap-4">
                        <div className={`p-2 bg-${edu.color}-100 rounded-lg h-fit`}>
                          <edu.icon className={`w-5 h-5 text-${edu.color}-600`} />
                        </div>
                        <div>
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <p className="text-gray-600">{edu.school}</p>
                          <p className="text-sm text-gray-500">{edu.period}</p>
                          <p className="text-sm text-gray-600 mt-1">{edu.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
  
              {/* Values Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6">개발 가치관</h3>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`p-2 bg-${value.color}-100 rounded-lg`}>
                        <value.icon className={`w-5 h-5 text-${value.color}-600`} />
                      </div>
                      <div>
                        <h4 className="font-semibold">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;