import {MENU_ITEMS} from "@/src/store/constantStore";
import {MenuCategory} from "@/src/types/types";
import MenuCard from "./MenuCard";

interface MenuCardContainerProps {
  currentMenuCat: MenuCategory;
}

function MenuCardContainer({currentMenuCat}: MenuCardContainerProps) {
  return (
    <div className="w-full h-full mt-[2dvh] grid lg:grid-cols-4 grid-cols-2 gap-4 overflow-y-hidden">
      {MENU_ITEMS.map((item) => {
        return item.category === currentMenuCat ? <MenuCard key={item.id} item={item} /> : null;
      })}
    </div>
  );
}

export default MenuCardContainer;
