import {RefObject} from "react";

interface UseManageDescriptionTooltipDisplayParams {
  descriptionRef: RefObject<HTMLParagraphElement | null>;
  hoverTimerRef: React.RefObject<NodeJS.Timeout | null>;
  setShowTooltip: React.Dispatch<React.SetStateAction<boolean>>;
}

function useManageDescriptionTooltipDisplay({
  descriptionRef,
  hoverTimerRef,
  setShowTooltip,
}: UseManageDescriptionTooltipDisplayParams) {
  const manageDescriptionTooltipDisplay = (type: "hover" | "click") => {
    if (descriptionRef.current) {
      const isTruncated = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;

      if (isTruncated) {
        if (type === "hover") {
          hoverTimerRef.current = setTimeout(() => {
            setShowTooltip(true);
          }, 400);
        } else if (type === "click") {
          setShowTooltip((prev) => !prev);
        }
      }
    }
  };

  /** 마우스가 떠나면 타이머 취소 및 툴팁 숨김*/
  const handleDescriptionLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setShowTooltip(false);
  };

  return {manageDescriptionTooltipDisplay, handleDescriptionLeave};
}

export default useManageDescriptionTooltipDisplay;
