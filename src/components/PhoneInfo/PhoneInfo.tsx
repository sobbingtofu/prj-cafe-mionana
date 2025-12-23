import {nanumGothic} from "@/src/fonts/Fonts";
import {useCopyToClipboard} from "@/src/hooks/useCopyToClipboard";
import PhoneIcon from "@/src/icons/PhoneIcon/PhoneIcon";
import {PHONE_NUMBER} from "@/src/store/constantStore";
import zustandStore from "@/src/store/zustandStore";

interface PhoneInfoProps {
  textSize?: "default" | "xs";
  className?: string;
}

function PhoneInfo({textSize = "default", className = ""}: PhoneInfoProps) {
  const selectedLanguage = zustandStore((state) => state.selectedLanguage);
  const {copied, copyToClipboard} = useCopyToClipboard();

  const handlePhoneNumberClick = () => {
    copyToClipboard(PHONE_NUMBER);
  };

  const phoneNumberClassName = textSize === "default" ? "lg:text-[13px] text-xs" : "text-xs";

  return (
    <div className={`${className} relative`}>
      <div
        className="flex items-center gap-x-2 justify-center cursor-pointer hover:font-bold"
        onClick={() => handlePhoneNumberClick()}
      >
        <PhoneIcon />
        <p className={`${nanumGothic.className} ${phoneNumberClassName} text-white`}>{PHONE_NUMBER}</p>
      </div>
      <p
        className={`${nanumGothic.className} absolute top-full left-1/2 -translate-x-1/2 mt-1
              text-[10px] text-green-400 whitespace-nowrap transition-all duration-300 ease-in-out
              ${copied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        {selectedLanguage == "Korean" ? "클립보드에 복사 완료" : "Copied to clipboard"}
      </p>
    </div>
  );
}

export default PhoneInfo;
