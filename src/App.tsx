import AchievementsSection from "./components/AchievementsSection";
import BackgroundAnimation from "./components/BackgroundAnimation";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
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
        <AchievementsSection />
        <EducationSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
