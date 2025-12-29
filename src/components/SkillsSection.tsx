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
    <div className="mx-5 py-[2%] px-[5%] min-h-screen flex justify-center">
      <h1 ref={headingRef} className="text-6xl mb-[4%] text-center">
        Skills
      </h1>
      <div
        ref={skillsSectionRef}
        className="mx-5 flex flex-wrap justify-center"
      >
        {Object.entries(skillsSection).map(([skillName, skills]) => (
          <div className="m-[1%] p-10 max-w-[35%] rounded-xl inline-block w-fit bg-black/5 backdrop-blur-xl ">
            <h2 className="text-3xl text-center text-nowrap me-5" key={skillName}>
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
