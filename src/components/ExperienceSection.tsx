import { useRef } from "react";
import { experienceCard } from "../data/data";
import ExperienceCard from "./micro-components/ExperienceCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const ExperienceSection = () => {
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(headingRef.current, {
      y: 100,
      scale: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: headingRef.current,
        scrub: true,
        start: "top bottom",
        end: "top center",
      },
    });

    gsap.from(experienceSectionRef.current!.children, {
      y: 100,
      scale: 0.8,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: experienceSectionRef.current,
        scrub: true,
        start: "top bottom",
        end: "top center",
      },
    });
  });

  return (
    <div className="md:mx-5 mb-10 xl:mb-0 py-[2%] xl:min-h-screen ">
      <h1
        ref={headingRef}
        className="text-3xl  md:text-5xl xl:text-6xl mb-[8%] md:mb-15 xl:mb-[5%] text-center"
      >
        {" "}
        <span className="backdrop-blur-2xl rounded-xl px-5 py-3">
          EXPERIENCE
        </span>{" "}
      </h1>
      <div ref={experienceSectionRef} className="mx-5">
        {experienceCard.map((card) => (
          <ExperienceCard
            key={card.companyName}
            companyName={card.companyName}
            imgSrc={card.imgSrc}
            timeline={card.timeline}
            projectName={card.projectName}
            description={card.description}
            skills={card.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
