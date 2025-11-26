import React from "react";
import { NEWS } from "../config/lab";

const NewsTicker: React.FC = () => (
  <div className="bg-white border-b border-gray-100 py-3">
    <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 overflow-hidden">
      <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap">
        LATEST NEWS
      </span>
      <div className="flex-1 overflow-hidden relative h-6">
        <div className="animate-slide-up absolute top-0 w-full">
          {NEWS.map((item, idx) => (
            <div
              key={idx}
              className="text-sm text-gray-600 truncate h-6 leading-6"
            >
              <span className="font-mono text-gray-400 mr-2">
                [{item.date}]
              </span>{" "}
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default NewsTicker;

