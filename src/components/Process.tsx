import { motion } from "framer-motion";
import processIllustration from "../assets/illustrations/process-team.svg";
import { process } from "../data/content";
import Reveal, { RevealItem, RevealStagger } from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <img
            src={processIllustration}
            alt=""
            className="mx-auto mb-4 w-full max-w-md"
          />
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            From Discovery to Sustainable Growth
          </h2>
        </Reveal>

        <RevealStagger
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
          stagger={0.1}
        >
          {process.map((item, i) => (
            <RevealItem key={item.step} className="relative">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="inline-block bg-gradient-to-br from-primary to-highlight bg-clip-text text-5xl font-extrabold text-transparent"
              >
                {item.step}
              </motion.div>
              <h3 className="mt-3 text-lg font-bold text-secondary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-secondary/70 leading-relaxed">
                {item.description}
              </p>
              {i < process.length - 1 && (
                <div className="mt-6 hidden h-px w-full gradient-royal-sky lg:block" />
              )}
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
