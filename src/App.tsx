import BackgroundAnimation from "./components/BackgroundAnimation";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <BackgroundAnimation />
      <div className="z-10">
        <Header />
      </div>
    </div>
  );
};

export default App;
