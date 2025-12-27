import { useRef } from "react";
import gsap from "gsap";

const IdCard = ({ imageSrc }: { imageSrc: string }) => {
  const glossRef = useRef<HTMLDivElement>(null);
  const idCardRef = useRef<HTMLDivElement>(null);

  function onMouseEnter() {
    gsap.to(idCardRef.current, {
      rotateX: "7deg",
      translateY: -7,
      boxShadow:
        "0 20px 25px -5px rgba(0,0,0,0.03), 0 10px 10px -5px rgba(0,0,0,0.8)",
      duration: 0.65,
      ease: "power1.inOut",
      overwrite: true,
    });

    gsap.to(glossRef.current, {
      y: 0,
      duration: 0.65,
      ease: "power1.inOut",
    });
  }

  function onMouseLeave() {
    gsap.to(idCardRef.current, {
      rotateX: "0deg",
      translateY: 0,
      boxShadow: "0 20px 25px -5px rgba(0,0,0,0), 0 10px 10px -5px rgba(0,0,0,0)",
      duration: 0.65,
      ease: "power1.outIn",
    });

    gsap.to(glossRef.current, {
      y: "-40%",
      duration: 0.65,
      ease: "power1.outIn",
    });
  }
  return (
    <div>
      <div
        ref={idCardRef}
        className="relative h-70 w-50 overflow-hidden rounded-xl"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img src={imageSrc} className="absolute z-0" />
        <div
          ref={glossRef}
          className="absolute z-10 h-[120%] w-full 
            bg-linear-[226deg,rgba(255,255,255,0.4)_10%,rgba(255,255,255,0.3)_35%,rgba(255,255,255,0.2)_42%,rgba(255,255,255,0)_60%] -translate-y-[40%]"
        />
      </div>
    </div>
  );
};

export default IdCard;
