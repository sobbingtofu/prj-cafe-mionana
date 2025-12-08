import Image from "next/image";
import {chironGoRoundTc, nanumMyeongjo} from "@/fonts/Fonts";
import zustandStore from "@/store/zustandStore";

function MainSection() {
  const {selectedLanguage} = zustandStore();
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div
        className="absolute z-20  w-[80%] h-[70%] flex flex-col items-center
         border-t border-t-gray-100 border-b border-b-gray-100"
      >
        <p className={`${nanumMyeongjo.className} text-white lg:text-[16px] text-[13px] mt-[12dvh] lg:mt-[9dvh]`}>
          {selectedLanguage === "Korean" ? "따뜻한 시간이 시작되는 곳" : "Where warmth meets you"}
        </p>
        <div className="lg:h-[7dvh] lg:w-[7dvh] h-[5dvh] w-[5dvh] relative shrink-0 mt-12 lg:mt-9">
          <Image
            src="/logo/white-color/logo-imageOnly-white.png"
            alt="Logo Image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="lg:h-[20dvh] lg:w-[53dvh] h-[12dvh] w-[32dvh] relative shrink-0 lg:mt-[3dvh] mt-5">
          <Image
            src="/logo/white-color/logo-textOnly-white.png"
            alt="Logo Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex items-center w-[60%] lg:justify-between lg:flex-row flex-col justify-center lg:gap-5 gap-5 lg:mt-[10dvh] mt-18">
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
      </div>
    </section>
  );
}

export default MainSection;
