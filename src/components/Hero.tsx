import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import heroTeam from "../assets/hero-team.jpg";
import { contact, stats } from "../data/content";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section
      id="home"
      className="gradient-navy-royal relative overflow-hidden pt-32 pb-20 text-white"
    >
      <div className="bg-dot-grid-light pointer-events-none absolute inset-0" />
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
      <div className="pointer-events-none absolute top-24 left-1/3 h-64 w-64 rounded-full border border-dashed border-white/10" />

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
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto max-w-md lg:mx-0 lg:ml-auto"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-highlight/10 blur-2xl" />

          <motion.div
            className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={heroTeam}
              alt="Keyword Crew team analyzing campaign performance dashboards"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -top-5 right-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-white shadow-lg"
          >
            <ShieldCheck size={14} className="text-highlight" />
            Trusted, Transparent, ROI-First
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-secondary shadow-xl"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-royal-sky text-white">
              <TrendingUp size={18} />
            </span>
            <div>
              <p className="text-lg font-extrabold leading-none">
                <Counter to={11} />+
              </p>
              <p className="mt-1 text-xs font-medium text-secondary/60">
                Core Growth Services
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-6 border-t border-white/10 px-6 pt-10 sm:grid-cols-4 lg:px-8">
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
