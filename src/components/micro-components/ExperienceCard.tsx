import { useRef } from "react";
import IdCard from "./IdCard";
import SkillLogo from "./SkillLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExperienceCard = ({
  companyName,
  timeline,
  projectName,
  description,
  skills,
  imgSrc,
}: {
  companyName: string;
  timeline: string;
  projectName: string;
  description: string[];
  skills: string[];
  imgSrc: string;
}) => {
  const companyRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const idCardRef = useRef<HTMLDivElement>(null);
  const experienceCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: experienceCardRef.current,
          scrub: true,
          start: "top bottom",
          end: "+=30%",
        },
      })
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
      scrollTrigger: {
        trigger: idCardRef.current!.children,
        scrub: true,
        start: "top bottom",
        end: "+=30%",
      },
    });
  });

  return (
    <div
      ref={experienceCardRef}
      className="bg-black/5 backdrop-blur-xl mb-5 rounded-xl lg:w-[70%] flex flex-col lg:flex-row justify-center items-center m-auto lg:p-[3%] p-[8%]"
    >
      <div className="flex-2 xl:ps-[6%]">
        <div ref={companyRef} className="lg:block flex flex-row">
          <div className="lg:flex-none lg:block grow flex flex-col justify-center">
            <h1 className="text-xl lg:text-3xl xl:text-4xl">{companyName}</h1>
            <span className="text-lg lg:text-xl xl:text-2xl">{timeline}</span>
          </div>
          <div className="lg:hidden">
            <IdCard imgSrc={imgSrc} />
          </div>
        </div>
        <div className="p-[1%]">
          <h3 ref={projectRef} className="text-lg lg:text-2xl xl:text-3xl">
            {projectName}
          </h3>
          <ul ref={ulRef} className="py-[0.5%] xl:text-xl">
            {description.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <h3 className="text-xl xl:text-3xl">Technologies</h3>
        <div ref={skillsRef} className="flex flex-row p-[1%]">
          {skills.map((skill) => (
            <SkillLogo key={skill} imgSrc={skill} />
          ))}
        </div>
      </div>
      <div
        ref={idCardRef}
        className="lg:visible hidden flex-1 lg:flex justify-center items-center"
      >
        <IdCard imgSrc={imgSrc} />
      </div>
    </div>
  );
};

export default ExperienceCard;

// bg-transparent rounded-xl relative overflow-hidden
