import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, ArrowRight } from "lucide-react";

const HackathonCTA = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      {/* Background effects */}

      <div className="container-tight relative z-10">
        <div className="relative overflow-hidden rounded-[2rem]backdrop-blur-xl p-8 md:p-12 lg:p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          {/* inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,112,20,0.12),transparent_40%)] pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F87014]/25 bg-[#F87014]/10 text-[#F87014] text-sm font-medium mb-6 shadow-[0_0_20px_rgba(248,112,20,0.12)]">
              <Trophy className="h-4 w-4" />
              Featured Event
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight">
              AlgoHeist{" "}
              <span className="text-[#F87014] drop-shadow-[0_0_16px_rgba(248,112,20,0.28)]">
                2026
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/65 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              A competitive DSA coding contest bringing together skilled student developers.
              Test your algorithmic thinking, speed, and problem-solving under pressure.
            </p>

            {/* Event Details */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/85">
                <Calendar className="h-5 w-5 text-[#F87014]" />
                <span className="font-medium">28th February 2026</span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/85">
                <MapPin className="h-5 w-5 text-[#F87014]" />
                <span className="font-medium">DIT Pune, Campus</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/hackathon">
                <Button
                  size="xl"
                  className="bg-[#F87014] text-white hover:bg-[#df6412] border border-[#F87014]/60 shadow-[0_0_30px_rgba(248,112,20,0.28)]"
                >
                  Register Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <Link to="/sponsors">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white/15 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
                >
                  Sponsor This Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonCTA;