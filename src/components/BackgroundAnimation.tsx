/* eslint-disable react-hooks/purity */
import { useGSAP } from "@gsap/react";
import sun from "/assets/background-images/sun.png";
import moon from "/assets/background-images/moon.webp";
import meteors from "/assets/background-images/meteors.webp";
import iss from "/assets/background-images/iss.webp";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../context/Theme";

const BackgroundAnimation = () => {
  const moonRef = useRef<HTMLImageElement>(null);
  const meteorRef = useRef<HTMLImageElement>(null);
  const issRef = useRef<HTMLImageElement>(null);
  const moonParentRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const issParentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const count = 600;
  const { dark } = useContext(ThemeContext);

  useGSAP(() => {
    gsap.set(moonRef.current, {
      x: dark ? -40 : -200,
      y: dark ? 0 : -200,
      opacity: dark ? 1 : 0,
    });
    gsap.set(sunRef.current, {
      x: dark ? -200 : -180,
      y: dark ? -200 : -120,
      opacity: dark ? 0 : 1,
    });
  });

  useGSAP(() => {
    gsap.set(meteorRef.current, {
      scale:
        window.innerWidth > 450
          ? window.innerHeight / 3000
          : window.innerHeight / 1000,
      rotate: -2,
      y: "-40%",
      x: "80%",
    });
    gsap.set(issRef.current, {
      scale: 1,
      y: "500",
      x: "1000%",
    });
  });

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

    gsap.to(meteorRef.current, {
      x: "-80%",
      y: "30%",
      duration: 200,
      scale: 0.001,
      ease: "power4.out",
    });

    const mm = gsap.matchMedia();

    mm.add("(max-width: 440px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "bottom +300%",
            end: "max",
            scrub: true,
          },
        })
        .fromTo(issParentRef.current, { x: 300, y: -100 }, { x: "-=320%" });
    });
    mm.add("(min-width: 441px) and (max-width: 640px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "bottom +300%",
            end: "max",
            scrub: true,
          },
        })
        .fromTo(issParentRef.current, { x: 300, y: 150 }, { x: "-=280%" });
    });

    mm.add("(min-width: 641px) and (max-width: 821px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "bottom +300%",
            end: "max",
            scrub: true,
          },
        })
        .fromTo(issParentRef.current, { x: 1000, y: "450%" }, { x: "-70%" });
    });
    mm.add("(min-width: 822px) and (max-width: 1365px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "bottom +300%",
            end: "max",
            scrub: true,
          },
        })
        .fromTo(issParentRef.current, { x: 1000, y: "750%" }, { x: "-40%" });
    });

    mm.add("(min-width: 1366px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "bottom +300%",
            end: "max",
            scrub: true,
          },
        })
        .fromTo(issParentRef.current, { x: 1000, y: 150 }, { x: 0 });
    });

    gsap.to(issRef.current, {
      rotateZ: 40,
      rotateY: -5,
      scale: 1.5,
      y: "+=20%",
      x: "-=300%",
      duration: 200,
      ease: "power4.out",
      scrollTrigger: {
        trigger: document.body,
        start: "bottom +300%",
        end: "max",
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

    tl.current.progress(dark ? 0 : 1).pause();
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
      <div>
        <img
          ref={meteorRef}
          src={meteors}
          className={`absolute left-0 top-40 xl:-top-100`}
        />
      </div>
      <div ref={issParentRef}>
        <img
          ref={issRef}
          className={`xl:h-30 h-20 absolute left-0 top-0`}
          src={iss}
        />
      </div>
    </div>
  );
};

export default BackgroundAnimation;
