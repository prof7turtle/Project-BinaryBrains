import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LightRays from "../LightRays";
import { ArrowRight, Code2, Users, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center">
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#F87014"
          raysSpeed={1}
          lightSpread={1.2}
          rayLength={8}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={2}
          saturation={1}
        />
      </div>

      {/* Overlays for readability and premium depth */}
      <div className="absolute inset-0 z-[1] bg-black/55" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(248,112,20,0.22),transparent_32%)]" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-black/55 to-black" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="container-tight section-padding relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F87014]/25 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md shadow-[0_0_30px_rgba(248,112,20,0.10)] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#F87014] shadow-[0_0_10px_rgba(248,112,20,0.8)]" />
            DIT Pune’s Tech Community
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[0.95] tracking-tight mb-6">
            Building Developers.
            <br />
            <span className="text-[#F87014] drop-shadow-[0_0_18px_rgba(248,112,20,0.30)]">
              Creating Impact.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed">
            BinaryBrains brings together ambitious builders, problem solvers, and creators
            through hackathons, workshops, technical sessions, and real execution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link to="/hackathon">
              <Button
                size="xl"
                className="bg-[#F87014] text-white hover:bg-[#df6412] border border-[#F87014]/60 shadow-[0_0_30px_rgba(248,112,20,0.28)]"
              >
                Register for AlgoHeist
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>

            <Link to="/sponsors">
              <Button
                size="xl"
                variant="outline"
                className="border-white/15 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
              >
                Become a Sponsor
              </Button>
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F87014]/10 text-[#F87014] mx-auto mb-4 border border-[#F87014]/20">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-display font-bold text-white">500+</div>
              <div className="text-sm text-white/50 mt-1">Active Members</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F87014]/10 text-[#F87014] mx-auto mb-4 border border-[#F87014]/20">
                <Code2 className="h-6 w-6" />
              </div>
              <div className="text-3xl font-display font-bold text-white">50+</div>
              <div className="text-sm text-white/50 mt-1">Events Organized</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F87014]/10 text-[#F87014] mx-auto mb-4 border border-[#F87014]/20">
                <Trophy className="h-6 w-6" />
              </div>
              <div className="text-3xl font-display font-bold text-white">20+</div>
              <div className="text-sm text-white/50 mt-1">Hackathon Wins</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;