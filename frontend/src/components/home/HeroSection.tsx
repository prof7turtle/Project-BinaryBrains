import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Aurora from "../Aurora";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-black">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#F87014", "#B19EEF", "#F87014"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-black/60" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(248,112,20,0.20),transparent_35%)]" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/35 via-black/55 to-black" />

      {/* Subtle grid */}
      <div className="absolute inset-0 z-[2] opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px] sm:[background-size:72px_72px]" />

      <div className="container-tight relative z-10 w-full px-4 sm:px-6 section-padding py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-5 sm:mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#F87014]/25 bg-white/5 px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium text-white/80 backdrop-blur-md shadow-[0_0_30px_rgba(248,112,20,0.10)]">
            <span className="h-2 w-2 rounded-full bg-[#F87014] shadow-[0_0_10px_rgba(248,112,20,0.8)] shrink-0" />
            <span className="truncate">DIT Pune’s Tech Community</span>
          </div>

          {/* Heading */}
          <h1 className="mb-5 sm:mb-6 text-4xl font-display font-bold leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Binary Brains
            <br />
            <span className="text-[#F87014] drop-shadow-[0_0_18px_rgba(248,112,20,0.30)]">
              Build. Learn. Lead.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-8 sm:mb-10 max-w-xs text-sm leading-relaxed text-white/70 sm:max-w-xl sm:text-base md:max-w-2xl md:text-lg lg:text-xl">
            A student-led tech community at DIT Pune where developers, designers,
            and problem solvers come together to build projects, host events,
            compete in hackathons, and grow through real collaboration.
          </p>

          {/* CTA Buttons */}
          <div className="mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
            <Link to="/hackathon" className="w-full sm:w-auto">
              <Button
                size="xl"
                className="w-full bg-[#F87014] text-white hover:bg-[#df6412] border border-[#F87014]/60 shadow-[0_0_30px_rgba(248,112,20,0.28)] sm:w-auto"
              >
                Register for AlgoHeist
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;