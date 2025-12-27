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
      className="
        pb-2 pt-4 px-2
        rounded-full
        bg-white/5
        backdrop-blur-md
        shadow-md
        w-fit"
    >
      <Link text="Home" />
      <Link text="Projects" />
      <Link text="Tec stack" />
      <Link text="About me" />
    </div>
  );
};

export default Navbar;
