import BackgroundImage from "@/src/components/BackgroundImage/BackgroundImage";
import PhoneInfo from "@/src/components/PhoneInfo/PhoneInfo";
import RooftopImageSlideShow from "@/src/components/RooftopImageSlideShow/RooftopImageSlideShow";
import {nanumGothic, nanumMyeongjo} from "@/src/fonts/Fonts";

function RooftopSection() {
  return (
    <section className="min-h-[530px] h-screen w-screen flex items-center justify-center relative ">
      <div className="absolute z-20 w-[80%] h-[70%] flex justify-center items-start ">
        <div
          className="h-full 2xl:w-[80%] w-full flex lg:gap-8 gap-5 
          lg:flex-row justify-start items-start flex-col overflow-hidden lg:pb-[26px]"
        >
          <RooftopImageSlideShow />
          <div
            className={`${nanumGothic.className} h-full w-full lg:px-0 px-2
            flex flex-col lg:justify-end justify-start overflow-y-auto`}
          >
            <h3 className={`${nanumMyeongjo.className} text-sm md:text-md lg:text-lg font-bold text-wrap`}>
              따스한 햇살 아래에서
            </h3>
            <h3 className={`${nanumMyeongjo.className} text-sm md:text-md lg:text-lg font-bold text-wrap`}>
              여유로운 커피 한 잔과 함께
            </h3>
            <h3 className={`${nanumMyeongjo.className} text-sm md:text-md lg:text-lg font-bold text-wrap`}>
              소중한 사람과 편안한 시간을 보내세요.
            </h3>

            <p className="text-xs md:text-sm lg:mt-6 mt-2 text-wrap">미오앤나나 방문객이라면</p>
            <p className="text-xs md:text-sm mt-1 text-wrap">누구나 자유롭게 이용할 수 있습니다.</p>
            <p className="text-xs md:text-sm lg:mt-4 mt-1 text-wrap">{"대관 이용은 전화/문자 문의 부탁드립니다."}</p>
            <div className="flex gap-x-3  items-center lg:mt-4 mt-2">
              <PhoneInfo textSize="xs" className="mt-2" />
              <p className="text-xs mt-2 text-wrap">{"/"}</p>
              <p className="text-xs mt-2 text-wrap">{"콜키지: 병 당 20,000원"}</p>
            </div>
          </div>
        </div>
      </div>

      <BackgroundImage imgUrl="/rooftop-images/03.jpg" backdrop backdropOpacity={0.86} />
    </section>
  );
}

export default RooftopSection;
