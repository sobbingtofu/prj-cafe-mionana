import {MENU_CATS} from "@/src/store/constantStore";
import {MenuCategory} from "@/src/types/types";

interface MenuCategoryBarProps {
  currentMenuCat: MenuCategory;
  setCurrentMenuCat: (cat: MenuCategory) => void;
}

function MenuCategoryBar({currentMenuCat, setCurrentMenuCat}: MenuCategoryBarProps) {
  return (
    <section className="border border-red-200 w-full h-full">
      <div className="border border-cyan-600 flex flex-row items-center justify-start text-white gap-4 ">
        {MENU_CATS.map((cat) => (
          <div
            key={cat}
            className={`text-md font-semibold select-none cursor-pointer 
            rounded-full px-4 py-2  transition-colors
            ${currentMenuCat === cat ? "bg-[rgb(179,95,12)]" : "bg-[rgb(116,63,11)] hover:bg-[rgb(139,75,12)]"}
            `}
            onClick={() => setCurrentMenuCat(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuCategoryBar;
