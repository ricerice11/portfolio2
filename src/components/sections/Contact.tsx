"use client";

import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  Calendar
} from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: "이메일",
    content: "jamup2025@gmail.com",
    color: "indigo"
  },
  {
    icon: Phone,
    title: "전화번호",
    content: "010-5939-1098",
    color: "emerald"
  },
  {
    icon: MapPin,
    title: "위치",
    content: "강원도 횡성군",
    color: "rose"
  },
  {
    icon: Clock,
    title: "응답시간",
    content: "24시간 이내",
    color: "violet"
  }
];

const getIconStyles = (color: string) => {
  const styles = {
    indigo: "bg-indigo-100 text-indigo-600",
    emerald: "bg-emerald-100 text-emerald-600",
    rose: "bg-rose-100 text-rose-600",
    violet: "bg-violet-100 text-violet-600"
  };
  return styles[color as keyof typeof styles] || styles.indigo;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 여기에 실제 폼 제출 로직 구현
      await new Promise(resolve => setTimeout(resolve, 1000)); // 임시 지연
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="p-2 bg-amber-100 rounded-lg">
            <Mail className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3"
                >
                  <div className={`p-2 rounded-lg ${getIconStyles(info.color)}`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg mt-8">
              <h4 className="font-medium flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                근무 시간
              </h4>
              <p className="text-gray-600">
                평일: 오전 9시 - 오후 6시
                <br />
                주말: 이메일로 연락 부탁드립니다
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">메시지 보내기</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  제목
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2
                  ${isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700'}`}
              >
                {isSubmitting ? (
                  '전송중...'
                ) : (
                  <>
                    메시지 보내기
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">메시지가 성공적으로 전송되었습니다!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">메시지 전송에 실패했습니다. 다시 시도해주세요.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;