import Layout from "@/components/layout/Layout";
import ideavoLogo from "@/assets/wordmark-dark.png";
import unstopLogo from "@/assets/Unstop/Unstop_idGARQA_PG_0.png";

const Sponsors = () => {
  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#F87014]/15 blur-[120px]" />
          <div className="absolute bottom-[8%] right-[10%] h-[260px] w-[260px] rounded-full bg-[#F87014]/10 blur-[100px]" />
        </div>

        <div className="relative z-10 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#F87014]/25 bg-[#F87014]/10 px-4 py-2 text-sm font-medium text-[#F87014]">
              Event Partners
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              Our Official
              <span className="text-[#F87014]"> Partners</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-white/65 text-base md:text-lg">
              Meet the organizations supporting AlgoHeist 2026.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/60">
                  Sponsored By
                </p>
                <img
                  src={ideavoLogo}
                  alt="IDEAVO AI"
                  className="mx-auto h-12 md:h-16 w-auto object-contain"
                />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/60">
                  Powered By
                </p>
                <img
                  src={unstopLogo}
                  alt="Unstop"
                  className="mx-auto h-12 md:h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sponsors;
