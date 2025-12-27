/* eslint-disable react-hooks/purity */
import { useGSAP } from "@gsap/react";
import sun from "/assets/background-images/sun.png";
import moon from "/assets/background-images/moon.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

const BackgroundAnimation = () => {
  const moonRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: bgRef.current,
    //     scrub: true,
    //     start: "top top",
    //     end: "bottom top",
    //   },
    // });
    gsap.to(moonRef.current, {
      y: 250,
      x:-120,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=3000",
        scrub: true,
      },
    });

    gsap.to(sunRef.current, {
      y: 200,
      x: 180,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=3000",
        scrub: true,
      },
    });
  }, []);

  const count = 500;

  return (
    <div ref={bgRef} className="fixed w-dvw">
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className={`absolute rounded-full w-[${Math.random() * 20}] w-[${Math.random() * 20}] bg-white`}
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
      <img ref={sunRef} src={sun} className="hidden h-60 float-end translate-x-20 translate-y-20"></img>
      <img ref={moonRef} src={moon} className="h-40 -translate-x-10 translate-y-40"></img>
    </div>
  );
};

export default BackgroundAnimation;
