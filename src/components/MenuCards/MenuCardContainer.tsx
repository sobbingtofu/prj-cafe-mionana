import {MENU_ITEMS} from "@/src/store/constantStore";
import {MenuCategory} from "@/src/types/types";
import MenuCard from "./MenuCard";
import {menuContainerRef} from "@/src/store/refStore";

interface MenuCardContainerProps {
  currentMenuCat: MenuCategory;
}

function MenuCardContainer({currentMenuCat}: MenuCardContainerProps) {
  return (
    <div
      ref={menuContainerRef}
      className="w-full h-full mt-[1dvh]
      grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-x-8 gap-0 content-start pr-2
      overflow-y-auto scrollbar-thin scrollbar-gutter-stable
      scrollbar-thumb-[#616161a0] scrollbar-track-[#ffffff00]"
    >
      {MENU_ITEMS.map((item) => {
        return item.category === currentMenuCat ? <MenuCard key={item.id} item={item} /> : null;
      })}
    </div>
  );
}

export default MenuCardContainer;
