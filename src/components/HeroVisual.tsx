import { motion } from "framer-motion";
import { Megaphone, PieChart, TrendingUp, Users } from "lucide-react";
import logoMark from "../assets/logo-square.png";
import { Facebook, Instagram } from "./SocialIcons";

const platformChips = [
  { icon: Facebook, bg: "bg-[#1877F2]", delay: 0.2 },
  {
    icon: Instagram,
    bg: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    delay: 0.4,
  },
  { icon: Megaphone, bg: "bg-gradient-to-br from-[#ff9a44] to-[#ff5e62]", delay: 0.6 },
];

const metricCards = [
  {
    icon: TrendingUp,
    label: "Traffic Growth",
    className: "top-6 left-1/2 -translate-x-1/2 sm:left-24 sm:translate-x-0",
    delay: 0.9,
  },
  { icon: Users, label: "Lead Generation", className: "top-8 right-6", delay: 1.1 },
  { icon: PieChart, label: "ROI Focused", className: "bottom-8 right-8", delay: 1.3 },
];

const bars = [30, 46, 38, 58, 70, 90];
const sparkles = [
  { top: "18%", left: "72%", delay: 0, size: 6 },
  { top: "30%", left: "60%", delay: 0.6, size: 4 },
  { top: "12%", left: "58%", delay: 1.1, size: 5 },
];

export default function HeroVisual() {
  return (
    <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_35%,_#123566_0%,_#0b1f3a_55%,_#050d1c_100%)]">
      {/* background bar cluster for depth */}
      <div className="absolute right-6 bottom-6 flex h-40 items-end gap-2 opacity-80">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-4 rounded-t-sm bg-gradient-to-t from-primary/70 to-highlight/70 sm:w-5"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* bold diagonal growth arrow */}
      <svg
        viewBox="0 0 400 500"
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-arrow" x1="60" y1="420" x2="340" y2="90">
            <stop offset="0%" stopColor="#2d9cff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="hero-arrow-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M55 420 C 110 380, 90 330, 150 300 S 230 220, 260 190 S 300 130, 320 100"
          stroke="url(#hero-arrow)"
          strokeWidth={7}
          strokeLinecap="round"
          filter="url(#hero-arrow-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M320 100 L 282 108 M320 100 L 314 140"
          stroke="url(#hero-arrow)"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#hero-arrow-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 1.5 }}
        />
      </svg>

      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
        />
      ))}

      {/* pedestal glow */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-highlight/35 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative flex flex-col items-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={logoMark}
          alt="Keyword Crew"
          className="w-28 drop-shadow-[0_0_35px_rgba(45,156,255,0.65)] sm:w-36"
        />
        <div className="mt-4 h-2.5 w-28 rounded-full bg-gradient-to-r from-transparent via-highlight/50 to-transparent blur-[3px] sm:w-36" />
      </motion.div>

      {/* branded platform chips */}
      <div className="absolute top-8 left-6 flex flex-col gap-3">
        {platformChips.map(({ icon: Icon, bg, delay }, i) => (
          <motion.div
            key={i}
            className={`flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-lg ring-1 ring-white/20 ${bg}`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
          >
            <Icon size={18} />
          </motion.div>
        ))}
      </div>

      {metricCards.map(({ icon: Icon, label, className, delay }) => (
        <motion.div
          key={label}
          className={`absolute inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold whitespace-nowrap text-white shadow-lg ring-1 ring-white/15 backdrop-blur-md ${className}`}
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay }}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full gradient-royal-sky text-white">
            <Icon size={12} />
          </span>
          {label}
        </motion.div>
      ))}
    </div>
  );
}
