import { motion } from "framer-motion";
import { ArrowRight, Search, MousePointerClick, Share2 } from "lucide-react";
import logoHero from "../assets/logo-hero-3d.png";
import { contact, stats } from "../data/content";
import Counter from "./Counter";

const badges = [
  { icon: Search, label: "SEO", className: "-top-4 -left-8", delay: 0 },
  {
    icon: MousePointerClick,
    label: "Ads",
    className: "top-1/3 -right-10",
    delay: 0.6,
  },
  {
    icon: Share2,
    label: "Social",
    className: "-bottom-6 left-4",
    delay: 1.2,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="gradient-navy-royal relative overflow-hidden pt-32 pb-20 text-white"
    >
      <motion.div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-highlight/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-highlight uppercase">
            Digital Marketing Agency &middot; Coimbatore
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            The Crew Behind Your{" "}
            <span className="bg-gradient-to-r from-highlight to-white bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Keyword Crew is a growing digital marketing agency helping brands
            build a strong online presence with fresh ideas, creative
            thinking, and modern, ROI-focused marketing strategies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-secondary shadow-lg"
            >
              Get Started <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Services
            </motion.a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
            <a href={contact.phoneHref} className="hover:text-white">
              {contact.phone}
            </a>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <a href={`mailto:${contact.email}`} className="hover:text-white">
              {contact.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative rounded-3xl bg-white/5 p-10 backdrop-blur-sm ring-1 ring-white/10">
            <motion.img
              src={logoHero}
              alt="Keyword Crew"
              className="w-64 drop-shadow-2xl sm:w-80"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {badges.map(({ icon: Icon, label, className, delay }) => (
              <motion.div
                key={label}
                className={`absolute flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-secondary shadow-lg ${className}`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full gradient-royal-sky text-white">
                  <Icon size={12} />
                </span>
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-6 border-t border-white/10 px-6 pt-10 sm:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <div className="text-3xl font-extrabold text-white sm:text-4xl">
              <Counter to={stat.to} suffix={stat.suffix} />
            </div>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
