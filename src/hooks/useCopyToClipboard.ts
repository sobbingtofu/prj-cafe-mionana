import {useState} from "react";

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      // 모던 브라우저용
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } else {
        // 구형 브라우저나 비보안 환경용
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch (err) {
          console.error("클립보드 복사 실패:", err);
        } finally {
          textArea.remove();
        }
      }
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
    }
  };

  return {copied, copyToClipboard};
}
