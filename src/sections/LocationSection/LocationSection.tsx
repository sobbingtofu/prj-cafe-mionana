import KakaoMap from "@/src/components/KakaoMap/KakaoMap";
import Image from "next/image";
import {memo} from "react";

function LocationSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div
        className="absolute z-20 w-[80%] h-[70%] flex justify-start items-center pb-[3dvh]
      flex-col"
      >
        <KakaoMap
          className="w-[95%] xl:aspect-16/6 lg:aspect-16/7 md:aspect-video sm:aspect-4/3 aspect-16/16  rounded-lg shadow-2xl"
          markerlatitude={37.56041070368093}
          markerlongitude={126.99110964299093}
          centerLatitude={37.56076203568551}
          centerLongitude={126.99038524030453}
        />
      </div>

      <div className="h-dvh w-dvw relative shrink-0">
        <Image src="/cafe-images/26.jpg" alt="Main Image" fill className="object-cover" priority />
      </div>
    </section>
  );
}

export default memo(LocationSection);
