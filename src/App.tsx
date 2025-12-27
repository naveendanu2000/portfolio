import BackgroundAnimation from "./components/BackgroundAnimation";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <BackgroundAnimation />
      <div className="z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default App;
