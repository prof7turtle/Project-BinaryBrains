import Layout from "@/components/layout/Layout";
import { Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Harshil Bohra",
    role: "Lead Organizer",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=HB&backgroundColor=f97316",
    github: "https://github.com/harshilbohra",
    linkedin: "https://www.linkedin.com/in/harshilbohra/",
  },
  {
    name: "Abhishek Gaikwad",
    role: "Co-Organizer",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=AG&backgroundColor=f97316",
    github: "",
    linkedin: "",
  },
  {
    name: "Sarika Pabalkar",
    role: "Faculty Coordinator",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=SP&backgroundColor=f97316",
    github: "",
    linkedin: "",
  },
  {
    name: "Abhijeet Fulpgare",
    role: "DSA Lead",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=AF&backgroundColor=f97316",
    github: "",
    linkedin: "",
  },
  {
    name: "Prathmesh Alkute",
    role: "Web Development Lead",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=PA&backgroundColor=f97316",
    github: "",
    linkedin: "",
  },
  {
    name: "Krishna Ganjewar",
    role: "Design Lead",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=KG&backgroundColor=f97316",
    github: "",
    linkedin: "",
  },
];

const Team = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,112,20,0.14),transparent_30%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

          <div className="relative max-w-5xl mx-auto text-center z-10">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-[#F87014]/25 bg-[#F87014]/10 text-[#F87014] text-sm font-medium mb-5 shadow-[0_0_20px_rgba(248,112,20,0.08)]">
              Meet the Team
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              The People Behind{" "}
              <span className="text-[#F87014] drop-shadow-[0_0_16px_rgba(248,112,20,0.22)]">
                Binary Brains
              </span>
            </h1>

            <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
              A team of organizers, mentors, and builders working to create
              meaningful technical experiences and a stronger developer
              community at DIT Pune.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="relative px-6 pb-24 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => {
                const hasGithub = member.github && member.github.trim() !== "";
                const hasLinkedin = member.linkedin && member.linkedin.trim() !== "";

                return (
                  <div
                    key={member.name}
                    className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition duration-300 hover:border-[#F87014]/30 hover:bg-[#F87014]/[0.04] hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-4 border-[#F87014]/20 transition duration-300 group-hover:border-[#F87014]/50"
                      />
                    </div>

                    <h3 className="font-display font-semibold text-lg text-white mb-1">
                      {member.name}
                    </h3>

                    <p className="text-sm text-[#F87014] font-medium mb-4">
                      {member.role}
                    </p>

                    {(hasGithub || hasLinkedin) && (
                      <div className="flex items-center justify-center gap-3">
                        {hasGithub && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 hover:border-[#F87014]/30 hover:bg-[#F87014]/10 hover:text-[#F87014] transition-colors"
                            aria-label={`${member.name} GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}

                        {hasLinkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 hover:border-[#F87014]/30 hover:bg-[#F87014]/10 hover:text-[#F87014] transition-colors"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;