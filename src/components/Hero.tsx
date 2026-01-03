import photo from "/assets/naveendanu.png";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import gsap from "gsap";
import Button from "./micro-components/Button";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const skills = [
  "greatness",
  "strength",
  "resilience",
  "excellence",
  "mastery",
  "potential",
  "character",
  "impact",
  "innovation",
];

const Hero = () => {
  const showSkillRef = useRef<HTMLHeadingElement>(null);
  const leftHeroRef = useRef<HTMLDivElement>(null);
  const rightHeroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [showSkill, setShowSkill] = useState(skills[0]);
  gsap.registerPlugin(ScrollTrigger);

  const onMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    console.log(e.clientX, e.clientY);
    const el = e.currentTarget;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const maxRotate = 8;

    const rotateY = (x / (rect.width / 2)) * maxRotate;
    const rotateX = -(y / (rect.height / 2)) * maxRotate;
    gsap.to(e.currentTarget, {
      rotateX,
      rotateY,
      duration: 0.3,
    });
  };

  useEffect(() => {
    const el = showSkillRef.current;
    if (!el) return;

    gsap.killTweensOf(el);
    el.innerHTML = showSkill;

    const split = new SplitText(el, { type: "chars" });

    gsap
      .timeline({})
      .from(split.chars, {
        x: () => (window.innerWidth < 640 ? -100 : 100),
        rotateY: 1440,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power1.inOut",
      })
      .to(split.chars, {
        x: () => (window.innerWidth < 640 ? -100 : 100),
        rotateY: 1440,
        opacity: 0,
        delay: 0.8,
        autoAlpha: 0,
        duration: 0.3,
        stagger: 0.03,
        ease: "power1.inOut",
      });

    return () => {
      split.revert();
    };
  }, [showSkill]);

  useEffect(() => {
    let counter = 1;
    const int = setInterval(() => {
      setShowSkill(skills[counter++]);
      if (counter === skills.length) counter = 0;
    }, 2200);

    return () => {
      clearInterval(int);
    };
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(leftHeroRef.current!.children, {
        x: -100,
        opacity: 0,
        immediateRender: false,
        scrollTrigger: {
          scrub: true,
          trigger: leftHeroRef.current,
          start: "top top",
          end: "bottom top",
        },
      });

      const rect = leftHeroRef.current!.getBoundingClientRect();
      if (rect.top < 0) return;

      gsap.from(leftHeroRef.current!.children, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power1.inOut",
      });
    },
    { scope: leftHeroRef }
  );

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(rightHeroRef.current, {
        x: 100,
        opacity: 0,
        immediateRender: false,
        scrollTrigger: {
          scrub: true,
          trigger: rightHeroRef.current,
          start: "top top",
          end: "bottom top",
        },
      });

      const rect = rightHeroRef.current!.getBoundingClientRect();
      if (rect.top < 0) return;

      gsap.from(rightHeroRef.current, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power1.inOut",
      });
    },
    { scope: rightHeroRef }
  );

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(imgRef.current, {
        y: -100,
        opacity: 0,
        immediateRender: false,
        scrollTrigger: {
          scrub: true,
          trigger: imgRef.current!.parentElement,
          start: "bottom 95%",
          end: "bottom top",
        },
      });

      const rect = imgRef.current!.getBoundingClientRect();
      if (rect.top < 0) return;

      gsap.from(imgRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });
    },
    { scope: imgRef }
  );

  return (
    <div
      id="home"
      className="relative xl:w-dvw xl:h-[80%] xl:my-0 my-20 md:my-0 md:p-10 flex flex-col xl:flex-row justify-center mx-5 md:overflow-none overflow-hidden"
    >
      <div className="md:w-full xl:h-170 md:h-160 flex flex-1 items-end px-[8%] xl:px-[10%]">
        <div className="flex-1 h-fit" ref={leftHeroRef}>
          <h2 className="lg:text-4xl md:text-xl text-lg xl:text-5xl">
            Naveen Danu
          </h2>
          <h1 className="lg:text-[3.3rem] md:text-3xl text-xl xl:text-7xl mt-2 text-violet-400">
            Frontend Developer
          </h1>
          <h3 className="text-sm md:text-xl lg:text-3xl xl:text-4xl mt-3">
            crafting <strong className="text-violet-400">interactive</strong>,
            <br /> <strong className="text-violet-400">animation</strong> -{" "}
            <strong className="text-violet-400">driven</strong> web experiences.
          </h3>
          <div className="mt-5 -mx-3">
            <a href="#projects-section">
              <Button text="[View Projects]" />
            </a>
          </div>
        </div>
      </div>
      <div
        ref={imgRef}
        className="xl:w-fit xl:absolute md:pt-15 pt-5 xl-pt-0 flex items-center"
      >
        <img
          src={photo}
          className="h-80 md:h-100 xl:h-170 lg:h-130 flex mx-auto"
          onMouseMove={onMouseMove}
        />
      </div>
      <div className="inline-block bottom-0 flex-1 px-[8%] xl:px-[10%] text-right py-[2%]">
        <div ref={rightHeroRef} className="h-full">
          <div className="lg:text-6xl text-2xl xl:text-7xl mb-8">
            <p className="xl:text-2xl text-sm mb-2">I believe</p>
            <p className="text-red-700 mb-2">Challenges</p>
            <p className=" mb-2">define</p>
            <h1 ref={showSkillRef} className="text-violet-400">
              {showSkill}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
