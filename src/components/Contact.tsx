import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import contactIllustration from "../assets/illustrations/contact-us.svg";
import logoIcon from "../assets/logo-icon.png";
import { contact } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24">
      <img
        src={logoIcon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 w-[28rem] opacity-[0.04]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Let's Grow Together
            </span>
            <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
              Let's Build Your Digital Growth Story
            </h2>
            <p className="mt-4 text-secondary/70 leading-relaxed">
              Whether you're launching a new startup, expanding an existing
              business, or looking to dominate your industry online, Keyword
              Crew is your trusted digital growth partner.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-royal-sky text-white">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase text-secondary/50">
                    WhatsApp / Mobile
                  </p>
                  <a
                    href={contact.phoneHref}
                    className="text-sm font-medium text-secondary hover:text-primary"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-royal-sky text-white">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase text-secondary/50">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-medium text-secondary hover:text-primary"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-royal-sky text-white">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase text-secondary/50">
                    Office
                  </p>
                  <p className="text-sm font-medium text-secondary">
                    {contact.address}
                  </p>
                </div>
              </li>
            </ul>

            <img
              src={contactIllustration}
              alt=""
              className="mt-8 hidden w-full max-w-xs sm:block"
            />
          </Reveal>

          <Reveal
            delay={0.15}
            className="lg:col-span-3"
          >
          <form
            className="grid gap-5 rounded-2xl border border-accent/40 p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const text = `Hi Keyword Crew, I'm ${data.get(
                "name"
              )} (${data.get("email")}). ${data.get("message")}`;
              window.open(
                `${contact.whatsappHref}?text=${encodeURIComponent(text)}`,
                "_blank"
              );
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase text-secondary/50">
                  Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-accent/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase text-secondary/50">
                  Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-lg border border-accent/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-secondary/50">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell us about your business and goals..."
                className="mt-2 w-full resize-none rounded-lg border border-accent/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-royal-sky px-6 py-3 text-sm font-semibold text-white shadow-sm"
            >
              Send via WhatsApp <Send size={16} />
            </motion.button>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
