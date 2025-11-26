import { Atom, Globe, Microscope } from "lucide-react";

export const LAB_INFO = {
  name: "智能感知与未来计算实验室",
  englishName: "Intelligent Sensing & Future Computing Lab",
  university: "某某知名大学",
  slogan: "探索人工智能与物理世界的边界",
  description:
    "我们需要对科研充满热情、渴望改变世界的你。在这里，我们将一起攻克具身智能、计算机视觉与多模态学习的前沿难题。",
  contactEmail: "professor@university.edu.cn",
  address: "科技楼 A 区 502 室",
};

export const RESEARCH_AREAS = [
  {
    title: "具身智能 (Embodied AI)",
    icon: <Atom className="w-8 h-8 text-blue-500" />,
    desc: "研究机器人如何在复杂的物理环境中进行感知、规划与决策，实现从模拟到现实的迁移。",
  },
  {
    title: "多模态大模型",
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    desc: "探索视觉、语言与音频的联合表征学习，构建下一代通用的多模态理解与生成模型。",
  },
  {
    title: "神经渲染与3D视觉",
    icon: <Microscope className="w-8 h-8 text-teal-500" />,
    desc: "基于NeRF与Gaussian Splatting的三维场景重建与生成技术，应用于VR/AR及自动驾驶。",
  },
];

export const NEWS = [
  {
    date: "2024-05",
    content: "祝贺课题组论文被 CVPR 2024 接收 (Highlight)！",
  },
  { date: "2024-03", content: "欢迎张三博士后加入团队！" },
  { date: "2024-01", content: "实验室获批国家自然科学基金重点项目资助。" },
];

export const PUBLICATIONS = [
  {
    title: "EmbodiedGPT: A Foundation Model for Robot Learning",
    authors: "San Zhang, Si Li, Professor Wang*",
    venue: "CVPR 2024",
    link: "#",
  },
  {
    title: "Neural Field Scene Reconstruction in Wild",
    authors: "Wu Wang, Liu Zhao, Professor Wang*",
    venue: "ICCV 2023 (Oral)",
    link: "#",
  },
  {
    title: "A Survey on Multimodal Large Language Models",
    authors: "Team Members",
    venue: "TPAMI 2023",
    link: "#",
  },
];

export const TEAM = [
  {
    name: "王教授",
    role: "PI / 博士生导师",
    desc: "国家杰青，研究方向为计算机视觉与机器学习。",
    image: "null",
  },
  {
    name: "李老师",
    role: "副研究员",
    desc: "主要负责具身智能方向指导。",
    image: "null",
  },
  {
    name: "张三",
    role: "博士生 (2022级)",
    desc: "关注 3D 生成领域。",
    image: "null",
  },
  {
    name: "李四",
    role: "硕士生 (2023级)",
    desc: "关注多模态大模型。",
    image: "null",
  },
];

