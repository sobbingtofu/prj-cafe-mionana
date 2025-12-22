import BackgroundImage from "@/src/components/BackgroundImage/BackgroundImage";
import MenuCardContainer from "@/src/components/MenuCards/MenuCardContainer";
import MenuCategoryBar from "@/src/components/MenuCategoryBar/MenuCategoryBar";
import {nanumMyeongjo} from "@/src/fonts/Fonts";
import zustandStore from "@/src/store/zustandStore";
import {MenuCategory} from "@/src/types/types";
import {useState, memo} from "react";

function MenuSection() {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const [currentMenuCat, setCurrentMenuCat] = useState<MenuCategory>("Coffee");
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div className="absolute z-20  w-[80%] h-[70%] flex flex-col items-start pb-[3dvh]">
        <div className="flex mt-[2dvh] mb-[1dvh] w-full justify-between">
          <p className={`${nanumMyeongjo.className} text-white lg:text-[22px] text-[20px] font-semibold w-[60px]`}>
            {selectedLanguage === "Korean" ? "메뉴" : "Menu"}
          </p>

          <MenuCategoryBar currentMenuCat={currentMenuCat} setCurrentMenuCat={setCurrentMenuCat} />
        </div>
        <MenuCardContainer currentMenuCat={currentMenuCat} />
      </div>

      <BackgroundImage imgUrl="/cafe-images/34.jpg" backdrop />
    </section>
  );
}

export default memo(MenuSection);
