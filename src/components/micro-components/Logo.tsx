import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Logo() {
  const maskRectRef = useRef<SVGRectElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

  const rotateOnClick = () => {
    homeOnClick();
    gsap
      .timeline()
      .to(logoRef.current, {
        duration: 1,
        overwrite: true,
        rotateY: "+=1080",
        ease: "power1.out",
      })
      .to(logoRef.current, {
        delay: 0.5,
        duration: 0.65,
        rotateY: 0,
        ease: "power4.inOut",
      });
  };

  const homeOnClick = () => {
    gsap.registerPlugin(ScrollToPlugin);

    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: "#home", offsetY: 10 },
      ease: "power4.inOut",
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      maskRectRef.current,
      {
        y: -45,
        height: 15,
      },
      {
        y: 200,
        height: 15,
        duration: 2,
        repeat: -1,
        yoyoEase: "power3.out",
        repeatDelay: 0.2,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      logoRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  const boltPath = `
  M70 0
  L10 110
  H55
  L45 190
  L110 80
  H60
  Z
`;

  return (
    <svg
      onClick={rotateOnClick}
      ref={logoRef}
      viewBox={`0 0 120 200`}
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer w-15 h-15 md:w-20 md:h-20`}
    >
      <path d={boltPath} className="fill-indigo-400" filter="url(#shadow)" />

      <path
        d={boltPath}
        fill="#D1D1D1"
        filter="url(#glow)"
        mask="url(#revealMask)"
      />

      <mask id="revealMask">
        <rect
          ref={maskRectRef}
          x="0"
          y="5"
          width="120"
          height="10"
          fill="white"
        />
      </mask>

      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="8"
            floodColor="rgba(0,0,0,0.5)"
          />
        </filter>
      </defs>
    </svg>
  );
}
