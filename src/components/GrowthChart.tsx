import { motion } from "framer-motion";

interface GrowthChartProps {
  className?: string;
  strokeWidth?: number;
}

/** Animated on-brand line chart: draws itself in on mount, no raster assets. */
export default function GrowthChart({
  className = "h-full w-full",
  strokeWidth = 4,
}: GrowthChartProps) {
  return (
    <svg
      viewBox="0 0 400 220"
      fill="none"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="growth-line" x1="0" y1="0" x2="400" y2="0">
          <stop offset="0%" stopColor="#2d9cff" />
          <stop offset="100%" stopColor="#7dd3ff" />
        </linearGradient>
        <filter id="growth-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* faint grid */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="0"
          y1={i * 44 + 10}
          x2="400"
          y2={i * 44 + 10}
          stroke="white"
          strokeOpacity="0.06"
        />
      ))}

      <motion.path
        d="M0 170 C 30 150, 50 190, 80 165 S 130 110, 160 130 S 210 60, 240 75 S 300 40, 330 30 L 360 15"
        stroke="url(#growth-line)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        filter="url(#growth-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
      <motion.path
        d="M360 15 L 330 25 M360 15 L 350 45"
        stroke="url(#growth-line)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#growth-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.7 }}
      />
    </svg>
  );
}
