import {create} from "zustand";
import {zustandStoreType} from "./zustandStoretype";

const zustandStore = create<zustandStoreType>((set) => ({
  selectedLanguage: "Korean",
  setSelectedLanguage: (language: "Korean" | "English") => set(() => ({selectedLanguage: language})),

  currentSectionIndex: 0,
  setCurrentSectionIndex: (index: number) => set(() => ({currentSectionIndex: index})),
}));

export default zustandStore;
