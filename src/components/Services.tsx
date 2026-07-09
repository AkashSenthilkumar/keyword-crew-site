import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { services } from "../data/services";
import Reveal, { RevealItem, RevealStagger } from "./Reveal";

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  return (
    <section id="services" className="bg-dot-grid bg-secondary/[0.03] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            360&deg; Digital Marketing Services
          </h2>
          <p className="mt-4 text-secondary/70">
            Everything your brand needs to increase online visibility,
            generate quality leads, and maximize sales &mdash; under one
            crew.
          </p>
        </Reveal>

        <RevealStagger
          className="mt-14 grid gap-5 lg:grid-cols-2"
          stagger={0.06}
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isOpen = openId === service.id;
            return (
              <RevealItem key={service.id}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-accent/40 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : service.id)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <motion.span
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-royal-sky text-white"
                      >
                        <Icon size={20} />
                      </motion.span>
                      <div>
                        <h3 className="text-base font-bold text-secondary">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-primary">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`mt-2 shrink-0 text-secondary/50 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 border-t border-accent/30 pt-4">
                          <p className="text-sm text-secondary/70 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {service.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-secondary/80"
                              >
                                <Check
                                  size={15}
                                  className="mt-0.5 shrink-0 text-highlight"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
