import MenuContents from "@/src/components/MenuContents/MenuContents";
import {nanumMyeongjo} from "@/src/fonts/Fonts";
import zustandStore from "@/src/store/zustandStore";
import Image from "next/image";

function MenuSection() {
  const {selectedLanguage} = zustandStore();
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div
        className="absolute z-20  w-[80%] h-[70%] flex flex-col items-center
         border-t border-t-gray-100 border-b border-b-gray-100"
      >
        <p className={`${nanumMyeongjo.className} text-white lg:text-[18px] text-[14px] mt-[10dvh] lg:mt-[7dvh]`}>
          {selectedLanguage === "Korean" ? "메뉴" : "Menu"}
        </p>

        <MenuContents />
      </div>

      <div className="h-dvh w-dvw relative shrink-0">
        <Image src="/cafe-images/34.jpg" alt="Main Image" fill className="object-cover" priority />
      </div>
    </section>
  );
}

export default MenuSection;
