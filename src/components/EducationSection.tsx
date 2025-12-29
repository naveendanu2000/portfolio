import { useRef } from "react";
import { educationCard } from "../data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import EducationCard from "./micro-components/EducationCard";

const EducationSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const educationSectionRef = useRef<HTMLDivElement>(null);

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

    gsap.from(educationSectionRef.current!.children, {
      y: 100,
      scale: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: educationSectionRef.current!.parentElement,
        scrub: true,
        start: "top bottom",
        end: "center center",
      },
    });
  });

  return (
    <div className="mx-5 py-[2%] px-[5%] min-h-[90%] flex flex-col justify-center">
      <h1 ref={headingRef} className="text-6xl mb-[4%] text-center">
        Education
      </h1>
      <div
        ref={educationSectionRef}
        className="mx-5 flex flex-wrap justify-center"
      >
        {educationCard.map((education) => (
          <EducationCard
            key={education.schoolName}
            schoolName={education.schoolName}
            certificate={education.certificate}
            cgpa={education.cgpa}
            timeline={education.timeline}
            place={education.place}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
