import { useRef } from "react";
import Gloss from "../../effects/Gloss";
import { onMouseMove } from "../../effects/onMouseMove";
import gsap from "gsap";

const EducationCard = ({
  imgSrc,
  schoolName,
  certificate,
  timeline,
  place,
}: {
  imgSrc: string;
  schoolName: string;
  certificate: string;
  timeline: string;
  place: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative xl:h-100 md:h-90 h-70 xl:w-[16%] w-[45%] mb-10 xl:mb-0 flex m-auto overflow-hidden backdrop-blur-xl`}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPositionX: "center",
        backgroundSize: "150%",
        backgroundRepeat: "no-repeat",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute flex flex-col p-4 bg-black/20 backdrop-blur-3xl bottom-0 w-full xl:h-[40%]">
        <h3 className="md:text-2xl text-sm my-[4%]">{schoolName}</h3>
        <div className="flex md:flex-row flex-col">
          <div className="flex-1">
            <h4 className="md:text-lg text-xs">{certificate}</h4>
          </div>
          <div className="flex-1 md:text-right">
            <h4 className="md:text-lg text-xs">{timeline}</h4>
            <h4 className="md:text-lg text-xs">{place}</h4>
          </div>
        </div>
      </div>
      <Gloss />
    </div>
  );
};

export default EducationCard;
