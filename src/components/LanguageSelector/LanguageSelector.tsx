"use client";

import zustandStore from "@/src/store/zustandStore";

type Language = "Korean" | "English";

function LanguageSelector() {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const setSelectedLanguage = zustandStore((state) => state.setSelectedLanguage);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    console.log("현재 선택된 언어:", language);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex gap-4 py-4 px-12 justify-end bg-linear-to-b from-black/50 to-black/0 select-none">
      <button
        onClick={() => handleLanguageChange("Korean")}
        className={`transition-colors cursor-pointer text-xs
          ${selectedLanguage === "Korean" ? " text-gray-300 font-semibold" : "text-gray-400 hover:text-gray-200"}
          `}
      >
        한국어
      </button>
      <button
        onClick={() => handleLanguageChange("English")}
        className={`transition-colors cursor-pointer text-xs
          ${selectedLanguage === "English" ? " text-gray-300 font-semibold" : "text-gray-400 hover:text-gray-200"}
          `}
      >
        English
      </button>
    </div>
  );
}

export default LanguageSelector;
