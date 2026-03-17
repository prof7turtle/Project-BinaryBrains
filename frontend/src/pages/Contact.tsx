import { useState } from "react";
import Layout from "@/components/layout/Layout";
import LightRays from "@/components/LightRays";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const isEmailValid = (e: string) => /\S+@\S+\.\S+/.test(e);

  const isFormValid =
    name.trim() !== "" &&
    isEmailValid(email) &&
    subject.trim() !== "" &&
    message.trim() !== "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mlgdqkan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        throw new Error(errBody?.error || "Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      toast({
        title: "Send failed",
        description: "Could not send your message. Try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/prof7turtle/Project-BinaryBrains",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/binarybrains-dit",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/binarybrains.dit",
      label: "Instagram",
    },
  ];

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

        {/* Overlays */}
        <div className="absolute inset-0 z-[1] bg-black/70" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(248,112,20,0.18),transparent_30%)]" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-black/30 to-black" />

        <div className="relative z-10">
          {/* Hero */}
          <section className="px-6 pt-24 pb-14 md:pt-28 md:pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-[#F87014]/25 bg-[#F87014]/10 text-[#F87014] text-sm font-medium mb-5 shadow-[0_0_20px_rgba(248,112,20,0.10)]">
                Contact Us
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                Get in{" "}
                <span className="text-[#F87014] drop-shadow-[0_0_16px_rgba(248,112,20,0.28)]">
                  Touch
                </span>
              </h1>

              <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
                Have questions, want to join, or looking to sponsor? Reach out
                and say something useful.
              </p>
            </div>
          </section>

          {/* Contact Content */}
          <section className="px-6 pb-24">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 md:p-8">
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white/85 mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-12 border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus-visible:ring-[#F87014] focus-visible:border-[#F87014]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/85 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus-visible:ring-[#F87014] focus-visible:border-[#F87014]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-white/85 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="h-12 border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus-visible:ring-[#F87014] focus-visible:border-[#F87014]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/85 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={6}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus-visible:ring-[#F87014] focus-visible:border-[#F87014] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-white mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl border border-[#F87014]/20 bg-[#F87014]/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-[#F87014]" />
                      </div>

                      <div>
                        <p className="font-medium text-white mb-1">Email</p>
                        <a
                          href="mailto:binarybrains.dit@gmail.com"
                          className="text-white/60 hover:text-[#F87014] transition-colors block"
                        >
                          binarybrains.dit@gmail.com
                        </a>
                        <a
                          href="mailto:23510628.dit@dypvp.edu.in"
                          className="text-white/60 hover:text-[#F87014] transition-colors block"
                        >
                          23510628.dit@dypvp.edu.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl border border-[#F87014]/20 bg-[#F87014]/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-[#F87014]" />
                      </div>

                      <div>
                        <p className="font-medium text-white mb-1">Address</p>
                        <p className="text-white/60 leading-relaxed">
                          Dr. D. Y. Patil Institute of Technology,
                          <br />
                          Pimpri, Pune, Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 md:p-8">
                  <h3 className="font-display font-semibold text-lg text-white mb-4">
                    Follow Us
                  </h3>

                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/80 hover:bg-[#F87014] hover:text-white hover:border-[#F87014] transition-colors"
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#F87014]/20 bg-[#F87014]/[0.06] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 md:p-8">
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    Interested in Sponsoring?
                  </h3>

                  <p className="text-white/65 text-sm mb-5 leading-relaxed">
                    For sponsorship inquiries, contact the organizer directly
                    instead of sending a vague message and hoping for magic.
                  </p>

                  <div className="text-sm">
                    <p className="font-medium text-white">Harshil Bohra</p>
                    <p className="text-white/55 mb-4">
                      Organizer – AlgoHeist 2026
                    </p>

                    <div className="flex gap-2">
                      <a
                        href="https://github.com/harshilbohra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/80 hover:bg-[#F87014] hover:text-white hover:border-[#F87014] transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/harshilbohra/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/80 hover:bg-[#F87014] hover:text-white hover:border-[#F87014] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;