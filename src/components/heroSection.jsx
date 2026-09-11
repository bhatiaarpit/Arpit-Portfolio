import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import growthVideo from "../assets/gowthm.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);
  const reverseFrameRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return undefined;

    const stopReversePlayback = () => {
      if (reverseFrameRef.current) {
        cancelAnimationFrame(reverseFrameRef.current);
        reverseFrameRef.current = null;
      }
    };

    const playForward = () => {
      stopReversePlayback();
      video.play().catch(() => {});
    };

    const playInReverse = () => {
      video.pause();

      const stepBackward = () => {
        video.currentTime = Math.max(0, video.currentTime - 1 / 60);

        if (video.currentTime <= 0.01) {
          video.currentTime = 0;
          playForward();
          return;
        }

        reverseFrameRef.current = requestAnimationFrame(stepBackward);
      };

      stopReversePlayback();
      reverseFrameRef.current = requestAnimationFrame(stepBackward);
    };

    video.addEventListener("ended", playInReverse);
    video.addEventListener("loadedmetadata", playForward);

    return () => {
      stopReversePlayback();
      video.removeEventListener("ended", playInReverse);
      video.removeEventListener("loadedmetadata", playForward);
      video.pause();
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden pt-20 pb-14 lg:min-h-[72vh]">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45"
        src={growthVideo}
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite via-graphite/80 to-graphite/30" />
      <div className="absolute inset-0 -z-10 bg-graphite/20" />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
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
