import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/Theme";

const Link = ({ text, href }: { text: string; href: string }) => {
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

  const { dark } = useContext(ThemeContext);

  return (
    <a
      href={href}
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
        px-5 md:py-2 py-5
        mx-3
        overflow-hidden
        isolate
        lg:rounded-4xl
        cursor-pointer"
    >
      <span className="relative z-10 text-xl">{text}</span>
      <span
        ref={glowRef}
        style={{
          backgroundImage: `radial-gradient(
          circle at bottom,
          ${dark ? "rgba(222,222,222,0.4)" : "rgba(120,119,119,1)"},
          transparent 100%)`,
        }}
        className="
            absolute inset-0
            z-0
            -translate-x-1.2
            rounded-4xl
            opacity-0
            pointer-events-none"
      />
    </a>
  );
};

export default Link;
