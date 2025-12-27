import photo from "/assets/naveendanu.png";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import gsap from "gsap";
import Button from "./micro-components/Button";
import { SplitText } from "gsap/SplitText";

const Hero = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "GSAP",
    "Micro Services",
    "Docker",
    "Github",
    "Kubernetes",
    "Redis",
    "mongoDB",
  ];

  const showSkillRef = useRef<HTMLHeadingElement>(null);
  const [showSkill, setShowSkill] = useState(skills[0]);

  const onMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    console.log(e.clientX, e.clientY);
    const el = e.currentTarget;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const maxRotate = 6;

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

    gsap.from(split.chars, {
      x: 100,
      rotateY: 1440,
      opacity: 0,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.05,
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

  return (
    <div className="relative w-dvw h-fit p-10 flex flex-row justify-center">
      <div className="flex-1 px-[8%] py-[2%]">
        <h2 className="text-4xl">Naveen Danu</h2>
        <h1 className="text-[3.3rem]">Frontend Developer</h1>
        <h3 className="text-3xl">
          crafting <strong className="text-violet-300">interactive,</strong>
          <br /> <strong className="text-violet-300">animation</strong> -{" "}
          <strong className="text-violet-300">driven</strong> web experiences.
        </h3>
        <div className="mt-5 -mx-3">
          <Button text="View Projects" />
        </div>
      </div>
      <div className="w-fit absolute">
        <img
          src={photo}
          className=" h-140 flex mx-auto"
          onMouseMove={onMouseMove}
        />
      </div>
      <div className="inline-block bottom-0 flex-1 px-[8%] text-right py-[2%]">
        <div>
          <h1 ref={showSkillRef} className="text-7xl">
            {showSkill}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
