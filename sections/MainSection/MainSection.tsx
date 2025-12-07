import Image from "next/image";
import {chironGoRoundTc, nanumMyeongjo} from "@/fonts/Fonts";

function MainSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div
        className="absolute z-20  w-[80%] h-[65%] flex flex-col items-center
        py-40 border-t border-t-gray-100 border-b border-b-gray-100"
      >
        <h1 className={`${nanumMyeongjo.className} text-white text-8xl font-extrabold`}>미오앤나나</h1>

        <p className={`${nanumMyeongjo.className} text-white text-[20px] mt-7`}>따뜻한 시간이 시작되는 곳</p>

        <div className="flex mt-30 items-center w-[60%] justify-between">
          <p className={`w-[300px] text-right`}>{"영업시간 :  ~18시 (일요일 휴무)"}</p>

          <div className={`${chironGoRoundTc.className} w-[300px] flex flex-col items-start text-white gap-2`}>
            <p className={``}>{"서울 중구 퇴계로28길 8-5"}</p>
            <p className={`italic text-sm`}>{"(충무로역 4번출구, 명동역 3번출구 도보 3분)"}</p>
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
