import AchievementsSection from "./components/AchievementsSection";
import BackgroundAnimation from "./components/BackgroundAnimation";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSections from "./components/ProjectsSections";
import SkillsSection from "./components/SkillsSection";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
  return (
    <div>
      <ThemeProvider>
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
      </ThemeProvider>
    </div>
  );
};

export default App;

// ${
//           dark
//             ? "bg-linear-to-br from-gray-600 from-20% via-gray-900 via-50% to-black to-100% text-white"
//             : "bg-linear-to-br from-amber-600 from-10% via-amber-100 via-40% to-amber-900 to-100% text-black"
//         }
