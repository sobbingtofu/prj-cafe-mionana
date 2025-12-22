import BackgroundImage from "@/src/components/BackgroundImage/BackgroundImage";
import KakaoMap from "@/src/components/KakaoMap/KakaoMap";
import ClipboardIcon from "@/src/icons/ClipboardIcon/ClipboardIcon";
import zustandStore from "@/src/store/zustandStore";
import {memo} from "react";

function LocationSection() {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const adressText =
    selectedLanguage === "Korean" ? "서울 중구 퇴계로28길 8-5" : "8-5, Toegye-ro 28-gil, Jung-gu, Seoul";

  return (
    <section className="min-h-[530px] h-screen w-screen flex items-center justify-center relative ">
      <div className="absolute z-20 w-[80%] h-[70%] flex flex-col justify-start items-center pb-[3dvh] mt-[6dvh]">
        <KakaoMap
          className="w-full h-[57dvh] min-h-[285px] rounded-lg shadow-2xl"
          markerlatitude={37.56041070368093}
          markerlongitude={126.99110964299093}
          centerLatitude={37.56076203568551}
          centerLongitude={126.99038524030453}
        />

        <div className="w-full flex flex-col justify-between mt-4 gap-1 text-sm">
          <div className="flex flex-row gap-x-1.5 items-center">
            <p className="text-white font-bold">{adressText}</p>
            <ClipboardIcon ariaLabel="주소 복사" copyText={adressText} />
          </div>
          <p className="italic">
            {selectedLanguage === "Korean"
              ? "충무로역 4번출구, 명동역 3번출구 도보 3분"
              : "3 mins walk from Chungmuro Station Exit 4 & Myeongdong Station Exit 3"}
          </p>
        </div>
      </div>

      <BackgroundImage imgUrl="/cafe-images/26.jpg" />
    </section>
  );
}

export default memo(LocationSection);
