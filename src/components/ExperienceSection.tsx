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
        end: "+=500",
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
        end: "center center",
      },
    });
  });

  return (
    <div className="mx-5 py-[2%] min-h-screen ">
      <h1 ref={headingRef} className="text-6xl mb-[4%] text-center">
        {" "}
        EXPERIENCE{" "}
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
