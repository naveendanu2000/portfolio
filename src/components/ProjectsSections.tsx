import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { projectCard } from "../data/data";
import ProjectCard from "./micro-components/ProjectCard";
import ScrollTrigger from "gsap/ScrollTrigger";

const ProjectsSections = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(headingRef.current, {
      y: 100,
      scale: 0.8,
      opacity: 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: headingRef.current,
        scrub: true,
        start: "top bottom",
        end: "+=500",
      },
    });

    gsap.from(projectSectionRef.current!.children, {
      y: 100,
      scale: 0.8,
      opacity: 0,
      immediateRender: false,
      stagger: 1,
      scrollTrigger: {
        trigger: projectSectionRef.current,
        scrub: true,
        start: "top bottom",
        end: "center center",
      },
    });
  });

  return (
    <div className="mx-5 py-[2%] min-h-screen">
      <h1 ref={headingRef} className="text-6xl mb-[4%] text-center">
        Projects
      </h1>
      <div ref={projectSectionRef} className="mx-5">
        {projectCard.map((card) => (
          <ProjectCard
            imgSrc={card.imgSrc}
            heading={card.heading}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSections;
