import Layout from "@/components/layout/Layout";
import { Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We encourage creative thinking and bold approaches to real problem-solving.",
    },
    {
      icon: Heart,
      title: "Community",
      description:
        "We build a supportive environment where people learn, grow, and win together.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We push for higher standards in execution, learning, and team culture.",
    },
  ];

  const focusAreas = ["DSA", "Web Dev", "AI/ML", "Web3", "Hackathons", "Open Source"];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/team-photo-bb.JPG)" }}
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <p className="inline-flex px-4 py-2 rounded-full border border-[#F87014]/25 bg-[#F87014]/10 text-[#F87014] text-sm font-medium mb-5 shadow-[0_0_20px_rgba(248,112,20,0.10)]">
              About Us
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
              We Are{" "}
              <span className="text-[#F87014] drop-shadow-[0_0_16px_rgba(248,112,20,0.28)]">
                BinaryBrains
              </span>
            </h1>

            <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              The premier technical club at Dr. D. Y. Patil Institute of Technology, Pune.
              We are a community of developers, innovators, and builders working together
              to create real growth, real projects, and real impact.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.28)]">
              <h2 className="text-3xl font-display font-bold mb-4 text-white">
                Our <span className="text-[#F87014]">Mission</span>
              </h2>
              <p className="text-white/65 leading-relaxed">
                To create a strong community of tech enthusiasts who learn, build, and
                innovate together. We aim to bridge the gap between academic learning
                and industry requirements through hands-on experience, mentorship, and
                meaningful project opportunities.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.28)]">
              <h2 className="text-3xl font-display font-bold mb-4 text-white">
                Our <span className="text-[#F87014]">Vision</span>
              </h2>
              <p className="text-white/65 leading-relaxed">
                We envision BinaryBrains as a leading student-driven tech community that
                inspires innovation, confidence, collaboration, and long-term professional growth.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="px-6 py-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                What We Focus On
              </h2>
              <p className="text-white/65 max-w-2xl mx-auto">
                Our activities span multiple domains so members can explore, build, and sharpen practical skills.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition hover:border-[#F87014]/30 hover:bg-[#F87014]/[0.05]"
                >
                  <span className="font-display font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 py-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-white/65 max-w-2xl mx-auto">
                The principles that shape how we learn, work, and grow as a team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition hover:border-[#F87014]/30 hover:bg-[#F87014]/[0.04]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F87014]/10 border border-[#F87014]/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-[#F87014]" />
                  </div>

                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {value.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;