import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Trophy, 
  Users, 
  Code2, 
  Laptop,
  ArrowRight,
  CheckCircle2,
  Gift,
  HelpCircle
} from "lucide-react";

const timeline = [
  { phase: "Registration Opens", date: "1st February 2026", status: "upcoming" },
  { phase: "Registration Closes", date: "20th February 2026", status: "upcoming" },
  { phase: "Round 1 (Online)", date: "21st February 2026, 10:00 AM", status: "upcoming" },
  { phase: "Round 2 (Offline)", date: "28th February 2026, 12:00 PM", status: "upcoming" },
  { phase: "Results & Prize Distribution", date: "28th February 2026, 4:00 PM", status: "upcoming" },
];

const tracks = [
  "Arrays & Strings",
  "Hashing & Maps",
  "Recursion & Backtracking",
  "Trees & Graphs",
  "Dynamic Programming",
  "Greedy Algorithms",
];

const prizes = [
  { position: "2nd", prize: "???", color: "from-slate-300 to-slate-400", height: "h-28", order: 1 },
  { position: "1st", prize: "???", color: "from-yellow-400 to-amber-500", height: "h-36", order: 2 },
  { position: "3rd", prize: "???", color: "from-orange-300 to-orange-400", height: "h-24", order: 3 },
];

const Hackathon = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-tight relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Code2 className="h-4 w-4" />
              Competitive DSA Contest
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <img 
                src="/algo-logo.png" 
                alt="AlgoHeist Logo" 
                className="h-16 md:h-20 object-contain drop-shadow-lg"
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground">
                AlgoHeist <span className="gradient-text">2026</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Test your algorithmic prowess in our flagship coding competition. 
              Compete with the best, solve challenging problems, and win exciting prizes!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">21st - 28th February 2026</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">DIT Pune, Campus</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">5.5 Hours Total</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" id="register">
                Register Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Link to="/sponsors">
                <Button variant="outline" size="xl">
                  Sponsor This Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Format */}
      <section className="py-10 md:py-14">
        <div className="container-tight">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Event Format
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-elevated p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">Round 1</h3>
                  <p className="text-sm text-muted-foreground">Preliminary Round</p>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Duration: 2.5 Hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Mode: Online
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Objective: Shortlisting top performers
                </li>
              </ul>
            </div>

            <div className="card-elevated p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">Round 2</h3>
                  <p className="text-sm text-muted-foreground">Final Round</p>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Duration: 3 Hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Mode: Offline, Proctored
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Location: DIT Pune Campus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Tracks */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container-tight">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Problem Tracks
            </h2>
            <p className="text-muted-foreground">Topics covered in the competition</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {tracks.map((track) => (
              <div key={track} className="card-elevated p-4 text-center">
                <span className="font-medium text-foreground">{track}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-10 md:py-14">
        <div className="container-tight">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Prizes & Rewards
            </h2>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              Exciting prizes to be revealed soon!
            </p>
          </div>

          {/* Podium Design */}
          <div className="flex items-end justify-center gap-3 md:gap-6 max-w-2xl mx-auto mb-8 pt-10">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
              <div className="card-elevated p-4 md:p-6 text-center mb-2 w-24 md:w-32">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <Trophy className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground">2nd</h3>
                <div className="flex items-center justify-center gap-1 text-muted-foreground">
                  <HelpCircle className="h-4 w-4" />
                  <span className="text-sm">Hidden</span>
                </div>
              </div>
              <div className="w-24 md:w-32 h-20 md:h-28 bg-gradient-to-t from-slate-400 to-slate-300 rounded-t-lg flex items-center justify-center shadow-lg">
                <span className="text-3xl md:text-4xl font-display font-bold text-white/90">2</span>
              </div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center -mt-6 md:-mt-8">
              <div className="card-elevated p-4 md:p-6 text-center mb-2 w-28 md:w-36 border-2 border-yellow-400/50">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-2 shadow-lg ring-4 ring-yellow-400/30">
                  <Trophy className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">1st</h3>
                <div className="flex items-center justify-center gap-1 text-muted-foreground">
                  <HelpCircle className="h-4 w-4" />
                  <span className="text-sm">Hidden</span>
                </div>
              </div>
              <div className="w-28 md:w-36 h-28 md:h-36 bg-gradient-to-t from-amber-500 to-yellow-400 rounded-t-lg flex items-center justify-center shadow-lg">
                <span className="text-4xl md:text-5xl font-display font-bold text-white/90">1</span>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
              <div className="card-elevated p-4 md:p-6 text-center mb-2 w-24 md:w-32">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <Trophy className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground">3rd</h3>
                <div className="flex items-center justify-center gap-1 text-muted-foreground">
                  <HelpCircle className="h-4 w-4" />
                  <span className="text-sm">Hidden</span>
                </div>
              </div>
              <div className="w-24 md:w-32 h-16 md:h-24 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-lg flex items-center justify-center shadow-lg">
                <span className="text-3xl md:text-4xl font-display font-bold text-white/90">3</span>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground">
             • Certificates for all participants • Goodies from sponsors • Networking opportunities
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container-tight">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Event Timeline
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative  ">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-24 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full" />
              
              {timeline.map((item, index) => (
                <div key={item.phase} className="relative flex gap-6 md:gap-8 pb-8 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg">
                      <span className="text-lg md:text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 card-elevated p-4 md:p-6 mt-1">
                    <h4 className="font-display font-bold text-lg md:text-xl text-foreground mb-1">
                      {item.phase}
                    </h4>
                    <p className="text-base md:text-lg text-primary font-medium flex items-center gap-2">
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
      <section className="py-10 md:py-14">
        <div className="container-tight">
          <div className="card-elevated p-8 md:p-12 text-center gradient-bg">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Ready to Test Your Skills?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Register now and compete with the best programmers. Limited spots available!
            </p>
            <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90">
              Register Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hackathon;
