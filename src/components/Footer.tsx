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
        start: "top 105%",
        end: "+=5%",
      },
    });
  });

  return (
    <div
      id="footer"
      ref={footerRef}
      className="relative overflow-hidden w-full h-[20%] py-[2%] px-[10%] mt-[5%] flex flex-col items-center justify-center"
    >
      {" "}
      <div className="z-10 w-full flex flex-wrap items-center justify-center">
        <a href="">
          <div className="inline-flex items-center mx-5 ">
            <img
              src={gmail}
              alt="skill logo"
              className="z-10 relative h-10 w-10"
            />
            <span className="md:text-3xl ms-2">Email </span>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/naveen-danu-a4b224293/">
          <div className="inline-flex items-center mx-5 ">
            <img
              src={linkedin}
              alt="skill logo"
              className="z-10 relative h-10 w-10"
            />
            <span className="md:text-3xl ms-2">Linkedin </span>
          </div>
        </a>
        <a href="https://github.com/naveendanu2000">
          <div className="inline-flex items-center mx-5 ">
            <img
              src={github}
              alt="skill logo"
              className="z-10 relative h-10 w-10"
            />
            <span className="md:text-3xl ms-2">Github </span>
          </div>
        </a>
        <a href="https://leetcode.com/u/naveendanu/">
          <div className="inline-flex items-center mx-5 ">
            <img
              src={leetcode}
              alt="skill logo"
              className="z-10 relative h-10 w-10"
            />
            <span className="md:text-3xl ms-2">Leetcode </span>
          </div>
        </a>
      </div>
      <div className="pt-5">Desgined and built by Naveen Danu</div>
      <div className=" z-1 absolute h-full translate-y-15 md:w-[130%] w-[300%] bg-[radial-gradient(ellipse_farthest-side_at_50%_110%,rgba(255,255,255,0.25),rgba(255,255,255,0.2)_30%,rgba(255,255,255,0.2)_80%,rgba(255,255,255,0.09)_92%,transparent)]" />
    </div>
  );
};

export default Footer;
