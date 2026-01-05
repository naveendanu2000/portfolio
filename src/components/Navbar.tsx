import Link from "./micro-components/Link";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const devRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      devRef.current,
      {
        translateY: -100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      }
    );
  });

  return (
    <div
      ref={devRef}
      tabIndex={0}
      className="
      relative z-50
        rounded-xl
        flex
        flex-col
        lg:block
        pb-2 pt-4 px-2
        lg:rounded-full
        bg-white/5
        backdrop-blur-md
        shadow-md
        lg:w-fit"
    >
      <Link text="Home" href="#home"/>
      <Link text="Projects" href="#projects-section"/>
      <Link text="Tech stack" href="#skills-section"/>
      <Link text="Socials" href="#footer"/>
    </div>
  );
};

export default Navbar;
