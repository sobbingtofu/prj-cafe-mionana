import {MENU_CATS} from "@/src/store/constantStore";
import {MenuCategory} from "@/src/types/types";
import {memo} from "react";

interface MenuCategoryBarProps {
  currentMenuCat: MenuCategory;
  setCurrentMenuCat: (cat: MenuCategory) => void;
}

function MenuCategoryBar({currentMenuCat, setCurrentMenuCat}: MenuCategoryBarProps) {
  return (
    <div className=" flex flex-row items-center justify-start text-white gap-2 sm:gap-6 text-xs">
      {MENU_CATS.map((cat) => (
        <div
          key={cat}
          className={`font-semibold select-none cursor-pointer 
            rounded-full transition-colors
            ${currentMenuCat === cat ? " text-white" : " text-gray-400 hover:text-gray-300"}
            `}
          onClick={() => setCurrentMenuCat(cat)}
        >
          {cat}
        </div>
      ))}
    </div>
  );
}

export default memo(MenuCategoryBar);
