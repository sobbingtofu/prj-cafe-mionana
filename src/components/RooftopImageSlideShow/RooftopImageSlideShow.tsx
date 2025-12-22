import {ROOFTOP_IMAGES_URLS} from "@/src/store/constantStore";
import zustandStore from "@/src/store/zustandStore";
import Image from "next/image";
import React, {memo, useEffect, useRef, useState} from "react";
import ArrowIcon from "@/src/icons/ArrowIcon/ArrowIcon";

function RooftopImageSlideShow() {
  const [selectedImageId, setSelectedImageId] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentSectionIndex = zustandStore((state) => state.currentSectionIndex);

  const imageAutoSwapRef = useRef<NodeJS.Timeout | null>(null);

  // 5초마다 자동 전환 (currentSectionIndex가 3일 때만 동작)
  useEffect(() => {
    // RooftopSection이 현재 화면에 표시되지 않으면 자동 전환 비활성화
    if (currentSectionIndex !== 3) {
      if (imageAutoSwapRef.current) {
        clearInterval(imageAutoSwapRef.current);
        imageAutoSwapRef.current = null;
      }

      return;
    }

    imageAutoSwapRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedImageId((prev) => {
          const nextId = prev + 1;
          return nextId > ROOFTOP_IMAGES_URLS.length ? 1 : nextId;
        });
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(imageAutoSwapRef.current!);
  }, [currentSectionIndex, selectedImageId]);

  const selectedImage = ROOFTOP_IMAGES_URLS.find((img) => img.id === selectedImageId);

  // 이전 이미지로 이동
  const handlePrevImage = () => {
    if (isTransitioning) return;
    setSelectedImageId((prev) => {
      const prevId = prev - 1;
      return prevId < 1 ? ROOFTOP_IMAGES_URLS.length : prevId;
    });

    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
  };

  // 다음 이미지로 이동
  const handleNextImage = () => {
    if (isTransitioning) return;
    setSelectedImageId((prev) => {
      const nextId = prev + 1;
      return nextId > ROOFTOP_IMAGES_URLS.length ? 1 : nextId;
    });

    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
  };

  return (
    <div
      className="lg:h-full lg:w-[43dvw]
              w-full h-[40dvh]  
              relative shrink-0 overflow-hidden"
    >
      {selectedImage && (
        <Image
          key={selectedImageId}
          src={selectedImage.url}
          alt={`Rooftop Image ${selectedImageId}`}
          fill
          className={`object-cover`}
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px"
          priority={selectedImageId === 1}
        />
      )}

      <div className="bg-black w-full h-9 z-5 absolute bottom-0 flex justify-between items-center opacity-40">
        {/* 이전 버튼 */}
        <button
          onClick={handlePrevImage}
          className=" cursor-pointer
                         px-2 py-4 rounded-md hover:bg-opacity-80 transition-all disabled:opacity-50 
                         disabled:cursor-not-allowed text-2xl font-bold"
          aria-label="Previous image"
        >
          <ArrowIcon direction="left" />
        </button>

        {/* 다음 버튼 */}
        <button
          onClick={handleNextImage}
          className="  cursor-pointer
                         px-2 py-4 rounded-md hover:bg-opacity-80 transition-all disabled:opacity-50 
                         disabled:cursor-not-allowed text-2xl font-bold"
          aria-label="Next image"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  );
}

export default memo(RooftopImageSlideShow);
