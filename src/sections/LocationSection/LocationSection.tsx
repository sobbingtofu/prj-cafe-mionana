import Image from "next/image";
import {memo} from "react";

function LocationSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative ">
      <div className="h-dvh w-dvw relative shrink-0">
        <Image src="/cafe-images/26.jpg" alt="Main Image" fill className="object-cover" priority />
      </div>
    </section>
  );
}

export default memo(LocationSection);
