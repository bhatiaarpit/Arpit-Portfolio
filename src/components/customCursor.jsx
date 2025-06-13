import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[9999] w-6 h-6 rounded-full bg-white mix-blend-difference pointer-events-none transition-transform duration-150 ease-out shadow-[0_0_0.5rem_0_rgba(255,255,255,0.25)] hidden md:block"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
};

export default CustomCursor;
