import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SkillLogo from "./micro-components/SkillLogo";
import github from "/assets/logos/github.svg";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

const ProjectCard = ({
  imgSrc,
  heading,
  description,
  link,
}: {
  imgSrc: string;
  heading: string;
  description: string;
  link: string;
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(imageRef.current, {
      x: -300,
      opacity: 0,
      duration: 0.65,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
      },
    });

    const descriptionSplit = new SplitText(descriptionRef.current, {
      type: "lines",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
        },
      })
      .from(headingRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.65,
      })
      .from(descriptionSplit.lines, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
      })
      .from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      });
  });
  return (
    <div className="bg-black/5 items-center flex-row backdrop-blur-lg flex m-auto p-[3%] rounded-xl w-[70%]">
      <div
        ref={imageRef}
        className="h-full flex-1 w-full -me-25 -translate-x-[25%] rounded-xl shadow-md overflow-hidden"
      >
        <img src={imgSrc} alt="project image" />
      </div>
      <div className="h-125 flex-1 w-full py-5 pe-5">
        <h2 ref={headingRef}>{heading}</h2>
        <p ref={descriptionRef} className="mb-5">
          {description}
        </p>
        <button ref={buttonRef} className="relative cursor-pointer">
          <a href={link}>
            <SkillLogo imgSrc={github} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
