import React from "react";
import { Users } from "lucide-react";
import { TEAM } from "../config/lab";
import SectionTitle from "./SectionTitle";

const Team: React.FC = () => (
  <section id="team" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle
        title="团队成员"
        subtitle="我们的力量来自于多元化且充满活力的团队。"
      />

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
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
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

export default Team;

