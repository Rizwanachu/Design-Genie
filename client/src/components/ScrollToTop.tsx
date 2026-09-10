import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const CIRCLE_RADIUS = 21;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0
          ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
          : 0;

      setIsVisible(window.scrollY > 0);
      setScrollProgress(progress);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      title="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0a0a0a]/85 text-[#d4af37] shadow-lg shadow-black/25 backdrop-blur-sm transition-all duration-300 hover:bg-[#d4af37]/15 hover:text-[#f1cf5a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] sm:bottom-7 sm:right-7"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r={CIRCLE_RADIUS}
          fill="none"
          stroke="rgba(212, 175, 55, 0.25)"
          strokeWidth="1.5"
        />
        <circle
          cx="24"
          cy="24"
          r={CIRCLE_RADIUS}
          fill="none"
          stroke="#d4af37"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1 - scrollProgress,
          }}
        />
      </svg>
      <ArrowUp size={19} strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
}