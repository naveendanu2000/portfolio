/* eslint-disable react-hooks/purity */
import { useGSAP } from "@gsap/react";
import sun from "/assets/background-images/sun.png";
import moon from "/assets/background-images/moon.webp";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../context/Theme";

const BackgroundAnimation = () => {
  const moonRef = useRef<HTMLImageElement>(null);
  const moonParentRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const count = 600;
  const { dark } = useContext(ThemeContext);

  useGSAP(() => {
    gsap.set(moonRef.current, {
      x: -40,
      y: 0,
      opacity: dark ? 1 : 0,
    });
    gsap.set(sunRef.current, {
      x: -200,
      y: -200,
      opacity: dark ? 0 : 1,
    });
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(moonRef.current, {
      y: 200,
      x: 120,
      scale: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "max",
        scrub: true,
      },
    });

    gsap.to(sunRef.current, {
      scale: 3,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "max",
        scrub: true,
      },
    });

    gsap.to(starsRef.current, {
      x: -100,
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "max",
        scrub: true,
      },
    });
  }, []);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    tl.current?.kill();

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .timeScale(1.2)
      .to(moonParentRef.current, {
        x: -200,
        y: -200,
        opacity: 0,
        duration: 0.65,
        ease: "power4.in",
      })
      .to(bgRef.current, {
        backgroundImage:
          "radial-gradient(circle at top left, rgba(252,211,77,0.9), rgba(254,243,199,1) 30%, rgba(255,251,235,0.4) 80%, rgba(69,26,3,1) 92%, black)",
        duration: 2,
        ease: "power4.inOut",
      })
      .to(sunRef.current, {
        x: -180,
        y: -120,
        opacity: 1,
        duration: 0.65,
        ease: "power4.out",
      });
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (dark) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
  }, [dark]);

  return (
    <div
      ref={bgRef}
      className="fixed h-full w-dvw bg-[radial-gradient(circle_at_0%_0%,#4B5563_10%,#111827_45%,#000000_85%)] "
    >
      <div
        ref={starsRef}
        className="fixed h-full w-[200%] -z-20 pointer-events-none"
      >
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className={`absolute rounded-full w-[${Math.random() * 20}] w-[${
              Math.random() * 20
            }] bg-white`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>
      <img ref={sunRef} src={sun} className={` h-60  absolute left-0 top-0`} />
      <div ref={moonParentRef}>
        <img
          ref={moonRef}
          src={moon}
          className={`h-40 absolute left-0 top-0`}
        />
      </div>
    </div>
  );
};

export default BackgroundAnimation;
