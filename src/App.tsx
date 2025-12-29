import BackgroundAnimation from "./components/BackgroundAnimation";
import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSections from "./components/ProjectsSections";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  return (
    <div>
      <BackgroundAnimation />
      <div className="z-10">
        <Header />
        <Hero />
        <ExperienceSection />
        <ProjectsSections />
        <SkillsSection />
      </div>
    </div>
  );
};

export default App;
