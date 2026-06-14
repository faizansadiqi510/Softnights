import React from "react";

interface LogoProps {
  variant?: "light" | "dark" | "sage" | "blush" | "iconOnly";
  className?: string;
  showSubtitle?: boolean;
  onClick?: () => void;
}

export default function Logo({
  variant = "light",
  className = "",
  showSubtitle = true,
  onClick,
}: LogoProps) {
  // Brand colors: Green (#8BAF8E), Gold (#C9A96E), Charcoal (#2D2D2D), Cream (#FDF8F3), Blush (#E8C4B0)
  const isDark = variant === "dark";
  const isSage = variant === "sage";
  const isBlush = variant === "blush";
  
  // Outer Container Classes
  let containerClass = "flex items-center gap-3 select-none " + className;
  
  // Icon and text colors based on variant
  let moonColor = "#8BAF8E"; // green
  let starColor = "#8BAF8E";
  let sleepTextColor = "text-charcoal";
  let solutionsTextColor = "text-sage font-bold";
  let subtextColor = "text-warm-grey";

  if (isDark) {
    moonColor = "#C9A96E"; // gold moon
    starColor = "#C9A96E";
    sleepTextColor = "text-white";
    solutionsTextColor = "text-gold font-bold";
    subtextColor = "text-moon/80";
  } else if (isSage) {
    moonColor = "#FDF8F3"; // white/cream moon
    starColor = "#C9A96E"; // gold star
    sleepTextColor = "text-white";
    solutionsTextColor = "text-cream-light font-bold";
    // We can use style classes
    solutionsTextColor = "text-cream font-bold";
    subtextColor = "text-cream/80";
  } else if (isBlush) {
    moonColor = "#8BAF8E";
    starColor = "#8BAF8E";
    sleepTextColor = "text-charcoal";
    solutionsTextColor = "text-sage font-bold";
    subtextColor = "text-warm-grey";
  }

  // Stand-alone icon variant
  if (variant === "iconOnly") {
    return (
      <div className={`relative w-12 h-12 flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Crescent Moon */}
          <path
            d="M75 50C75 66.5685 61.5685 80 45 80C28.4315 80 15 66.5685 15 50C15 33.4315 28.4315 20 45 20C49.954 20 54.6125 21.2025 58.7118 23.3323C46.3312 25.8672 37 36.8373 37 50C37 63.1627 46.3312 74.1328 58.7118 76.6677C54.6125 78.7975 49.954 80 45 80"
            fill={moonColor}
          />
          {/* Main Star */}
          <path
            d="M75 22L76.5 26.5L81 28L76.5 29.5L75 34L73.5 29.5L69 28L73.5 26.5L75 22Z"
            fill={starColor}
          />
          {/* Minor Star */}
          <path
            d="M32 72L32.75 74.25L35 75L32.75 75.75L32 78L31.25 75.75L29 75L31.25 74.25L32 72Z"
            fill={starColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={containerClass} onClick={onClick}>
      {/* Visual Icon */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Crescent Moon */}
          <path
            d="M75 50C75 66.5685 61.5685 80 45 80C28.4315 80 15 66.5685 15 50C15 33.4315 28.4315 20 45 20C49.954 20 54.6125 21.2025 58.7118 23.3323C46.3312 25.8672 37 36.8373 37 50C37 63.1627 46.3312 74.1328 58.7118 76.6677C54.6125 78.7975 49.954 80 45 80"
            fill={moonColor}
          />
          {/* Star 1 */}
          <path
            d="M75 22L76.5 26.5L81 28L76.5 29.5L75 34L73.5 29.5L69 28L73.5 26.5L75 22Z"
            fill={starColor}
          />
          {/* Star 2 */}
          <path
            d="M22 42L22.75 44.25L25 45L22.75 45.75L22 48L21.25 45.75L19 45L21.25 44.25L22 42Z"
            fill={starColor}
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col select-none">
        <div className="flex items-baseline gap-1">
          <span className={`text-xl font-heading font-semibold tracking-tight ${sleepTextColor}`}>
            Soft
          </span>
          <span className={`text-xl font-heading font-bold tracking-tight ${solutionsTextColor}`}>
            nights
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[10px] uppercase tracking-wider -mt-1 ${subtextColor}`}>
            Calmer nights for your child
          </span>
        )}
      </div>
    </div>
  );
}
