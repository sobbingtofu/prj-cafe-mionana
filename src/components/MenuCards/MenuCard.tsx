import zustandStore from "@/src/store/zustandStore";
import {MenuItem} from "@/src/types/types";
import React from "react";

interface MenuCardProps {
  item: MenuItem;
}

function MenuCard({item}: MenuCardProps) {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);

  return (
    <div
      className="bg-[#ffffff25] backdrop-blur-md rounded-md p-3 flex justify-center items-center
    h-[200px]
    "
    >
      {selectedLanguage === "Korean" ? item.name.kor : item.name.eng}
    </div>
  );
}

export default MenuCard;
