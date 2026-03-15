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
          className="ml-2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Hackathon
        </Link>
      }
    />
  );
}
