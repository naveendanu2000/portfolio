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
    <div className="md:mx-5 mb-10 xl:mb-0 py-[2%] md:min-h-screen">
      <h1
        ref={headingRef}
        className="text-3xl  md:text-5xl xl:text-6xl mb-[8%] md:mb-15 xl:mb-[3%] text-center"
      >
        {" "}
        <span className="backdrop-blur-2xl rounded-xl px-5 py-3">
          PROJECTS
        </span>{" "}
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
