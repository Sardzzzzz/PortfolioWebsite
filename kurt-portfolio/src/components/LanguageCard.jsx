import React from "react";

export default function LanguageCard({ icon, name, colorStart, colorEnd }) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg cursor-default transform transition-transform hover:scale-105`}
      style={{
        background: `linear-gradient(135deg, ${colorStart}, ${colorEnd})`,
        boxShadow: `0 10px 15px -3px ${colorStart}99, 0 4px 6px -2px ${colorEnd}aa`,
      }}
    >
      <div className="text-white mb-4 text-6xl">{icon}</div>
      <h4 className="text-white font-bold text-xl">{name}</h4>
    </div>
  );
}
