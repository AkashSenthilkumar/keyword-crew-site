import { motion } from "framer-motion";
import growthImg from "../assets/growth.jpg";
import { whyChooseUs } from "../data/content";
import Reveal, { RevealItem, RevealStagger } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-dot-grid relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
              Fresh thinking. Modern strategies.
              <br />
              Real business growth.
            </h2>
            <p className="mt-6 text-secondary/70 leading-relaxed">
              Keyword Crew is a growing digital marketing agency in Coimbatore
              founded with a passion for helping businesses build a strong
              online presence and achieve sustainable digital growth. As a
              startup, we bring fresh ideas, creative thinking, and modern
              marketing strategies to every project, offering personalized
              solutions that help businesses compete and succeed in today's
              digital world.
            </p>
            <p className="mt-4 text-secondary/70 leading-relaxed">
              We offer comprehensive 360&deg; digital marketing services
              designed to help businesses build, grow, and scale their
              online presence &mdash; from SEO and paid advertising to social
              media, branding, and website &amp; app development &mdash;
              making Keyword Crew your trusted partner for business growth
              and digital success.
            </p>

            <div className="mt-8 grid gap-4 rounded-2xl bg-secondary/5 p-6">
              <p className="text-sm font-semibold text-secondary">
                Not a freelancer &mdash; a crew.
              </p>
              <p className="text-sm text-secondary/70 leading-relaxed">
                Keyword Crew is a team of passionate friends with expertise in
                digital marketing, SEO, social media, ads, branding, content,
                and web &amp; app development. By combining our diverse
                skills, we deliver end-to-end solutions tailored to each
                client's unique goals &mdash; with creativity, transparency,
                timely execution, and measurable results.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={growthImg}
                  alt="Growth, engineered"
                  className="h-56 w-full object-cover sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xl font-bold text-white">
                    Growth, engineered.
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Every strategy is measured, reported, and optimized.
                  </p>
                </div>
              </motion.div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <div className="h-full rounded-2xl border border-accent/50 p-6 transition-shadow hover:shadow-md">
                  <h3 className="text-lg font-bold text-secondary">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-sm text-secondary/70 leading-relaxed">
                    To become a trusted digital marketing agency in India,
                    empowering businesses with innovative digital marketing
                    and performance-driven growth solutions.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="h-full rounded-2xl gradient-navy-royal p-6 text-white">
                  <h3 className="text-lg font-bold">Our Mission</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    To help businesses grow through result-driven SEO, ads,
                    social, and web &amp; app development &mdash; delivering
                    measurable ROI and long-term digital success.
                  </p>
                </div>
              </Reveal>
            </div>

            <RevealStagger className="grid grid-cols-2 gap-4">
              {whyChooseUs.map(({ icon: Icon, title }) => (
                <RevealItem key={title}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="flex h-full items-start gap-3 rounded-xl border border-accent/40 p-4 transition-shadow hover:shadow-md"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg gradient-royal-sky text-white">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-medium text-secondary">
                      {title}
                    </span>
                  </motion.div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
