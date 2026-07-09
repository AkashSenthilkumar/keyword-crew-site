import { industries } from "../data/content";
import Reveal from "./Reveal";

const loopedIndustries = [...industries, ...industries];

export default function Industries() {
  return (
    <section
      id="industries"
      className="gradient-navy-royal overflow-hidden py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-highlight">
            Industries We Serve
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Growth Strategies Built for Every Sector
          </h2>
        </Reveal>
      </div>

      <div className="pause-on-hover marquee-mask mt-14">
        <div className="marquee-track animate-marquee flex w-max gap-4">
          {loopedIndustries.map((industry, i) => (
            <span
              key={`${industry}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/15"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
