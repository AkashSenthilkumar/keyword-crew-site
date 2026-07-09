import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoHorizontal from "../assets/logo-horizontal.png";
import { contact } from "../data/content";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logoHorizontal} alt="Keyword Crew" className="h-10 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-secondary/80 transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 gradient-royal-sky transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full gradient-royal-sky px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 lg:inline-block"
        >
          Get a Quote
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-secondary lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-accent/40 bg-white px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-secondary/80 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block rounded-full gradient-royal-sky px-5 py-2.5 text-sm font-semibold text-white"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
