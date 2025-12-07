import Image from "next/image";
import {chironGoRoundTc, nanumMyeongjo} from "@/fonts/Fonts";
import zustandStore from "@/store/zustandStore";

function MainSection() {
  const {selectedLanguage} = zustandStore();
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div
        className="absolute z-20  w-[80%] h-[65%] flex flex-col items-center
         border-t border-t-gray-100 border-b border-b-gray-100"
      >
        <p className={`${nanumMyeongjo.className} text-white lg:text-[16px] text-[13px] mt-20 lg:mt-18`}>
          {selectedLanguage === "Korean" ? "따뜻한 시간이 시작되는 곳" : "Where warmth meets you"}
        </p>
        <div className="lg:h-[60px] lg:w-[60px] h-12 w-12 relative shrink-0 mt-12 lg:mt-9">
          <Image
            src="/logo/white-color/logo-imageOnly-white.png"
            alt="Logo Image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="lg:h-[150px] lg:w-[400px] h-[125px] w-[320px] relative shrink-0 lg:mt-5 mt-5">
          <Image
            src="/logo/white-color/logo-textOnly-white.png"
            alt="Logo Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex items-center w-[60%] lg:justify-between lg:flex-row flex-col justify-center lg:gap-5 gap-5 lg:mt-[108px] mt-18">
          <p
            className={`${chironGoRoundTc.className}
            lg:text-sm text-xs
            w-[300px] lg:text-right text-center`}
          >
            {selectedLanguage === "Korean"
              ? "영업시간 :  ~18시, 일요일 휴무"
              : "Business Hours: ~6PM, Closed on Sundays"}
          </p>

          <div
            className={`${chironGoRoundTc.className} w-[300px] flex flex-col lg:items-start items-center text-white gap-2 `}
          >
            <p className="lg:text-sm text-xs">
              {selectedLanguage === "Korean" ? "서울 중구 퇴계로28길 8-5" : "8-5, Toegye-ro 28-gil, Jung-gu, Seoul"}
            </p>
            <p className={`italic lg:text-left text-center sm:text-xs text-[11px]`}>
              {selectedLanguage === "Korean"
                ? "(충무로역 4번출구, 명동역 3번출구 도보 3분)"
                : "(3 mins walk from Chungmuro Station Exit 4 & Myeongdong Station Exit 3)"}
            </p>
          </div>
        </div>
      </div>
      <div className="h-dvh w-dvw relative shrink-0">
        <Image src="/cafe-images/13.jpg" alt="Main Image" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/90 z-10 backdrop-blur-xs" />
      </div>
    </section>
  );
}

export default MainSection;
