import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Hackathon", path: "/hackathon" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/prof7turtle/Project-BinaryBrains", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/binarybrains-dit", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/binarybrains.dit", label: "Instagram" },
    { icon: Mail, href: "mailto:binarybrains.dit@gmail.com", label: "Email" },
  ];

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: "#F87216" }}
    >
      {/* Dark radial vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 0%, transparent 70%)",
        }}
      />

      {/* Top content */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between gap-10 px-8 pt-12 pb-4 max-w-screen-xl mx-auto">
        {/* Nav links */}
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white/90 hover:text-white font-display font-semibold text-xl leading-tight transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex flex-col justify-between gap-8 sm:items-end">
          <div>
            <p className="text-white/80 text-sm mb-1 font-medium">
              DIT Pune, Maharashtra, India
            </p>
            <a
              href="mailto:binarybrains.dit@gmail.com"
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              binarybrains.dit@gmail.com
            </a>
          </div>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative z-10 overflow-hidden leading-none select-none px-2">
        <p
          className="font-display font-bold text-white whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 16vw, 18rem)", lineHeight: 0.85 }}
        >
          BinaryBrains
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-2 px-8 py-4 border-t border-white/10 text-white/50 text-sm max-w-screen-xl mx-auto w-full">
        <span>2026 BinaryBrains DIT. All rights reserved.</span>

        <div className="flex gap-6">
          <a
            href="https://instagram.com/binarybrains.dit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/company/binarybrains-dit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/prof7turtle/Project-BinaryBrains"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;