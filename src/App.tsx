import BackgroundAnimation from "./components/BackgroundAnimation";
import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSections from "./components/ProjectsSections";

const App = () => {
  return (
    <div>
      <BackgroundAnimation />
      <div className="z-10">
        <Header />
        <Hero />
        <ExperienceSection />
        <ProjectsSections />
      </div>
    </div>
  );
};

export default App;
