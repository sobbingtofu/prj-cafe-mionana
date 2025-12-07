"use client";

import {useState} from "react";

type Language = "Korean" | "English";

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("Korean");

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    console.log("현재 선택된 언어:", language);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex gap-4 bg-black/25 py-2 px-4 justify-end">
      <button
        onClick={() => handleLanguageChange("Korean")}
        className={`px-4 py-2 rounded transition-colors cursor-pointer
          ${selectedLanguage === "Korean" ? " text-white font-semibold" : " text-gray-700 hover:bg-gray-300"}
          `}
      >
        한국어
      </button>
      <button
        onClick={() => handleLanguageChange("English")}
        className={`px-4 py-2 rounded transition-colors cursor-pointer
          ${selectedLanguage === "English" ? " text-white font-semibold" : " text-gray-400 hover:bg-gray-300"}
          `}
      >
        English
      </button>
    </div>
  );
}

export default LanguageSelector;
