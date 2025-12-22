"use client";

import {memo} from "react";
import zustandStore from "@/src/store/zustandStore";
import {nanumGothic} from "@/src/fonts/Fonts";

function NavigationBar() {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const currentSectionIndex = zustandStore((state) => state.currentSectionIndex);
  const setCurrentSectionIndex = zustandStore((state) => state.setCurrentSectionIndex);

  const handleNavigationClick = (index: number) => {
    setCurrentSectionIndex(index);
  };

  const generateNavigationOptionClassName = (currentIndex: number) =>
    `${
      currentSectionIndex === currentIndex ? "text-white font-bold" : "text-gray-400 font-semibold"
    } cursor-pointer select-none 
    ${nanumGothic.className} `;

  return (
    <>
      {/* 고정된 가로선 - 하단 */}
      <div className="absolute bottom-[14dvh] left-1/2 -translate-x-1/2 w-[80%] h-px bg-gray-100 z-30" />

      <div
        className="absolute bottom-[calc(14dvh-36px)] left-1/2 -translate-x-1/2 z-50 flex justify-center select-none
        flex-nowrap whitespace-nowrap md:gap-30 sm:gap-25 gap-8 md:pr-9 md:text-[13px] text-xs "
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
    </>
  );
}

export default memo(NavigationBar);
