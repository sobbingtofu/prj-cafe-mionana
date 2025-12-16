import {useCopyToClipboard} from "@/src/hooks/useCopyToClipboard";

interface ClipboardIconProps {
  copyText: string;
  ariaLabel?: string;
}

function ClipboardIcon({copyText, ariaLabel}: ClipboardIconProps) {
  const {copied, copyToClipboard} = useCopyToClipboard();

  return (
    <button
      className="p-1.5 hover:bg-white/10 rounded transition-colors cursor-pointer"
      aria-label={ariaLabel}
      onClick={() => copyToClipboard(copyText)}
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-400"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-300"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      )}
    </button>
  );
}

export default ClipboardIcon;
