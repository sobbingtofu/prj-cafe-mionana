import {nanumGothic, nanumMyeongjo} from "@/src/fonts/Fonts";
import useManageDescriptionTooltipDisplay from "@/src/hooks/useManageDescriptionTooltipDisplay";
import zustandStore from "@/src/store/zustandStore";
import {MenuItem} from "@/src/types/types";
import Image from "next/image";
import React, {useRef, useState, useCallback, memo} from "react";

interface MenuCardProps {
  item: MenuItem;
}

function MenuCard({item}: MenuCardProps) {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [showTooltip, setShowTooltip] = useState(false);

  const {manageDescriptionTooltipDisplay, handleDescriptionLeave} = useManageDescriptionTooltipDisplay({
    descriptionRef,
    hoverTimerRef,
    setShowTooltip,
  });

  const handleDescriptionHover = useCallback(() => {
    manageDescriptionTooltipDisplay("hover");
  }, [manageDescriptionTooltipDisplay]);

  const handleDescriptionClick = useCallback(() => {
    manageDescriptionTooltipDisplay("click");
  }, [manageDescriptionTooltipDisplay]);

  const handleTooltipMouseEnter = useCallback(() => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
  }, []);

  return (
    <div
      className=" rounded-md aspect-[10/7.2]
      flex flex-col justify-start items-center
      "
    >
      {/* 이미지 */}
      <div className="bg-gray-800 w-[95%] aspect-[10/7.2] rounded-lg relative shrink-0">
        <Image
          src={`/menu/${item.id}.jpg`}
          alt={item.name.eng}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 20vw"
          loading="lazy"
        />
      </div>

      <div className="w-full flex flex-col mt-3 justify-start pl-2 gap-x-4 items-baseline">
        {/* 이름 */}
        <p className={`sm:text-md text-sm ${nanumMyeongjo.className} font-semibold text-white`}>
          {selectedLanguage === "Korean" ? item.name.kor : item.name.eng}
        </p>
        {/* 설명 */}
        <div className="relative w-full">
          <p
            ref={descriptionRef}
            className={`mt-1.5 text-xs font-light text-gray-300 line-clamp-2 ${nanumGothic.className}`}
            onMouseEnter={handleDescriptionHover}
            onClick={handleDescriptionClick}
            onMouseLeave={handleDescriptionLeave}
          >
            {selectedLanguage === "Korean" ? item.description?.kor : item.description?.eng}
          </p>
          {showTooltip && (
            <div
              className={`absolute top-full left-0 mt-2 p-2 bg-gray-800 text-white text-xs rounded-md shadow-lg z-50 w-full ${nanumGothic.className}`}
              onMouseEnter={handleTooltipMouseEnter}
              onMouseLeave={handleDescriptionLeave}
            >
              {selectedLanguage === "Korean" ? item.description?.kor : item.description?.eng}
            </div>
          )}
        </div>
        {/* 가격 */}
        <p className={`mt-1.5 text-xs font-light text-gray-100 ${nanumGothic.className}`}>
          {selectedLanguage === "Korean" ? `${item.price.toLocaleString()}원` : `${item.price} krw`}
        </p>
      </div>
    </div>
  );
}

export default memo(MenuCard);
