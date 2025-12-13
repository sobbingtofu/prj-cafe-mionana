"use client";

import zustandStore from "@/src/store/zustandStore";

function NavigationBar() {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const currentSectionIndex = zustandStore((state) => state.currentSectionIndex);
  const setCurrentSectionIndex = zustandStore((state) => state.setCurrentSectionIndex);

  /** 섹션 변경 */
  const handleNavigationClick = (index: number) => {
    setCurrentSectionIndex(index);
  };

  const generateNavigationOptionClassName = (currentIndex: number) =>
    `${currentSectionIndex === currentIndex ? "text-white" : "text-gray-400"} cursor-pointer`;

  return (
    <div className="w-full fixed bottom-0 left-0 z-50 flex gap-20 mb-12 justify-center pr-10">
      <div className={generateNavigationOptionClassName(0)} onClick={() => handleNavigationClick(0)}>
        {selectedLanguage === "Korean" ? "미오앤나나" : "Home"}
      </div>
      <div className={generateNavigationOptionClassName(1)} onClick={() => handleNavigationClick(1)}>
        {selectedLanguage === "Korean" ? "메뉴소개" : "Menu"}
      </div>
      <div className={generateNavigationOptionClassName(2)} onClick={() => handleNavigationClick(2)}>
        {selectedLanguage === "Korean" ? "위치안내" : "Location"}
      </div>
    </div>
  );
}

export default NavigationBar;
