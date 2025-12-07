import Image from "next/image";

function MainSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="bg-red-300 h-dvh w-dvw relative shrink-0">
        <Image src="/cafe-images/13.jpg" alt="Main Image" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/90 z-10" />
      </div>
    </section>
  );
}

export default MainSection;
