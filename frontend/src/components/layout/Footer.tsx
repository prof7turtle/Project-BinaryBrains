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
      className="relative isolate min-h-[65vh] overflow-hidden text-white"
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
      <div className="relative z-10 mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-10 px-4 pt-10 pb-4 sm:px-6 md:grid-cols-2 lg:px-8">
        {/* Nav links */}
        <nav className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:flex md:flex-col md:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white/90 hover:text-white font-display font-semibold text-lg sm:text-xl leading-tight transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex flex-col justify-between gap-7 md:items-end">
          <div>
            <p className="text-white/80 text-sm mb-1 font-medium">
              DIT Pune, Maharashtra, India
            </p>
            <a
              href="mailto:binarybrains.dit@gmail.com"
              className="block text-white/70 hover:text-white text-sm transition-colors"
            >
              binarybrains.dit@gmail.com
            </a>
            <a
              href="mailto:23510628.dit@dypvp.edu.in"
              className="block text-white/70 hover:text-white text-sm transition-colors"
            >
              23510628.dit@dypvp.edu.in
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-lg bg-white/10 p-2 hover:bg-white/20 transition-colors"
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
          style={{ fontSize: "clamp(3.6rem, 16vw, 18rem)", lineHeight: 0.85 }}
        >
          BinaryBrains
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mx-auto flex w-full max-w-screen-xl flex-col gap-3 border-t border-white/10 px-4 py-4 text-sm text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <span>Copyright 2026 BinaryBrains DIT. All rights reserved.</span>
        <span className="text-white/50">Made with orange by the BinaryBrains Team</span>

        <div className="flex flex-wrap gap-4 sm:gap-6">
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