import SkillLogo from "./micro-components/SkillLogo";
import gmail from "/assets/logos/gmail.svg";
import linkedin from "/assets/logos/linkedin.svg";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-end mt-5">
        <span className="text-3xl">Mail </span>
        <span>
          <SkillLogo imgSrc={gmail} />
        </span>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-3xl">Linkedin </span>
        <span>
          <SkillLogo imgSrc={linkedin} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
