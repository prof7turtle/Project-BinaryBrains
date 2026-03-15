import { FloatingNav } from "@/components/ui/floating-navbar";
import { Link } from "react-router-dom";

const floatingNavItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Events", link: "/events" },
  { name: "Gallery", link: "/gallery" },
  { name: "Sponsors", link: "/sponsors" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  return (
    <FloatingNav
      navItems={floatingNavItems}
      extraAction={
        <Link
          to="/hackathon"
          className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm md:px-4"
        >
          Hackathon
        </Link>
      }
    />
  );
}
