export interface zustandStoreType {
  selectedLanguage: "Korean" | "English";
  setSelectedLanguage: (language: "Korean" | "English") => void;

  currentSectionIndex: number;
  setCurrentSectionIndex: (index: number) => void;
}
