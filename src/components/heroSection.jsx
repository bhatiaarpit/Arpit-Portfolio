import { motion } from "framer-motion";

const HeroSection = () => {
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
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-8 max-w-2xl text-base leading-8 text-graphite-mute sm:text-lg"
        >
          I am a frontend engineer and designer based in Bengaluru, building commerce experiences, product interfaces, and experiments with React, Shopify, and modern web tools. I care about useful details, fast feedback, and work that makes complicated things feel simple.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
