import { useGSAP } from "@gsap/react";
import Gloss from "../../effects/Gloss";
import { onMouseMove } from "../../effects/onMouseMove";
import gsap from "gsap";
import { useRef } from "react";

const AchievementCard = ({
  imgSrc,
  description,
}: {
  imgSrc: string;
  description: string;
}) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: imgRef.current,
          scrub: true,
          start: "top 110%",
          end: "+=10%",
        },
      })
      .from(imgRef.current, {
        y: 100,
        duration: 1,
        opacity: 0,
      })
      .from(descriptionRef.current, {
        y: 100,
        duration: 1,
        opacity: 0,
      });
  });

  return (
    <div className="flex flex-col justify-center items-center m-[2%] h-[20%] w-[15%] p-6 relative bg-black/5 backdrop-blur-xl rounded-xl">
      <div
        ref={imgRef}
        className="z-1 h-[40%]  mb-3 w-full overflow-hidden flex flex-1 justify-center items-center rounded-xl relative"
        onMouseMove={onMouseMove}
      >
        <img src={imgSrc} alt="achievement image" className="h-full w-full" />
        <Gloss />
      </div>
      <div ref={descriptionRef} className="z-1 flex-2 w-full text-md">
        {description}
      </div>
    </div>
  );
};

export default AchievementCard;
