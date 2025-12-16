import {nanumGothic, nanumMyeongjo} from "@/src/fonts/Fonts";

import zustandStore from "@/src/store/zustandStore";
import Image from "next/image";
import {memo} from "react";
import {PHONE_NUMBER} from "@/src/store/constantStore";
import {useCopyToClipboard} from "@/src/hooks/useCopyToClipboard";
import PhoneIcon from "@/src/icons/PhoneIcon/PhoneIcon";
import TimeIcon from "@/src/icons/TimeIcon/TimeIcon";
import SubwayNoIcon from "@/src/icons/SubwayNoIcon/SubwayNoIcon";

function MainSection() {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const {copied, copyToClipboard} = useCopyToClipboard();

  const handlePhoneNumberClick = () => {
    copyToClipboard(PHONE_NUMBER);
  };

  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div className="absolute z-20  w-[80%] h-[70%] flex flex-col items-center">
        <p className={`${nanumMyeongjo.className} text-white lg:text-[16px] text-[13px] mt-[5dvh] lg:mt-[6dvh]`}>
          {selectedLanguage === "Korean" ? "따뜻한 시간이 시작되는 곳" : "Where warmth meets you"}
        </p>
        <div className="lg:h-[6dvh] lg:w-[6dvh] h-[5dvh] w-[5dvh] relative shrink-0 mt-12 lg:mt-[8dvh]">
          <Image
            src="/logo/white-color/logo-imageOnly-white.png"
            alt="Logo Image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="lg:h-[18dvh] lg:w-[46dvh] h-[12dvh] w-[32dvh] relative shrink-0 lg:mt-[3dvh] mt-5">
          <Image
            src="/logo/white-color/logo-textOnly-white.png"
            alt="Logo Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="flex items-center w-[66%] lg:justify-between lg:flex-row flex-col justify-center
          lg:gap-8 gap-5 lg:mt-[11dvh] mt-18"
        >
          <div className="w-[320px] relative">
            <div
              className="flex items-center gap-x-2 justify-center cursor-pointer hover:font-bold"
              onClick={() => handlePhoneNumberClick()}
            >
              <PhoneIcon />
              <p className={`${nanumGothic.className} lg:text-[13px] text-xs `}>{PHONE_NUMBER}</p>
            </div>
            <p
              className={`${nanumGothic.className} absolute top-full left-1/2 -translate-x-1/2 mt-1
              text-[10px] text-green-400 whitespace-nowrap transition-all duration-300 ease-in-out
              ${copied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
            >
              클립보드에 복사 완료
            </p>
          </div>

          <div className="w-[320px] flex items-center gap-x-2 justify-center">
            <TimeIcon />
            <p
              className={`${nanumGothic.className}
              lg:text-sm text-xs`}
            >
              {selectedLanguage === "Korean" ? "~18시, 일요일 휴무" : "~6PM, Closed on Sundays"}
            </p>
          </div>

          <div
            className={`${nanumGothic.className} sm:text-[13px] text-xs
            w-[320px] flex items-center text-white gap-3`}
          >
            {/* <SubwayIcon /> */}
            <div className="flex items-center gap-x-1.5 pl-10">
              <div className="flex gap-x-0.5">
                <SubwayNoIcon lineNo="3" />
                <SubwayNoIcon lineNo="4" />
              </div>
              <p className={`text-left`}>{selectedLanguage === "Korean" ? "충무로역" : "Chungmuro"}</p>
            </div>
            <div className="flex items-center gap-x-1">
              <SubwayNoIcon lineNo="4" />
              <p className={`text-left`}>{selectedLanguage === "Korean" ? "명동역" : "Myeongdong"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-dvh w-dvw relative shrink-0">
        <Image src="/cafe-images/13.jpg" alt="Main Image" fill className="object-cover" priority />
      </div>
    </section>
  );
}

export default memo(MainSection);
