import Image from "next/image";

interface BackgroundImageProps {
  imgUrl: string;
  backdrop?: boolean;
  backdropOpacity?: number;
}

function BackgroundImage({imgUrl, backdrop, backdropOpacity = 0.5}: BackgroundImageProps) {
  return (
    <div className="min-h-[530px] h-screen w-screen relative shrink-0">
      {backdrop && (
        <div className="w-full absolute inset-0 z-10" style={{backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})`}} />
      )}
      <Image src={imgUrl} alt="Main Image" fill className="object-cover" priority />
    </div>
  );
}

export default BackgroundImage;
