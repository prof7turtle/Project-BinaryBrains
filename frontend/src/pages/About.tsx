  import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage creative thinking and novel approaches to problem-solving.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a supportive environment where everyone can learn and grow together.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url(/team-photo-bb.JPG)" }}
  >
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
    <p className="text-orange-400 font-medium mb-3">About Us</p>
    <h1 className="text-4xl md:text-5xl font-bold mb-5">
      We Are <span className="text-orange-400">BinaryBrains</span>
    </h1>
    <p className="text-gray-200 text-lg leading-relaxed">
              The premier technical club at Dr. D. Y. Patil Institute of Technology, Pune. 
              We're a community of passionate developers, innovators, and tech enthusiasts 
              working together to build the future.
    </p>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white border-l-4 border-orange-500 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Mission</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
                To create a vibrant community of tech enthusiasts who learn, build, and 
                innovate together. We aim to bridge the gap between academic learning 
                and industry requirements by providing hands-on experience, mentorship, 
                and real-world project opportunities.
        </p>
      </div>

            {/* Vision */}
          <div className="bg-white border-l-4 border-orange-500 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Vision</span>
          </h2>
        <p className="text-gray-600 leading-relaxed">
          We envision BinaryBrains as a leading student-driven tech community that
          inspires innovation, confidence, and professional growth.
       </p>
      </div>

    </div>
  </div>
</section>

      {/* What We Do */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What We Focus On
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our activities span across multiple domains of technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["DSA", "Web Dev", "AI/ML", "Web3", "Hackathons", "Open Source"].map((item) => (
              <div
                key={item}
                className="card-elevated p-4 text-center hover:border-primary/50 transition-colors"
              >
                <span className="font-display font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-elevated p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
