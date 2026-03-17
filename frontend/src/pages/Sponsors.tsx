import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import LightRays from "@/components/LightRays";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Eye,
  Target,
  CheckCircle2,
  Mail,
  Building2,
  Rocket,
  GraduationCap,
} from "lucide-react";

const benefits = [
  "Brand visibility among future software engineers and developers",
  "Opportunity to onboard early adopters and beta users for your product",
  "Brand mention during opening and closing ceremonies",
  "Logo on participation and winner certificates",
  "Social media promotion through college and club channels",
  "Access to opt-in participant profiles for hiring and outreach",
  "Logo placement on event posters, digital creatives, and contest platform",
  "Association with a student-led technical learning initiative",
];

const sponsorshipTypes = [
  { type: "Monetary sponsorship", description: "Cash support for event operations" },
  { type: "Product subscriptions", description: "Software licenses for participants" },
  { type: "Goodies & merchandise", description: "Swag for winners and participants" },
  { type: "Discount coupons", description: "Free trials for your products" },
];

const idealFor = [
  { icon: Rocket, label: "Product-based startups" },
  { icon: Building2, label: "SaaS companies" },
  { icon: Target, label: "Developer tools & platforms" },
  { icon: GraduationCap, label: "EdTech companies" },
];

const Sponsors = () => {
  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Light Rays Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
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

        {/* Global overlays */}
        <div className="absolute inset-0 z-[1] bg-black/65" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(248,112,20,0.18),transparent_28%)]" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/10 via-black/40 to-black" />

        {/* Content */}
        <div className="relative z-10">
          {/* Hero */}
          <section className="px-6 py-24 md:py-32">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-[#F87014]/25 bg-[#F87014]/10 text-[#F87014] text-sm font-medium mb-5 shadow-[0_0_20px_rgba(248,112,20,0.10)]">
                Call for Sponsors
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                Partner with{" "}
                <span className="text-[#F87014] drop-shadow-[0_0_16px_rgba(248,112,20,0.28)]">
                  AlgoHeist 2026
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto mb-8 leading-relaxed">
                Connect with talented student developers and gain meaningful visibility
                inside a focused, technically sharp community.
              </p>

              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Contact for Sponsorship
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>

          {/* About AlgoHeist */}
          <section className="px-6 pb-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex px-4 py-2 rounded-full border border-[#F87014]/20 bg-[#F87014]/10 text-[#F87014] text-sm font-medium mb-5">
                  About the Event
                </span>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  What is AlgoHeist?
                </h2>

                <p className="text-white/65 mb-4 leading-relaxed">
                  AlgoHeist is a competitive Data Structures and Algorithms coding event
                  designed to test participants on real problem-solving, algorithmic
                  thinking, and strong technical fundamentals.
                </p>

                <p className="text-white/60 leading-relaxed">
                  The contest focuses on arrays, strings, hashing, recursion, trees,
                  graphs, dynamic programming, and logical optimization. It attracts
                  motivated engineering students and early-career developers preparing
                  for interviews and technical roles.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                  <div className="w-12 h-12 rounded-xl bg-[#F87014]/10 border border-[#F87014]/20 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-[#F87014]" />
                  </div>
                  <div className="text-3xl font-display font-bold text-white">500+</div>
                  <div className="text-sm text-white/55">Expected Participants</div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                  <div className="w-12 h-12 rounded-xl bg-[#F87014]/10 border border-[#F87014]/20 flex items-center justify-center mx-auto mb-3">
                    <Eye className="h-6 w-6 text-[#F87014]" />
                  </div>
                  <div className="text-3xl font-display font-bold text-white">10K+</div>
                  <div className="text-sm text-white/55">Social Media Reach</div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center col-span-2 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                  <div className="w-12 h-12 rounded-xl bg-[#F87014]/10 border border-[#F87014]/20 flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-[#F87014]" />
                  </div>
                  <div className="text-3xl font-display font-bold text-white">100%</div>
                  <div className="text-sm text-white/55">Tech-Focused Audience</div>
                </div>
              </div>
            </div>
          </section>

          {/* Target Audience */}
          <section className="px-6 pb-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Target Audience
                </h2>
                <p className="text-white/60">Who your brand will reach</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {[
                  "Engineering Students (CS, IT, AI, DS)",
                  "Competitive Programmers",
                  "Aspiring Software Engineers",
                  "Developers Preparing for Interviews",
                ].map((audience) => (
                  <div
                    key={audience}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl shadow-[0_10px_24px_rgba(0,0,0,0.18)] hover:border-[#F87014]/30 hover:bg-[#F87014]/[0.04] transition"
                  >
                    <span className="text-sm font-medium text-white/90">{audience}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Sponsor */}
          <section className="px-6 pb-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Why Sponsor AlgoHeist?
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Sponsoring AlgoHeist gives your company direct visibility in front of a
                  focused and technically serious student developer audience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#F87014] mt-0.5 shrink-0" />
                    <span className="text-white/85">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sponsorship Types */}
          <section className="px-6 pb-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Sponsorship Options
                </h2>
                <p className="text-white/60">We are open to multiple partnership formats</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {sponsorshipTypes.map((item) => (
                  <div
                    key={item.type}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)] hover:border-[#F87014]/30 hover:bg-[#F87014]/[0.04] transition"
                  >
                    <h3 className="font-display font-semibold text-white mb-2">
                      {item.type}
                    </h3>
                    <p className="text-sm text-white/55">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ideal For */}
          <section className="px-6 pb-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Ideal For
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {idealFor.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)] hover:border-[#F87014]/30 hover:-translate-y-1 transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F87014] flex items-center justify-center mx-auto mb-4 shadow-[0_0_18px_rgba(248,112,20,0.28)]">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium text-white">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="px-6 pb-24">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-[2rem] border border-[#F87014]/20 bg-white/[0.05] p-8 md:p-12 text-center backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Ready to Partner With Us?
                </h2>

                <p className="text-white/60 mb-8 max-w-xl mx-auto">
                  For sponsorship discussions or a custom partnership package, reach out
                  to our team directly.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="text-center">
                    <p className="font-display font-semibold text-lg text-white">
                      Harshil Bohra
                    </p>
                    <p className="text-white/55">Organizer – AlgoHeist 2026</p>
                  </div>

                  <a
                    href="mailto:binarybrains.dit@gmail.com"
                    className="inline-flex items-center gap-2 text-[#F87014] hover:text-[#ff8b3d] transition"
                  >
                    <Mail className="h-4 w-4" />
                    binarybrains.dit@gmail.com
                  </a>
                </div>

                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Contact for Sponsorship
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Sponsors;