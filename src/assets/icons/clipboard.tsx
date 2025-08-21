import React, { useMemo, type SVGProps } from "react";

export const IconClipboard: React.FC<SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  // Deteksi gradient dari CSS variable
  const useGradient = useMemo(() => {
    if (typeof window === "undefined") return false;
    const el = document.createElement("div");
    el.className = className || "";
    document.body.appendChild(el);
    const styles = getComputedStyle(el);
    const hasVars =
      styles.getPropertyValue("--color1") &&
      styles.getPropertyValue("--color2");
    document.body.removeChild(el);
    return Boolean(hasVars);
  }, [className]);

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8.5"
        stroke={useGradient ? "url(#paint0)" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.621 3.515C8.72915 3.08232 8.97882 2.69821 9.33033 2.4237C9.68184 2.1492 10.115 2.00007 10.561 2H13.438C13.884 2.00007 14.3172 2.1492 14.6687 2.4237C15.0202 2.69821 15.2698 3.08232 15.378 3.515L16 6H8L8.621 3.515Z"
        stroke={useGradient ? "url(#paint1)" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12H15M9 16H15"
        stroke={useGradient ? "url(#paint2)" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {useGradient && (
        <defs>
          <linearGradient
            id="paint0"
            x1="12"
            y1="4"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color1, currentColor)" />
            <stop offset="1" stopColor="var(--color2, currentColor)" />
          </linearGradient>
          <linearGradient
            id="paint1"
            x1="12"
            y1="2"
            x2="12"
            y2="6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color1, currentColor)" />
            <stop offset="1" stopColor="var(--color2, currentColor)" />
          </linearGradient>
          <linearGradient
            id="paint2"
            x1="12"
            y1="12"
            x2="12"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color1, currentColor)" />
            <stop offset="1" stopColor="var(--color2, currentColor)" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
};
