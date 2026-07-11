import { Facebook, Instagram, Linkedin } from "./SocialIcons";
import logoIcon from "../assets/logo-icon.png";
import { contact, socials } from "../data/content";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: socials.instagram, icon: Instagram },
  { label: "Facebook", href: socials.facebook, icon: Facebook },
  { label: "LinkedIn", href: socials.linkedin, icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-secondary py-14 text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logoIcon} alt="" className="h-9 w-auto" />
              <span className="text-lg font-extrabold tracking-tight text-white">
                KEYWORD CREW
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              The Crew Behind Your Digital Growth. A 360&deg; digital
              marketing agency in Coimbatore helping brands build visibility,
              generate leads, and grow online.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-highlight">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={contact.phoneHref} className="hover:text-highlight">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-highlight"
                >
                  {contact.email}
                </a>
              </li>
              <li className="leading-relaxed">{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Keyword Crew. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
