"use client";
import { useState } from "react";

const Aside = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAside = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative w-20 z-[999] ">
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-900 ${
          isExpanded
            ? "opacity-25 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleAside}
      />

      {/* Асайд */}
      <div
        className={`fixed  left-0 h-full bg-[#D9D9D9]  transform transition-all duration-500 ${
          isExpanded ? "translate-x-0 w-[260px]" : "translate-x-0 w-20"
        }`}
      >
        <button
          onClick={toggleAside}
          className="absolute top-[122PX] right-[-1rem] bg-blue-700 text-white p-2 rounded-full shadow-md"
        >
          {isExpanded ? "Close" : "Open"}
        </button>

        {/* Контент асайда */}
        <div className="p-4">
          {isExpanded ? (
            <p>Wide Aside Content</p>
          ) : (
            <p className="text-center">Icon</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aside;
