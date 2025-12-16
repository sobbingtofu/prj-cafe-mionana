import Image from "next/image";
import {memo, useState, useEffect, useRef} from "react";
import {ROOFTOP_IMAGES_URLS} from "@/src/store/constantStore";
import zustandStore from "@/src/store/zustandStore";

function RooftopSection() {
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
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div className="absolute z-20 w-[80%] h-[70%] flex justify-center items-start">
        <div className="h-[95%] 2xl:w-[80%] w-full flex flex-col justify-start items-start gap-8 border-2 border-white">
          {/* 선택된 이미지 표시 영역 */}
          <div
            className="md:h-full md:w-auto lg:aspect-7/8 md:aspect-3/5
              w-full h-auto sm:aspect-video aspect-6/5 
              relative shrink-0 overflow-hidden bg-gray-800"
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

            {/* 이전 버튼 */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-60 text-white 
                         px-3 py-6 rounded-md hover:bg-opacity-80 transition-all disabled:opacity-50 
                         disabled:cursor-not-allowed text-2xl font-bold"
              aria-label="Previous image"
            >
              &lt;
            </button>

            {/* 다음 버튼 */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-60 text-white 
                         px-3 py-6 rounded-md hover:bg-opacity-80 transition-all disabled:opacity-50 
                         disabled:cursor-not-allowed text-2xl font-bold"
              aria-label="Next image"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="w-full absolute inset-0 bg-[rgba(0,0,0,0.86)] z-10 " />
      <div className="h-dvh w-dvw relative shrink-0 ">
        <Image src="/rooftop-images/03.jpg" alt="Main Image" fill className="object-cover" priority />
      </div>
    </section>
  );
}

export default memo(RooftopSection);
