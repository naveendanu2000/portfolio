import Gloss from "../../effects/Gloss";
import { onMouseMove } from "../../effects/onMouseMove";

const AchievementCard = ({
  imgSrc,
  description,
}: {
  imgSrc: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center m-auto h-70 w-50 p-6 relative bg-black/5 backdrop-blur-xl rounded-xl">
      <div
        className="z-1 h-[40%] mb-3 w-full overflow-hidden flex justify-center items-center rounded-xl relative"
        onMouseMove={onMouseMove}
      >
        <img src={imgSrc} className="h-full w-full ring-1" />
        <Gloss />
      </div>
      <div className="z-1 flex-1 w-full text-xs">{description}</div>
    </div>
  );
};

export default AchievementCard;
