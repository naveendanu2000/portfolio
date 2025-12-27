import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Button({ text }: { text: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true }).fromTo(
      glowRef.current,
      {
        scale: 0.2,
        opacity: 0,
        translateY:18,
      },
      {
        scale: 1,
        opacity: 0.4,
        duration: 0.3,
        translateY:0,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={() => {
        tl.current?.play();
      }}
      onMouseLeave={() => {
        tl.current?.reverse();
      }}
      className="
        relative inline-block
        px-4 py-2
        mx-3
        overflow-hidden
        isolate
        cursor-pointer
        rounded-lg"
    >
      <span className="relative z-10">{text}</span>
      <span
        ref={glowRef}
        className="
          absolute inset-0
          z-0
          bg-[radial-gradient(circle_at_bottom,#DEDEDE,transparent_100%)]
          opacity-0
          pointer-events-none"
      />
    </button>
  );
}
