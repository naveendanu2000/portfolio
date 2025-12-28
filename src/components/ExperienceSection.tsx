import { useRef } from "react";
import { experienceCard } from "../data/data";
import ExperienceCard from "./micro-components/ExperienceCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const ExperienceSection = () => {
  const experienceSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(experienceSectionRef.current!.children, {
      x: 400,
      scale: 0.8,
      opacity: 0,
      immediateRender: false,
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
      <h1 className="text-6xl mb-[3%] text-center"> EXPERIENCE </h1>
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
