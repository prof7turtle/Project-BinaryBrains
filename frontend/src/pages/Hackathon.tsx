import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Clock,
  Trophy,
  Code2,
  Laptop,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Silk from "@/components/Silk";
import ideavoLogo from "@/assets/wordmark-dark.png";
import unstopLogo from "@/assets/Unstop/Unstop_idGARQA_PG_0.png";

const timeline = [
  { phase: "Registration Opens", date: "1st March 2026, 10:00 PM IST" },
  { phase: "Registration Closes", date: "20th March 2026, 10:00 PM IST" },
  { phase: "Reporting Time", date: "22nd March 2026, 8:00 AM (Late entries not allowed)" },
  { phase: "Round 1 (Offline)", date: "22nd March 2026, 9:00 AM - 10:00 AM (Sharp start)" },
  { phase: "Round 2 (Final)", date: "22nd March 2026, 10:30 AM - 12:00 PM" },
  { phase: "Prize Distribution", date: "22nd March 2026, 12:15 PM - 12:25 PM" },
];

const tracks = [
  "Arrays & Strings",
  "Hashing & Maps",
  "Recursion & Backtracking",
  "Trees & Graphs",
  "Dynamic Programming",
  "Greedy Algorithms",
];

const Hackathon = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
        {/* Global background glow for continuity */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FA7518]/10 blur-[140px]" />
          <div className="absolute top-[35%] right-[8%] h-[280px] w-[280px] rounded-full bg-[#FA7518]/[0.05] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[5%] h-[260px] w-[260px] rounded-full bg-[#FA7518]/[0.05] blur-[120px]" />
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden min-h-[88vh]">
          <div className="absolute inset-0 z-0">
            <Silk
              speed={3}
              scale={1}
              color="#FA7518"
              noiseIntensity={1.3}
              rotation={0}
            />
          </div>

          <div className="absolute inset-0 z-[1] bg-black/55" />
          <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/60 via-black/35 to-[#0a0a0a]" />
          <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(250,117,24,0.22),transparent_34%)]" />

          <div className="container-tight relative z-10 flex min-h-[88vh] items-center py-20 md:py-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-white/5 backdrop-blur-md text-sm font-medium text-orange-100 mb-6 shadow-[0_0_30px_rgba(250,117,24,0.12)]">
                <Code2 className="h-4 w-4 text-[#FA7518]" />
                Competitive DSA Contest
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
                AlgoHeist{" "}
                <span className="text-[#FA7518] drop-shadow-[0_0_18px_rgba(250,117,24,0.35)]">
                  2026
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
                Test your algorithmic prowess in our flagship coding competition.
                Solve hard problems, outthink the competition, and earn your place at the top.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center gap-2 text-[#FA7518] mb-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      Date
                    </span>
                  </div>
                  <p className="text-white font-medium">22nd March 2026</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center gap-2 text-[#FA7518] mb-2">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      Venue
                    </span>
                  </div>
                  <a href="https://maps.app.goo.gl/TMwPtnhSzaGQBnMd7" >
                  <p className="text-white font-medium">DIT Pune Campus</p>
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center gap-2 text-[#FA7518] mb-2">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      Duration
                    </span>
                  </div>
                  <p className="text-white font-medium">4 Hours 25 Minutes Total</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href = "https://unstop.com/hackathons/algoheist-2026-ultimate-dsa-showdown-dr-dy-patil-institute-of-technology-1658552" >
                <Button
                  size="xl"
                  className="bg-[#FA7518] text-white hover:bg-[#e96a14] border border-[#FA7518]/60 shadow-[0_0_30px_rgba(250,117,24,0.35)]"
                  id="register"
                > 
                Register Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/60 mb-3">
                    Sponsored By
                  </p>
                  <img
                    src={ideavoLogo}
                    alt="IDEAVO AI"
                    className="h-10 md:h-12 w-auto mx-auto object-contain"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/60 mb-3">
                    Powered By
                  </p>
                  <img
                    src={unstopLogo}
                    alt="Unstop"
                    className="h-10 md:h-12 w-auto mx-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Format */}
        <section className="relative z-10 py-14 md:py-18 border-t border-white/5">
          <div className="container-tight">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Event Format
              </h2>              
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FA7518]/10 border border-[#FA7518]/20 flex items-center justify-center">
                    <Laptop className="h-6 w-6 text-[#FA7518]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      Round 1
                    </h3>
                    <p className="text-sm text-white/60">Preliminary Round</p>
                  </div>
                </div>

                <ul className="space-y-3 text-white/75">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Date : 22nd March 2026
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Reporting Time: 8:00 am
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Duration: 60 minutes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Time: 9:00 am to 10:00 am (starts sharp)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Late entries will not be allowed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Mode: Offline
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Platform: Hackerrank
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Location: DIT Pune Campus
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Objective: Shortlisting top performers
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FA7518]/10 border border-[#FA7518]/20 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-[#FA7518]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      Round 2
                    </h3>
                    <p className="text-sm text-white/60">Final Round</p>
                  </div>
                </div>

                <ul className="space-y-3 text-white/75">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Date : 22nd March 2026
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Duration: 90 minutes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Time: 10:30 am to 12:00 pm
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Mode: Offline
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Platform: Hackerrank
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Location: DIT Pune Campus
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FA7518]" />
                    Objective: Teams compete to win AlgoHeist 2026.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Tracks */}
        <section className="relative z-10 py-14 md:py-18 border-t border-white/5">
          <div className="container-tight">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Problem Tracks
              </h2>
              <p className="text-white/65">Topics covered in the competition</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {tracks.map((track) => (
                <div
                  key={track}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 text-center text-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition hover:border-[#FA7518]/40 hover:bg-[#FA7518]/[0.06]"
                >
                  <span className="font-medium">{track}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative z-10 py-14 md:py-18 border-t border-white/5">
          <div className="container-tight">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Event Timeline
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-6 md:left-8 top-0 bottom-12 w-px bg-gradient-to-b from-[#FA7518] via-[#FA7518]/40 to-transparent" />

                {timeline.map((item, index) => (
                  <div
                    key={item.phase}
                    className="relative flex gap-6 md:gap-8 pb-8 last:pb-0"
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border-4 border-[#FA7518] flex items-center justify-center shadow-[0_0_20px_rgba(250,117,24,0.18)]">
                        <span className="text-lg md:text-xl font-bold text-[#FA7518]">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 md:p-6 mt-1 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                      <h4 className="font-display font-bold text-lg md:text-xl text-white mb-1">
                        {item.phase}
                      </h4>
                      <p className="text-base md:text-lg text-[#FA7518] font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 py-14 md:py-20 border-t border-white/5">
          <div className="container-tight">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,117,24,0.18),transparent_45%)]" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
                  Ready to Test Your Skills?
                </h2>
                <p className="text-white/70 mb-6 max-w-xl mx-auto">
                  Step into an intense coding arena where logic, speed, and algorithms decide the winner.
                </p>
                <a href="https://unstop.com/hackathons/algoheist-2026-ultimate-dsa-showdown-dr-dy-patil-institute-of-technology-1658552">
                <Button
                  size="xl"
                  className="bg-[#FA7518] text-white hover:bg-[#e96a14] shadow-[0_0_30px_rgba(250,117,24,0.3)]"
                > 
                  Register Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Hackathon;