import {nanumGothic, nanumMyeongjo} from "@/src/fonts/Fonts";
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
      className=" rounded-md sm:h-[300px] h-[260px]
      flex flex-col justify-start items-center"
    >
      {/* 이미지 */}
      <div className="bg-red-300 w-[95%] aspect-[10/7.2] rounded-lg"></div>

      <div className="w-full flex flex-col mt-3 justify-start pl-2 gap-x-4 items-baseline">
        {/* 이름 */}
        <p className={`text-md ${nanumMyeongjo.className} font-semibold`}>
          {selectedLanguage === "Korean" ? item.name.kor : item.name.eng}
        </p>
        {/* 설명 */}
        <p className={`mt-1.5 text-xs font-light text-gray-300 line-clamp-2 ${nanumGothic.className}`}>
          {selectedLanguage === "Korean" ? item.description?.kor : item.description?.eng}
        </p>
        {/* 가격 */}
        <p className={`mt-1.5 text-xs font-light text-gray-100 ${nanumGothic.className}`}>
          {selectedLanguage === "Korean" ? `${item.price.toLocaleString()}원` : `${item.price} krw`}
        </p>
      </div>
    </div>
  );
}

export default MenuCard;
