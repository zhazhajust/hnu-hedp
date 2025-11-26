import React from "react";
import { GraduationCap, Mail } from "lucide-react";
import { LAB_INFO } from "../config/lab";

const JoinUs: React.FC = () => (
  <section
    id="join"
    className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">加入我们</h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            我们长期招收对人工智能、机器人技术感兴趣的
            <strong>博士生、硕士生及本科实习生</strong>。
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
                <p className="text-blue-100 mb-2">
                  请发送简历、成绩单及代表作至：
                </p>
                <a
                  href={`mailto:${LAB_INFO.contactEmail}`}
                  className="text-2xl font-mono font-bold text白 bg-blue-600/50 px-4 py-2 rounded-lg hover:bg-blue-600 transition inline-block"
                >
                  {LAB_INFO.contactEmail}
                </a>
                <p className="text-xs text-blue-300 mt-2">
                  邮件标题请注明：[申请类型] 姓名 - 学校 - 专业
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">🎓 博士研究生</h3>
              <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded">
                名额开放
              </span>
            </div>
            <p className="text-sm text-blue-100">
              致力于培养具有国际视野的学术新星，提供全额奖学金及海外联培机会。
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">📚 硕士研究生</h3>
              <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded">
                每年9月推免
              </span>
            </div>
            <p className="text-sm text-blue-100">
              注重科研与工程实践能力的双重培养，毕业去向包括互联网大厂核心算法岗及海外深造。
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border白/10 hover:bg-white/20 transition">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">💻 本科实习生</h3>
              <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">
                长期开放
              </span>
            </div>
            <p className="text-sm text-blue-100">
              欢迎大二、大三优秀本科生加入，根据兴趣分配导师进行一对一指导。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default JoinUs;

