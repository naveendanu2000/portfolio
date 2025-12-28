import BackgroundAnimation from "./components/BackgroundAnimation";
import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/micro-components/ProjectCard";
import { projectCard } from "./data/data";

const App = () => {
  return (
    <div>
      <BackgroundAnimation />
      <div className="z-10">
        <Header />
        <Hero />
        <ExperienceSection />
        <ProjectCard
          imgSrc={projectCard[0].imgSrc}
          heading={projectCard[0].heading}
          description={projectCard[0].description}
          link={projectCard[0].link}
        />
      </div>
    </div>
  );
};

export default App;
