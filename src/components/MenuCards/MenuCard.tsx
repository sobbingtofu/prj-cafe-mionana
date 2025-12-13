import {MenuItem} from "@/src/types/types";
import React from "react";

interface MenuCardProps {
  item: MenuItem;
}

function MenuCard({item}: MenuCardProps) {
  return (
    <div
      className="bg-[#ffffff25] backdrop-blur-md rounded-md p-3 flex justify-center items-center
    h-[200px]
    "
    >
      {item.name.kor}
    </div>
  );
}

export default MenuCard;
