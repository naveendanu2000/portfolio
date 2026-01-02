import { useRef } from "react";
import { skillsSection, skillsSectionHeading } from "../data/data";
import SkillLogo from "./micro-components/SkillLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SkillsSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          scrub: true,
          start: "top bottom",
          end: "+=60%",
        },
      })
      .from(headingRef.current, {
        y: 100,
        scale: 0.8,
        opacity: 0,
        immediateRender: false,
      });

    gsap.from(skillsSectionRef.current!.children, {
      y: 100,
      scale: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: skillsSectionRef.current!.parentElement,
        scrub: true,
        start: "top bottom",
        end: "center center",
      },
    });

    const containers = skillsSectionRef.current?.querySelectorAll(".skills");

    containers?.forEach((container) => {
      gsap.from(container.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 95%",
        },
      });
    });
  });

  return (
    <div className="md:mx-5 mb-10 py-[2%] px-[5%] xl:flex justify-center">
      <h1
        ref={headingRef}
        className="text-3xl  md:text-5xl xl:text-6xl mb-[8%] text-center"
      >
        {" "}
        <span className="backdrop-blur-2xl rounded-xl px-5 py-3">
          SKILLS
        </span>{" "}
      </h1>
      <div
        ref={skillsSectionRef}
        className="mx-5 flex flex-wrap justify-center"
      >
        {Object.entries(skillsSection).map(([skillName, skills]) => (
          <div className="xl:m-[2%] md:m-[5%] xl:p-10 xl:max-w-[35%] min-w-[85%] md:min-w-[15%] h-fit rounded-xl inline-block md:w-fit bg-black/5 backdrop-blur-xl ">
            <h2
              className="md:text-3xl text-xl text-center text-nowrap"
              key={skillName}
            >
              {
                skillsSectionHeading[
                  skillName as keyof typeof skillsSectionHeading
                ]
              }
            </h2>
            <div className="skills" key={skillName}>
              {skills.map((skill) => (
                <SkillLogo key={skill} imgSrc={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
