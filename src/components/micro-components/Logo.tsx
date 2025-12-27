import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BoltFillGlow({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
  const maskRectRef = useRef<SVGRectElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

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
        delay: 0.3,
        yoyoEase: "power3.out",
        repeatDelay: 2,
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
      ref={logoRef}
      width={width}
      height={height}
      viewBox={`0 0 120 200`}
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path d={boltPath} className="fill-indigo-300" filter="url(#shadow)"/>

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
