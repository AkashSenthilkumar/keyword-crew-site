import { motion } from "framer-motion";
import { Search, MousePointerClick, Share2 } from "lucide-react";
import GrowthChart from "./GrowthChart";

const bars = [38, 55, 46, 68, 60, 82, 72, 94];

const chips = [
  { icon: Search, label: "SEO", className: "top-6 left-6", delay: 0 },
  {
    icon: MousePointerClick,
    label: "Ads",
    className: "top-6 right-6",
    delay: 0.4,
  },
  {
    icon: Share2,
    label: "Social",
    className: "bottom-24 right-8",
    delay: 0.8,
  },
];

export default function HeroVisual() {
  return (
    <div className="gradient-navy-royal relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden p-8 pb-16">
      <div className="absolute inset-0 opacity-40">
        <GrowthChart className="h-full w-full" />
      </div>

      {chips.map(({ icon: Icon, label, className, delay }) => (
        <motion.div
          key={label}
          className={`absolute inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur-sm ${className}`}
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay }}
        >
          <Icon size={13} className="text-highlight" />
          {label}
        </motion.div>
      ))}

      <div className="relative flex h-24 items-end gap-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-highlight"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.07, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  );
}
