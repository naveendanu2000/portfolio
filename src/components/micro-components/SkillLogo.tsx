import { useRef } from "react";
import gsap from "gsap";

const SkillLogo = ({ imgSrc }: { imgSrc: string }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const glossRef = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    gsap.to(itemRef.current, {
      y: -6,
      scale: 1.02,
      duration: 0.2,
      ease: "power2.out",
      overwrite: true,
    });

    gsap.set(glossRef.current, {
      rotateZ: 45,
      translateY: 50,
      translateX: 20,
      opacity: 1,
      overwrite: true,
    });

    gsap.to(glossRef.current, {
      duration: 1,
      x: -100,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleLeave = () => {
    const tl = gsap.timeline();

    tl.to(itemRef.current, {
      y: 0,
      rotation: 12,
      duration: 0.1,
      ease: "power2.out",
      onStart: () => {
        gsap.set(glossRef.current, { opacity: 0 });
      },
    })
      .to(itemRef.current, {
        rotation: -8,
        duration: 0.15,
        ease: "power1.inOut",
      })
      .to(itemRef.current, {
        rotation: 4,
        duration: 0.12,
        ease: "power1.inOut",
      })
      .to(itemRef.current, {
        rotation: 0,
        duration: 0.2,
        ease: "elastic.out(1, 0.4)",
      });
  };

  return (
    <div
      ref={itemRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="rounded-full
        bg-white/5
        backdrop-blur-md w-fit m-4 flex p-2 overflow-hidden"
    >
      <img src={imgSrc} alt="skill logo" className="z-10 relative h-20 w-20" />
      <span
        ref={glossRef}
        className=" z-0 absolute inset-0
                    bg-linear-to-tr
                    from-transparent
                    w-[160%]
                    h-2
                    via-white/40
                    to-transparent
                    opacity-0
                    pointer-events-none
                    -translate-x-full"
      />
    </div>
  );
};

export default SkillLogo;
