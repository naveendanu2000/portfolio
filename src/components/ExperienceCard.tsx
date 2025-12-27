import { useRef } from "react";
import IdCard from "./micro-components/IdCard";
import SkillLogo from "./micro-components/SkillLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ExperienceCard = ({
  companyName,
  timeline,
  projectName,
  description,
  skills,
  imageSrc,
}: {
  companyName: string;
  timeline: string;
  projectName: string;
  description: string[];
  skills: string[];
  imageSrc: string;
}) => {
  const companyRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const idCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline()
      .from(companyRef.current, {
        y: "15%",
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      })
      .from(projectRef.current, {
        y: "15%",
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      })
      .from(ulRef.current!.children, {
        y: "15%",
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
      })
      .from(skillsRef.current!.children, {
        y: "15%",
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
      });

    gsap.from(idCardRef.current!.children, {
      x: "50%",
      opacity: 0,
      duration: 1.5,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="bg-black/5 backdrop-blur-xl rounded-xl w-[70%] flex flex-row justify-center items-center m-auto p-[3%]">
      <div className="flex-2">
        <div ref={companyRef}>
          <h1 className="text-3xl">{companyName}</h1>
          <span>{timeline}</span>
        </div>
        <div className="p-[1%]">
          <h3 ref={projectRef} className="text-xl">
            {projectName}
          </h3>
          <ul ref={ulRef} className="py-[0.5%]">
            {description.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <h3 className="text-xl">Technologies</h3>
        <div ref={skillsRef} className="flex flex-row p-[1%] w-[60%}">
          {skills.map((skill) => (
            <SkillLogo key={skill} imgSrc={skill} />
          ))}
        </div>
      </div>
      <div ref={idCardRef} className="flex-1 flex justify-center items-center">
        <IdCard imageSrc={imageSrc} />
      </div>
    </div>
  );
};

export default ExperienceCard;

// bg-transparent rounded-xl relative overflow-hidden
