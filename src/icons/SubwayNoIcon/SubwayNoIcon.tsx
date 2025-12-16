import {SUBWAY_LINE_COLORS} from "@/src/store/constantStore";

interface SubwayNoIconProps {
  lineNo: string;
}

function SubwayNoIcon({lineNo}: SubwayNoIconProps) {
  const fillColor = SUBWAY_LINE_COLORS[lineNo] || "#CCCCCC";
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill={fillColor} />
      <text
        x="12"
        y="12"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="14"
        fontWeight="600"
        fontFamily="Arial, sans-serif"
      >
        {lineNo}
      </text>
    </svg>
  );
}

export default SubwayNoIcon;
