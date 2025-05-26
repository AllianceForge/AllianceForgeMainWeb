import { useEffect, useRef } from "react";
import gsap from "gsap";

const Intro = ({ onFinish }) => {
  const hexagonRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(hexagonRef.current, { scale: 1.5, opacity: 0.5, duration: 1 })
      .to(glowRef.current, { scale: 2, opacity: 0, duration: 1.5 }, "-=0.5")
      .to(hexagonRef.current, { scale: 0, duration: 0.8 })
      .to(glowRef.current, { opacity: 0, duration: 0.5 }, "-=0.5")
      .call(() => onFinish());

  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div ref={glowRef} className="absolute w-60 h-60 rounded-full bg-yellow-400 opacity-75"></div>
      <div ref={hexagonRef} className="relative w-40 h-40 bg-gradient-to-r from-yellow-500 to-orange-600 clip-hexagon"></div>
    </div>
  );
};

export default Intro;
