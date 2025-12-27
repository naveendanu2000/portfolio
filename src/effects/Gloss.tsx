import { useRef } from "react";
import gsap from "gsap";

const Gloss = () => {
  function onMouseEnter() {
    gsap.to(glossRef.current, {
      y: "28%",
      duration: 0.65,
      ease: "power1.inOut",
    });
  }

  function onMouseLeave() {
    gsap.to(glossRef.current, {
      y: 0,
      duration: 0.65,
      ease: "power1.outIn",
    });
  }

  const glossRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={glossRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute z-10 h-[140%] ring-amber-600 w-full 
            bg-linear-[226deg,rgba(255,255,255,0.3)_10%,rgba(255,255,255,0.4)_30%,rgba(255,255,255,0.1)_48%,rgba(255,255,255,0)_60%] bottom-0"
    />
  );
};

export default Gloss;
