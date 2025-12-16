"use client";

import {memo} from "react";
import zustandStore from "@/src/store/zustandStore";

function NavigationBar() {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const currentSectionIndex = zustandStore((state) => state.currentSectionIndex);
  const setCurrentSectionIndex = zustandStore((state) => state.setCurrentSectionIndex);

  const handleNavigationClick = (index: number) => {
    setCurrentSectionIndex(index);
  };

  const generateNavigationOptionClassName = (currentIndex: number) =>
    `${currentSectionIndex === currentIndex ? "text-white" : "text-gray-400"} cursor-pointer select-none`;

  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex justify-center select-none
      flex-nowrap whitespace-nowrap md:gap-30 sm:gap-25 gap-20 mb-[60px] md:pr-9 md:text-[13px] text-xs "
    >
      <div className={generateNavigationOptionClassName(0)} onClick={() => handleNavigationClick(0)}>
        {selectedLanguage === "Korean" ? "미오앤나나" : "Mio&Nana"}
      </div>
      <div className={generateNavigationOptionClassName(1)} onClick={() => handleNavigationClick(1)}>
        {selectedLanguage === "Korean" ? "메뉴소개" : "Our Menu"}
      </div>
      <div className={generateNavigationOptionClassName(2)} onClick={() => handleNavigationClick(2)}>
        {selectedLanguage === "Korean" ? "위치안내" : "Location"}
      </div>
      <div className={generateNavigationOptionClassName(3)} onClick={() => handleNavigationClick(3)}>
        {selectedLanguage === "Korean" ? "루프탑" : "Rooftop"}
      </div>
    </div>
  );
}

export default memo(NavigationBar);
