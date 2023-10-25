import Header from "./components/General/Header/Header";
import FirstModule from "./components/FirstModule/FirstModule";
import ThirdModule from "./components/ThirdModule/ThirdModule";
import FourthModule from "./components/FourthModule/FourthModule";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-around">
        <FirstModule />
        <ThirdModule />
        <FourthModule />
      </div>
    </>
  );
}

export default App;
