import {nanumGothic, nanumMyeongjo} from "@/src/fonts/Fonts";
import zustandStore from "@/src/store/zustandStore";
import {MenuItem} from "@/src/types/types";
import React, {useRef, useState} from "react";

interface MenuCardProps {
  item: MenuItem;
}

function MenuCard({item}: MenuCardProps) {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [showTooltip, setShowTooltip] = useState(false);

  /** 설명이 잘려있는지 확인하고, 잘려있다면 전체 설명을 콘솔에 출력 */
  const manageDescriptionTooltipDisplay = (type: "hover" | "click") => {
    if (descriptionRef.current) {
      const isTruncated = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;

      if (isTruncated) {
        if (type === "hover") {
          hoverTimerRef.current = setTimeout(() => {
            setShowTooltip(true);
          }, 400);
        } else if (type === "click") {
          setShowTooltip((prev) => !prev);
        }
      }
    }
  };

  /** 마우스가 떠나면 타이머 취소 및 툴팁 숨김*/
  const handleDescriptionLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setShowTooltip(false);
  };

  return (
    <div
      className=" rounded-md aspect-[10/7.2]
      flex flex-col justify-start items-center
      "
    >
      {/* 이미지 */}
      <div className="bg-red-300 w-[95%] aspect-[10/7.2] rounded-lg"></div>

      <div className="w-full flex flex-col mt-3 justify-start pl-2 gap-x-4 items-baseline">
        {/* 이름 */}
        <p className={`text-md ${nanumMyeongjo.className} font-semibold`}>
          {selectedLanguage === "Korean" ? item.name.kor : item.name.eng}
        </p>
        {/* 설명 */}
        <div className="relative w-full">
          <p
            ref={descriptionRef}
            className={`mt-1.5 text-xs font-light text-gray-300 line-clamp-2 ${nanumGothic.className}`}
            onMouseEnter={() => manageDescriptionTooltipDisplay("hover")}
            onClick={() => manageDescriptionTooltipDisplay("click")}
            onMouseLeave={handleDescriptionLeave}
          >
            {selectedLanguage === "Korean" ? item.description?.kor : item.description?.eng}
          </p>
          {showTooltip && (
            <div
              className={`absolute top-full left-0 mt-2 p-2 bg-gray-800 text-white text-xs rounded-md shadow-lg z-50 w-full ${nanumGothic.className}`}
              onMouseEnter={() => {
                if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
              }}
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

export default MenuCard;
