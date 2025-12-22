function SubwayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-300"
    >
      {/* 지하철 본체 - 둥근 사다리꼴 */}
      <path
        d="M7 3h10c2 0 3 1 3.5 3v10c0 2-1 3-3 3H6.5c-2 0-3-1-3-3V6c.5-2 1.5-3 3.5-3z"
        fill="currentColor"
        opacity="0.15"
      ></path>
      <path d="M7 3h10c2 0 3 1 3.5 3v10c0 2-1 3-3 3H6.5c-2 0-3-1-3-3V6c.5-2 1.5-3 3.5-3z"></path>

      {/* 상단 손잡이 */}
      <rect x="9.5" y="1" width="5" height="2" rx="1" fill="currentColor"></rect>

      {/* 큰 창문 */}
      <rect x="6" y="6.5" width="12" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"></rect>

      {/* 하단 바퀴/라이트 */}
      <circle cx="8" cy="15.5" r="1.8" fill="none"></circle>
      <circle cx="16" cy="15.5" r="1.8" fill="none"></circle>

      {/* 레일 */}
      <path d="M5 21l3-2.5"></path>
      <path d="M19 21l-3-2.5"></path>
    </svg>
  );
}

export default SubwayIcon;
