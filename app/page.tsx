"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, GraduationCap, 
  Microscope, Atom, BookOpen, Mail, 
  MapPin, Globe, Users, Award 
} from 'lucide-react';

// --- 模拟数据配置 (实际使用时可替换) ---

const LAB_INFO = {
  name: "智能感知与未来计算实验室",
  englishName: "Intelligent Sensing & Future Computing Lab",
  university: "某某知名大学",
  slogan: "探索人工智能与物理世界的边界",
  description: "我们需要对科研充满热情、渴望改变世界的你。在这里，我们将一起攻克具身智能、计算机视觉与多模态学习的前沿难题。",
  contactEmail: "professor@university.edu.cn",
  address: "科技楼 A 区 502 室"
};

const RESEARCH_AREAS = [
  {
    title: "具身智能 (Embodied AI)",
    icon: <Atom className="w-8 h-8 text-blue-500" />,
    desc: "研究机器人如何在复杂的物理环境中进行感知、规划与决策，实现从模拟到现实的迁移。"
  },
  {
    title: "多模态大模型",
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    desc: "探索视觉、语言与音频的联合表征学习，构建下一代通用的多模态理解与生成模型。"
  },
  {
    title: "神经渲染与3D视觉",
    icon: <Microscope className="w-8 h-8 text-teal-500" />,
    desc: "基于NeRF与Gaussian Splatting的三维场景重建与生成技术，应用于VR/AR及自动驾驶。"
  }
];

const NEWS = [
  { date: "2024-05", content: "祝贺课题组论文被 CVPR 2024 接收 (Highlight)！" },
  { date: "2024-03", content: "欢迎张三博士后加入团队！" },
  { date: "2024-01", content: "实验室获批国家自然科学基金重点项目资助。" }
];

const PUBLICATIONS = [
  {
    title: "EmbodiedGPT: A Foundation Model for Robot Learning",
    authors: "San Zhang, Si Li, Professor Wang*",
    venue: "CVPR 2024",
    link: "#"
  },
  {
    title: "Neural Field Scene Reconstruction in Wild",
    authors: "Wu Wang, Liu Zhao, Professor Wang*",
    venue: "ICCV 2023 (Oral)",
    link: "#"
  },
  {
    title: "A Survey on Multimodal Large Language Models",
    authors: "Team Members",
    venue: "TPAMI 2023",
    link: "#"
  }
];

const TEAM = [
  { name: "王教授", role: "PI / 博士生导师", desc: "国家杰青，研究方向为计算机视觉与机器学习。", image: "null" },
  { name: "李老师", role: "副研究员", desc: "主要负责具身智能方向指导。", image: "null" },
  { name: "张三", role: "博士生 (2022级)", desc: "关注 3D 生成领域。", image: "null" },
  { name: "李四", role: "硕士生 (2023级)", desc: "关注多模态大模型。", image: "null" },
];

// --- 组件部分 ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "首页", href: "#home" },
    { name: "研究方向", href: "#research" },
    { name: "团队成员", href: "#team" },
    { name: "科研成果", href: "#publications" },
    { name: "招生信息", href: "#join", highlight: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">Lab</div>
            <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-gray-900 lg:text-white'}`}>
              {LAB_INFO.englishName}
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`${link.highlight 
                  ? 'px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition' 
                  : `hover:text-blue-500 transition ${scrolled ? 'text-gray-700' : 'text-gray-100'}`
                } font-medium`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-900' : 'text-gray-900 lg:text-white'}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${link.highlight ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden pt-20">
    {/* Abstract Background */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>
    
    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm backdrop-blur-sm">
        👋 欢迎来到 {LAB_INFO.university}
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
        {LAB_INFO.name}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
        {LAB_INFO.slogan}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#join" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition hover:shadow-lg flex items-center justify-center gap-2">
          加入我们 <ChevronRight size={20} />
        </a>
        <a href="#research" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center justify-center">
          了解研究
        </a>
      </div>
    </div>
  </section>
);

const NewsTicker = () => (
  <div className="bg-white border-b border-gray-100 py-3">
    <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 overflow-hidden">
      <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap">LATEST NEWS</span>
      <div className="flex-1 overflow-hidden relative h-6">
        <div className="animate-slide-up absolute top-0 w-full">
           {NEWS.map((item, idx) => (
             <div key={idx} className="text-sm text-gray-600 truncate h-6 leading-6">
               <span className="font-mono text-gray-400 mr-2">[{item.date}]</span> {item.content}
             </div>
           ))}
        </div>
      </div>
    </div>
  </div>
);

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Research = () => (
  <section id="research" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="研究方向" subtitle="我们专注于人工智能的前沿领域，致力于解决具有挑战性的科学问题。" />
      
      <div className="grid md:grid-cols-3 gap-8">
        {RESEARCH_AREAS.map((area, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {area.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {area.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="团队成员" subtitle="我们的力量来自于多元化且充满活力的团队。" />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM.map((member, idx) => (
          <div key={idx} className="text-center group">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition"></div>
              {member.image === "null" ? (
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                  <Users size={40} />
                </div>
              ) : (
                <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{member.role}</p>
            <p className="text-sm text-gray-500">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Publications = () => (
  <section id="publications" className="py-24 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <SectionTitle title="精选论文" subtitle="Recent Representative Publications" />
      
      <div className="space-y-6">
        {PUBLICATIONS.map((pub, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-blue-600 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{pub.title}</h4>
              <p className="text-gray-600 mb-2">{pub.authors}</p>
              <div className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-bold">
                {pub.venue}
              </div>
            </div>
            <a href={pub.link} className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 text-sm whitespace-nowrap mt-2 sm:mt-0">
              <BookOpen size={16} /> PDF
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="#" className="inline-flex items-center text-gray-500 hover:text-blue-600 font-medium transition">
          查看全部论文列表 <ChevronRight size={16} />
        </a>
      </div>
    </div>
  </section>
);

const JoinUs = () => (
  <section id="join" className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12"></div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">加入我们</h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            我们长期招收对人工智能、机器人技术感兴趣的**博士生、硕士生及本科实习生**。
            我们提供一流的计算资源（A100/H100集群）、具有竞争力的科研津贴以及与海外顶尖名校交流的机会。
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <GraduationCap className="text-blue-300" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">招生要求</h4>
                <ul className="text-blue-100 text-sm space-y-1 list-disc list-inside">
                  <li>计算机、数学、自动化等相关专业</li>
                  <li>扎实的数学与编程基础 (Python/C++)</li>
                  <li>有强烈的自驱力和好奇心</li>
                  <li>有顶会发表记录或ACM获奖者优先</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Mail className="text-blue-300" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">联系方式</h4>
                <p className="text-blue-100 mb-2">请发送简历、成绩单及代表作至：</p>
                <a href={`mailto:${LAB_INFO.contactEmail}`} className="text-2xl font-mono font-bold text-white bg-blue-600/50 px-4 py-2 rounded-lg hover:bg-blue-600 transition inline-block">
                  {LAB_INFO.contactEmail}
                </a>
                <p className="text-xs text-blue-300 mt-2">邮件标题请注明：[申请类型] 姓名 - 学校 - 专业</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ / Info Cards */}
        <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">🎓 博士研究生</h3>
                    <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded">名额开放</span>
                </div>
                <p className="text-sm text-blue-100">致力于培养具有国际视野的学术新星，提供全额奖学金及海外联培机会。</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">📚 硕士研究生</h3>
                    <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded">每年9月推免</span>
                </div>
                <p className="text-sm text-blue-100">注重科研与工程实践能力的双重培养，毕业去向包括互联网大厂核心算法岗及海外深造。</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">💻 本科实习生</h3>
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">长期开放</span>
                </div>
                <p className="text-sm text-blue-100">欢迎大二、大三优秀本科生加入，根据兴趣分配导师进行一对一指导。</p>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-white text-xl font-bold mb-4">{LAB_INFO.name}</h2>
        <p className="text-sm leading-relaxed max-w-sm mb-6">
          {LAB_INFO.description}
        </p>
        <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"><Globe size={16}/></div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"><Mail size={16}/></div>
        </div>
      </div>
      
      <div>
        <h3 className="text-white font-bold mb-4">快速链接</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#home" className="hover:text-blue-500 transition">首页</a></li>
          <li><a href="#research" className="hover:text-blue-500 transition">研究方向</a></li>
          <li><a href="#publications" className="hover:text-blue-500 transition">发表论文</a></li>
          <li><a href="#join" className="hover:text-blue-500 transition">加入我们</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-bold mb-4">联系我们</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2"><MapPin size={16}/> {LAB_INFO.address}</li>
          <li className="flex items-center gap-2"><Mail size={16}/> {LAB_INFO.contactEmail}</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-xs text-center">
      &copy; {new Date().getFullYear()} {LAB_INFO.englishName}. All rights reserved.
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Hero />
      <NewsTicker />
      <Research />
      <Team />
      <Publications />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default App;
