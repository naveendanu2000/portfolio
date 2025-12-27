import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Link = ({ text }: { text: string }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
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
        opacity: 0.3,
        duration: 0.3,
        translateY: 0,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <a
      ref={linkRef}
      onMouseEnter={() => {
        console.log("Mouse Enter");
        tl.current?.play();
      }}
      onMouseLeave={() => {
        console.log("Mouse Leave");
        tl.current?.reverse();
      }}
      className="
        relative inline-block
        px-5 py-2
        mx-3
        overflow-hidden
        isolate
        rounded-4xl
        cursor-pointer"
    >
      <span className="relative z-10">{text}</span>
      <span
        ref={glowRef}
        className="
            absolute inset-0
            z-0
            -translate-x-1.2
            rounded-4xl
            bg-[radial-gradient(circle_at_bottom,#DEDEDE,transparent_100%)]
            opacity-0
            pointer-events-none"
      />
    </a>
  );
};

export default Link;
