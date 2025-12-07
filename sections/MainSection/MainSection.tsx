import Image from "next/image";
import {chironGoRoundTc, nanumMyeongjo} from "@/fonts/Fonts";
import zustandStore from "@/store/zustandStore";

function MainSection() {
  const {selectedLanguage} = zustandStore();
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div
        className="absolute z-20  w-[80%] h-[65%] flex flex-col items-center
        py-40 border-t border-t-gray-100 border-b border-b-gray-100"
      >
        <h1 className={`${nanumMyeongjo.className} text-white lg:text-8xl text-4xl font-extrabold`}>
          {selectedLanguage === "Korean" ? "미오앤나나" : "Cafe Mio & Nana"}
        </h1>

        <p className={`${nanumMyeongjo.className} text-white lg:text-[20px] text-[16px] mt-7`}>
          {selectedLanguage === "Korean" ? "따뜻한 시간이 시작되는 곳" : "Where warmth meets you"}
        </p>

        <div className="flex mt-30 items-center w-[60%] lg:justify-between lg:flex-row flex-col justify-center lg:gap-5 gap-5">
          <p
            className={`${chironGoRoundTc.className}
            ${selectedLanguage === "Korean" ? "text-md" : "text-sm"}
            w-[300px] lg:text-right text-center`}
          >
            {selectedLanguage === "Korean"
              ? "영업시간 :  ~18시, 일요일 휴무"
              : "Business Hours: ~6PM, Closed on Sundays"}
          </p>

          <div
            className={`${chironGoRoundTc.className} w-[300px] flex flex-col lg:items-start items-center text-white gap-2 `}
          >
            <p className={`${selectedLanguage === "Korean" ? "text-md" : "text-sm"} `}>
              {selectedLanguage === "Korean" ? "서울 중구 퇴계로28길 8-5" : "8-5, Toegye-ro 28-gil, Jung-gu, Seoul"}
            </p>
            <p className={`italic ${selectedLanguage === "Korean" ? "text-sm" : "text-xs"} lg:text-left text-center`}>
              {selectedLanguage === "Korean"
                ? "(충무로역 4번출구, 명동역 3번출구 도보 3분)"
                : "(3 mins walk from Chungmuro Station Exit 4 & Myeongdong Station Exit 3)"}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-red-300 h-dvh w-dvw relative shrink-0">
        <Image src="/cafe-images/13.jpg" alt="Main Image" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/90 z-10 backdrop-blur-xs" />
      </div>
    </section>
  );
}

export default MainSection;
