import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[70vh] items-center pt-20 pb-14 lg:min-h-[72vh]">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6">
        <p className="mb-6 text-sm tracking-[0.18em] uppercase text-graphite-faint">
          Software Engineer
        </p>
        <h1 className="font-serif text-5xl leading-[1.1] text-graphite-ink sm:text-6xl lg:text-7xl">
          Arpit Bhatia
        </h1>
        <p className="mt-6 max-w-xl text-lg text-graphite-mute sm:text-xl">
          Frontend engineer building fast, clear web products — Shopify,
          React, and practical UX.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-graphite-ink px-5 py-3 text-sm font-medium text-graphite hover:bg-white"
            onClick={() => navigate("/my-work")}
          >
            View work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-graphite-line px-5 py-3 text-sm font-medium text-graphite-ink hover:bg-graphite-raised"
            onClick={() => navigate("/about")}
          >
            About me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
