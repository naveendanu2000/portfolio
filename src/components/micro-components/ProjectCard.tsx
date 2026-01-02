import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SkillLogo from "./SkillLogo";
import github from "/assets/logos/github.svg";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import Gloss from "../../effects/Gloss";

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
        scrub: true,
        start: "top bottom",
        end: "+=30%",
      },
    });

    const descriptionSplit = new SplitText(descriptionRef.current, {
      type: "lines",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: true,
          start: "top bottom",
          end: "+=40%",
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
    <div className="bg-black/5 items-center flex-row backdrop-blur-lg flex m-auto xl:p-[3%] p-[5%] rounded-xl md:w-[70%] w-ful">
      <div
        ref={imageRef}
        className="xl:block h-full flex-1 w-full hidden -me-25 -translate-x-[25%] rounded-xl shadow-md overflow-hidden"
      >
        <img src={imgSrc} alt="project image" />
        <Gloss />
      </div>
      <div className="min-h-125 flex-1 w-full py-5 md:pe-5 px-3">
        <h2 ref={headingRef} className="md:text-3xl text-xl xl:text-left text-center mb-3">
          {heading}
        </h2>
        <div
          ref={imageRef}
          className="h-full flex-1 w-full xl:hidden rounded-xl shadow-md overflow-hidden mb-5"
        >
          <img src={imgSrc} alt="project image" />
          <Gloss />
        </div>
        <p ref={descriptionRef} className="mb-3 xl:px-0 px-3 md:text-xl text-md">
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
