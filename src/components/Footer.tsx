import SkillLogo from "./micro-components/SkillLogo";
import gmail from "/assets/logos/gmail.svg";
import linkedin from "/assets/logos/linkedin.svg";
import github from "/assets/logos/github.svg";
import leetcode from "/assets/logos/leetcode.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(footerRef.current, {
      y: 100,
      opacity: 0,

      scrollTrigger: {
        trigger: footerRef.current,
        scrub: true,
        start: "top 100%",
        end: "+=5%",
      },
    });
  });

  return (
    <div
      id="footer"
      ref={footerRef}
      className="relative overflow-hidden w-full h-[20%] py-[2%] px-[10%] mt-[5%] flex items-center justify-center"
    >
      {" "}
      <div className="z-10 w-full">
        <a href="">
          <div className="inline-flex items-center mx-5 ">
            <span className="md:text-3xl">Email </span>
            <SkillLogo imgSrc={gmail} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/naveen-danu-a4b224293/">
          <div className="inline-flex items-center mx-5 ">
            <span className="md:text-3xl">Linkedin </span>
            <SkillLogo imgSrc={linkedin} />
          </div>
        </a>
        <a href="https://github.com/naveendanu2000">
          <div className="inline-flex items-center mx-5 ">
            <span className="md:text-3xl">Github </span>
            <SkillLogo imgSrc={github} />
          </div>
        </a>
        <a href="https://leetcode.com/u/naveendanu/">
          <div className="inline-flex items-center mx-5 ">
            <span className="md:text-3xl">Leetcode </span>
            <SkillLogo imgSrc={leetcode} />
          </div>
        </a>
      </div>
      <div className=" z-1 absolute h-full translate-y-25 md:w-[130%] w-[300%] bg-[radial-gradient(ellipse_farthest-side_at_50%_110%,rgba(255,255,255,0.25),rgba(255,255,255,0.2)_30%,rgba(255,255,255,0.2)_80%,rgba(255,255,255,0.09)_92%,transparent)]" />
    </div>
  );
};

export default Footer;
