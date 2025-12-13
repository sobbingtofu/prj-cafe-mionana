import MenuCardContainer from "@/src/components/MenuCards/MenuCardContainer";
import MenuCategoryBar from "@/src/components/MenuCategoryBar/MenuCategoryBar";
import {nanumMyeongjo} from "@/src/fonts/Fonts";
import zustandStore from "@/src/store/zustandStore";
import {MenuCategory} from "@/src/types/types";
import Image from "next/image";
import {useState, memo} from "react";

function MenuSection() {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const [currentMenuCat, setCurrentMenuCat] = useState<MenuCategory>("Coffee");
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div
        className="absolute z-20  w-[80%] h-[70%] flex flex-col items-start
         border-t border-t-gray-100 border-b border-b-gray-100 pb-[3dvh]
         "
      >
        <div className="flex mt-[2dvh] mb-[1dvh] w-full justify-between">
          <p className={`${nanumMyeongjo.className} text-white lg:text-[22px] text-[20px] font-semibold w-[60px]`}>
            {selectedLanguage === "Korean" ? "메뉴" : "Menu"}
          </p>

          <MenuCategoryBar currentMenuCat={currentMenuCat} setCurrentMenuCat={setCurrentMenuCat} />
        </div>
        <MenuCardContainer currentMenuCat={currentMenuCat} />
      </div>

      <div className="w-full absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10 " />
      <div className="h-dvh w-dvw relative shrink-0">
        <Image src="/cafe-images/34.jpg" alt="Main Image" fill className="object-cover" priority />
      </div>
    </section>
  );
}

export default memo(MenuSection);
