import { useContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ThemeContext } from "../../context/Theme";

export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true }).fromTo(
      glowRef.current,
      {
        scale: 0.2,
        opacity: 0,
        translateY: 18,
      },
      {
        scale: 1,
        opacity: 0.4,
        duration: 0.3,
        translateY: 0,
        ease: "power2.out",
      }
    );
  }, []);

  const { dark } = useContext(ThemeContext);

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
      onClick={onClick}
    >
      <span className="relative z-10">{text}</span>
      <span
        ref={glowRef}
        style={{
          backgroundImage: `radial-gradient(
          circle at bottom,
          ${dark ? "rgba(222,222,222,0.4)" : "rgba(120,119,119,1)"},
          transparent 100%)`,
        }}
        className={`
          absolute inset-0
          z-0
          opacity-0
          pointer-events-none`}
      />
    </button>
  );
}
