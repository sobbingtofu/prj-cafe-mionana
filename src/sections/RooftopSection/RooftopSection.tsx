import RooftopImageSlideShow from "@/src/components/RooftopImageSlideShow/RooftopImageSlideShow";
import {nanumGothic, nanumMyeongjo} from "@/src/fonts/Fonts";
import Image from "next/image";

function RooftopSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div className="absolute z-20 w-[80%] h-[70%] flex justify-center items-start ">
        <div
          className="h-[95%] 2xl:w-[80%] w-full flex md:gap-8 gap-4 border-2
          md:flex-row justify-start items-start flex-col overflow-hidden"
        >
          <RooftopImageSlideShow />
          <div
            className={`${nanumGothic.className} h-full w-full relative md:py-4 md:px-0 px-2
            flex flex-col md:justify-end justify-start `}
          >
            <h3 className={`${nanumMyeongjo.className} text-sm sm:text-md md:text-lg font-bold text-wrap`}>
              따스한 햇살과 아래에서 여유로운 커피 한 잔의 시간을 가져보세요.
            </h3>

            <p className="text-xs sm:text-sm mt-6 text-wrap">
              미오앤나나 방문객이라면 누구나 자유롭게 이용할 수 있습니다.
            </p>
            <p className="text-xs sm:text-sm mt-2 text-wrap ">대관 및 콜키지 이용도 가능합니다.</p>
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

export default RooftopSection;
