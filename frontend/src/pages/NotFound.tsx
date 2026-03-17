import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import LightRays from "@/components/LightRays";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6">
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-8 md:p-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F87014]/20 bg-[#F87014]/10 shadow-[0_0_30px_rgba(248,112,20,0.12)]">
            <AlertTriangle className="h-8 w-8 text-[#F87014]" />
          </div>

          <p className="mb-3 inline-flex items-center rounded-full border border-[#F87014]/20 bg-[#F87014]/10 px-4 py-2 text-sm font-medium text-[#F87014]">
            Error 404
          </p>

          <h1 className="mb-4 text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
            Page{" "}
            <span className="text-[#F87014] drop-shadow-[0_0_14px_rgba(248,112,20,0.3)]">
              Not Found
            </span>
          </h1>

          <p className="mb-3 text-lg text-white/70">
            The route you tried does not exist.
          </p>

          <p className="mb-8 text-sm text-white/45 break-all">
            Requested path: <span className="text-white/70">{location.pathname}</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F87014] px-6 py-3 font-medium text-white transition hover:bg-[#ff8b3d] shadow-[0_0_22px_rgba(248,112,20,0.2)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Return Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 font-medium text-white/85 transition hover:bg-white/[0.08]"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;