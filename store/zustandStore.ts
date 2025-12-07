import {create} from "zustand";
import {zustandStoreType} from "./zustandStoretype";

const zustandStore = create<zustandStoreType>((set) => ({
  selectedLanguage: "Korean",
  setSelectedLanguage: (language: "Korean" | "English") => set(() => ({selectedLanguage: language})),
}));

export default zustandStore;
