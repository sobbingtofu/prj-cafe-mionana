import {MENU_ITEMS} from "@/src/store/constantStore";
import {MenuCategory} from "@/src/types/types";
import MenuCard from "./MenuCard";
import {menuContainerRef} from "@/src/store/refStore";
import {useMemo} from "react";

interface MenuCardContainerProps {
  currentMenuCat: MenuCategory;
}

function MenuCardContainer({currentMenuCat}: MenuCardContainerProps) {
  const filteredItems = useMemo(() => MENU_ITEMS.filter((item) => item.category === currentMenuCat), [currentMenuCat]);

  return (
    <div
      ref={menuContainerRef}
      className="w-full h-full mt-[1dvh]
      grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-x-8 gap-6 content-start pr-2
      overflow-y-auto scrollbar-thin scrollbar-gutter-stable
      scrollbar-thumb-[#616161a0] scrollbar-track-[#ffffff00]"
    >
      {filteredItems.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuCardContainer;
