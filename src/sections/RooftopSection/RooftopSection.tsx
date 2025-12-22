import RooftopImageSlideShow from "@/src/components/RooftopImageSlideShow/RooftopImageSlideShow";
import Image from "next/image";

function RooftopSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div className="absolute z-20 w-[80%] h-[70%] flex justify-center items-start">
        <RooftopImageSlideShow />
      </div>
      <div className="w-full absolute inset-0 bg-[rgba(0,0,0,0.86)] z-10 " />
      <div className="h-dvh w-dvw relative shrink-0 ">
        <Image src="/rooftop-images/03.jpg" alt="Main Image" fill className="object-cover" priority />
      </div>
    </section>
  );
}

export default RooftopSection;
