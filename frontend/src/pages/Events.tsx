import Layout from "@/components/layout/Layout";
import LightRays from "@/components/LightRays";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

const pastEvents = [
  {
    title: "DSA Bootcamp 2025",
    date: "November 2025",
    description:
      "A 2-week intensive bootcamp covering arrays, trees, graphs, and dynamic programming.",
    attendees: 150,
    type: "Workshop",
  },
  {
    title: "Web Dev Weekend",
    date: "October 2025",
    description:
      "48-hour hackathon building full-stack applications with React and Node.js.",
    attendees: 80,
    type: "Hackathon",
  },
  {
    title: "AI/ML Workshop Series",
    date: "September 2025",
    description:
      "Introduction to machine learning, neural networks, and practical applications.",
    attendees: 120,
    type: "Workshop",
  },
  {
    title: "Open Source Contribution Drive",
    date: "August 2025",
    description:
      "Month-long initiative to contribute to popular open source projects.",
    attendees: 60,
    type: "Initiative",
  },
  {
    title: "CodeSprint 2025",
    date: "July 2025",
    description: "Competitive programming contest with prizes worth ₹50,000.",
    attendees: 200,
    type: "Contest",
  },
  {
    title: "Tech Talk: Industry Insights",
    date: "June 2025",
    description:
      "Guest speakers from Google, Microsoft, and startups shared their experiences.",
    attendees: 180,
    type: "Talk",
  },
];

const upcomingEvents = [
  {
    title: "AlgoHeist 2026",
    date: "22nd March 2026",
    location: "DIT Pune, Campus",
    description:
      "Our flagship DSA coding competition with exciting prizes and opportunities.",
    featured: true,
  }
];

const Events = () => {
  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Global LightRays background */}
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
        <div className="absolute inset-0 z-[1] bg-black/60" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(248,112,20,0.16),transparent_28%)]" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-black/45 to-black" />

        {/* Content */}
        <div className="relative z-10">
          {/* Hero */}
          <section className="px-6 py-24 md:py-32">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-[#F87014]/25 bg-[#F87014]/10 text-[#F87014] text-sm font-medium mb-5 shadow-[0_0_20px_rgba(248,112,20,0.10)]">
                Events & Achievements
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                Learn, Build,{" "}
                <span className="text-[#F87014] drop-shadow-[0_0_16px_rgba(248,112,20,0.28)]">
                  Compete
                </span>
              </h1>

              <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
                From workshops to hackathons, we organize experiences that push members
                to grow, build, and perform under real challenges.
              </p>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="px-6 pb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
                Upcoming Events
              </h2>

              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.title}
                    className={`relative overflow-hidden rounded-3xl border p-6 md:p-8 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.28)] ${
                      event.featured
                        ? "border-[#F87014]/30 bg-[#F87014]/[0.06]"
                        : "border-white/10 bg-white/[0.04]"
                    }`}
                  >
                    {event.featured && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F87014]/20 bg-[#F87014]/10 text-[#F87014] text-xs font-medium mb-4">
                        <Trophy className="h-3 w-3" />
                        Featured Event
                      </div>
                    )}

                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                      {event.title}
                    </h3>

                    <p className="text-white/65 mb-5 max-w-3xl">{event.description}</p>

                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/85">
                        <Calendar className="h-4 w-4 text-[#F87014]" />
                        {event.date}
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/85">
                        <MapPin className="h-4 w-4 text-[#F87014]" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Past Events */}
          <section className="px-6 pb-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
                Past Events
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <div
                    key={event.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition duration-300 hover:border-[#F87014]/30 hover:bg-[#F87014]/[0.04] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-4 gap-3">
                      <span className="px-3 py-1 rounded-full border border-[#F87014]/20 bg-[#F87014]/10 text-[#F87014] text-xs font-medium">
                        {event.type}
                      </span>
                      <span className="text-sm text-white/45">{event.date}</span>
                    </div>

                    <h3 className="font-display font-semibold text-lg text-white mb-2">
                      {event.title}
                    </h3>

                    <p className="text-sm text-white/60 mb-5 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-white/55">
                      <Users className="h-4 w-4 text-[#F87014]" />
                      {event.attendees} attendees
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Events;