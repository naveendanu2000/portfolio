import { useRef } from "react";
import Gloss from "../../effects/Gloss";
import { onMouseMove } from "../../effects/onMouseMove";
import gsap from "gsap";

const EducationCard = ({
  schoolName,
  certificate,
  cgpa,
  timeline,
  place,
}: {
  schoolName: string;
  certificate: string;
  cgpa: string;
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
      className="relative h-100 w-[20%] flex m-auto overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute flex flex-col p-4 bg-black/5 backdrop-blur-3xl bottom-0 w-full h-[40%]">
        <h3 className="text-2xl my-[4%]">{schoolName}</h3>
        <div className="flex flex-row">
          <div className="flex-1">
            <h4 className="text-lg">{certificate}</h4>
            <p>{cgpa}</p>
          </div>
          <div className="flex-1 text-right">
            <h4 className="text-lg">{timeline}</h4>
            <h4 className="text-lg">{place}</h4>
          </div>
        </div>
      </div>
      <Gloss />
    </div>
  );
};

export default EducationCard;
