import { useRef } from "react";
import { achievementCard } from "../data/data";
import AchievementCard from "./micro-components/AchievementCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AchievementsSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const achievementsSectionRef = useRef<HTMLDivElement>(null);

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

    gsap.from(achievementsSectionRef.current!.children, {
      y: 100,
      scale: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: achievementsSectionRef.current!.parentElement,
        scrub: true,
        start: "top bottom",
        end: "center center",
      },
    });
  });

  return (
    <div className="mx-5 py-[2%] px-[5%] min-h-[90%] flex flex-col justify-center">
      <h1 ref={headingRef} className="text-6xl mb-[4%] text-center">
        Achievements
      </h1>
      <div
        ref={achievementsSectionRef}
        className="mx-5 flex flex-wrap justify-center"
      >
        {achievementCard.map((achievement) => (
          <AchievementCard
            key={achievement.imgSrc}
            imgSrc={achievement.imgSrc}
            description={achievement.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
