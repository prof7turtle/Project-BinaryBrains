import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Brain,
  Code,
  Globe,
  Rocket,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  label: string;
  highlights: string[];
  className: string;
  glowClass: string;
};

const features: Feature[] = [
  {
    icon: Code,
    title: "DSA & Competitive Programming",
    description:
      "Master data structures and algorithms through weekly contests, study groups, and mentorship sessions.",
    label: "Problem Solving",
    highlights: ["Weekly contests", "Study groups", "Mentorship"],
    className: "md:col-span-2 xl:col-span-3 xl:row-span-2",
    glowClass: "from-[#F87014]/24 via-[#F87014]/10 to-transparent",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Build modern web applications using React, Node.js, and cutting-edge technologies.",
    label: "Full Stack",
    highlights: ["React", "Node.js", "Modern UI"],
    className: "xl:col-span-3",
    glowClass: "from-cyan-500/18 via-cyan-500/6 to-transparent",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Explore the world of artificial intelligence, deep learning, and data science.",
    label: "Intelligence",
    highlights: ["Deep learning", "Data science", "Applied AI"],
    className: "xl:col-span-3",
    glowClass: "from-violet-500/18 via-violet-500/6 to-transparent",
  },
  {
    icon: Rocket,
    title: "Web3 & Blockchain",
    description:
      "Dive into decentralized technologies, smart contracts, and the future of the internet.",
    label: "Decentralized",
    highlights: ["Smart contracts", "Web3", "Protocol thinking"],
    className: "xl:col-span-2",
    glowClass: "from-emerald-500/18 via-emerald-500/6 to-transparent",
  },
  // {
  //   icon: Users,
  //   title: "Open Source",
  //   description:
  //     "Contribute to real-world projects and build your portfolio with meaningful contributions.",
  //   label: "Community",
  //   highlights: ["Real projects", "Portfolio depth", "Collaboration"],
  //   className: "xl:col-span-2",
  //   glowClass: "from-sky-500/18 via-sky-500/6 to-transparent",
  // },
  {
    icon: Zap,
    title: "Hackathons",
    description:
      "Participate in and organize hackathons to solve real problems and win exciting prizes.",
    label: "Build Fast",
    highlights: ["Team sprints", "Live demos", "Winning mindset"],
    className: "xl:col-span-2",
    glowClass: "from-amber-500/18 via-amber-500/6 to-transparent",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-black pt-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,112,20,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(248,112,20,0.08),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="container-tight relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F87014]/20 bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-[#F87014] backdrop-blur-md">
              What We Do
            </span>
            <h2 className="text-3xl font-display font-bold text-white md:text-5xl">
              Focus Areas
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              We cultivate expertise across multiple domains, preparing our members
              for the challenges of the modern tech industry.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#F87014]" />
            6 focused tracks. One builder community.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:auto-rows-[minmax(220px,auto)] xl:grid-cols-6">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={cn(
                "group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#F87014]/30 hover:bg-white/[0.06] md:p-7",
                feature.className,
              )}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br", feature.glowClass)} />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F87014]/10 blur-3xl transition duration-300 group-hover:bg-[#F87014]/20" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)]" />

              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-3 py-3 backdrop-blur-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F87014]/20 bg-[#F87014]/10 text-[#F87014]">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                        {feature.label}
                      </p>
                      <p className="text-sm font-medium text-white/80">
                        BinaryBrains Track
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 p-2 text-white/45 transition-colors group-hover:text-white/80">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="max-w-[18ch] font-display text-2xl font-semibold leading-tight text-white md:text-[1.75rem]">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 md:text-[15px]">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {feature.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
