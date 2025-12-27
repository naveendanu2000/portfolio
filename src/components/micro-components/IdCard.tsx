import { useRef } from "react";
import gsap from "gsap";
import Gloss from "../../effects/Gloss";

const IdCard = ({ imgSrc }: { imgSrc: string }) => {
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
  }

  function onMouseLeave() {
    gsap.to(idCardRef.current, {
      rotateX: "0deg",
      translateY: 0,
      boxShadow:
        "0 20px 25px -5px rgba(0,0,0,0), 0 10px 10px -5px rgba(0,0,0,0)",
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
        <img src={imgSrc} className="absolute z-0" />
        <Gloss />
      </div>
    </div>
  );
};

export default IdCard;
