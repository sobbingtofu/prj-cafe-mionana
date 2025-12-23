import {Nanum_Gothic, Nanum_Myeongjo, Roboto} from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "optional",
});

export const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "optional",
});
