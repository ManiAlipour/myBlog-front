import React, { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({ text, children, position = "top" }: TooltipProps) => {
  let tooltipPosition =
    position === "top"
      ? "left-1/2 -translate-x-1/2 -top-12"
      : position === "bottom"
      ? "left-1/2 -translate-x-1/2 top-10"
      : position === "left"
      ? "right-full top-1/2 -translate-y-1/2 mr-2"
      : "left-full top-1/2 -translate-y-1/2 ml-2";

  let arrowPosition =
    position === "top"
      ? "bottom-[-7px] left-1/2 -translate-x-1/2 rotate-180"
      : position === "bottom"
      ? "top-[-7px] left-1/2 -translate-x-1/2"
      : position === "left"
      ? "top-1/2 right-[-7px] -translate-y-1/2 -rotate-90"
      : "top-1/2 left-[-7px] -translate-y-1/2 rotate-90";

  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`
          pointer-events-none absolute z-40
          whitespace-nowrap font-semibold rounded-xl px-3 py-1.5 text-sm
          shadow-xl bg-white/95 text-neutral-900 border border-gray-200 
          opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1
          transition-all duration-200 ease-out
          ${tooltipPosition}
        `}
        style={{ filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.10))" }}
      >
        {text}
        {/* Arrow */}
        <span
          className={`
            absolute w-3 h-3
            ${arrowPosition}
          `}
          style={{ pointerEvents: "none" }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="6,0 12,12 0,12"
              fill="#fff"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
