"use client";
import { useState } from "react";
import { NavigationMenu } from "@/_components";

const Aside = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleAside = () => {
    setIsExpanded(!isExpanded);
  };

  const shadowClasses = `fixed inset-0 bg-black transition-opacity duration-900 ${
    isExpanded
      ? "opacity-25 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`;

  const asideClasses = `fixed  left-0 h-full bg-[#002349]  transform transition-all duration-500 ${
    isExpanded ? "translate-x-0 w-[260px]" : "translate-x-0 w-20"
  }`;
  // TODO: Change hex color to color config when it will be ready
  return (
    <div className="relative w-20 z-[999] ">
      <div className={shadowClasses} />

      {/* Асайд */}
      <div className={asideClasses}>
        <button
          onClick={toggleAside}
          className="absolute top-[122PX] right-[-1rem] bg-blue-700 text-white p-2 rounded-full shadow-md"
        >
          {isExpanded ? "Close" : "Open"}
        </button>

        {/* Контент асайда */}
        <div className="p-4 pt-24 h-full">
          {isExpanded ? (
            <NavigationMenu />
          ) : (
            <p className="text-center">Icon</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aside;
