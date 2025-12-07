import Image from "next/image";
import {nanumMyeongjo} from "@/fonts/Fonts";

function MainSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div
        className="border-4 border-red-500 absolute z-20  w-[80%] h-[70%] flex flex-col items-center
        py-40"
      >
        <h1 className={`${nanumMyeongjo.className} text-white text-7xl font-bold`}>미오앤나나</h1>
        <p className={`${nanumMyeongjo.className} text-white text-xl mt-4`}>따뜻한 시간이 시작되는 곳</p>
      </div>
      <div className="bg-red-300 h-dvh w-dvw relative shrink-0">
        <Image src="/cafe-images/13.jpg" alt="Main Image" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/90 z-10" />
      </div>
    </section>
  );
}

export default MainSection;
