import { useContext, useRef, useState } from "react";
import Navbar from "./Navbar";
import Logo from "./micro-components/Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./micro-components/Button";
import { ThemeContext } from "../context/Theme";
import HamburgerButton from "./micro-components/HamburgerButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const rightDivRef = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

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

    gsap.registerPlugin(ScrollTrigger);
    gsap.set(headerRef.current, { y: 0 });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          // scrolling UP → show header
          gsap.to(headerRef.current, {
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          });
        } else {
          // scrolling DOWN → hide header
          gsap.to(headerRef.current, {
            y: -110,
            duration: 0.4,
            ease: "power3.out",
          });
        }
      },
    });
  }, []);

  return (
    <div ref={headerRef} className="fixed top-0 w-full z-99 flex flex-row py-4">
      <div className="flex-1 lg:hidden flex items-center">
        <div
          className="flex justify-center grow"
          tabIndex={0}
          onBlur={handleBlur}
        >
          <HamburgerButton open={open} handleOpen={handleOpen} />
          {open && (
            <div className="absolute top-25 left-5 z-50">
              <Navbar />
            </div>
          )}
        </div>
      </div>
      <div className="lg:flex-2 flex-1 flex justify-center items-center perspective-distant">
        <Logo height={100} width={100} />
      </div>
      <div className={`xl:flex-5 hidden lg:flex justify-center items-center`}>
        <Navbar />
      </div>
      <div
        ref={rightDivRef}
        className=" lg:flex-2 flex-1 flex justify-center items-center"
      >
        <Button text="[Theme]" onClick={toggleTheme} />
      </div>
    </div>
  );
};

export default Header;
