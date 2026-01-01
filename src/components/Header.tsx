import { useContext, useRef } from "react";
import Navbar from "./Navbar";
import Logo from "./micro-components/Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./micro-components/Button";
import { ThemeContext } from "../context/Theme";

const Header = () => {
  const rightDivRef = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useContext(ThemeContext);

  useGSAP(() => {
    gsap.fromTo(
      rightDivRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="flex flex-row py-4">
      <div className=" md:flex-2 flex-1 flex justify-center items-center">
        <Logo height={100} width={100} />
      </div>
      <div className=" flex-5 flex justify-center items-center">
        <Navbar />
      </div>
      <div
        ref={rightDivRef}
        className=" md:flex-2 flex-3 flex justify-center items-center"
      >
        <Button text="[Theme]" onClick={toggleTheme} />
      </div>
    </div>
  );
};

export default Header;
