import Header from "./components/General/Header/Header";
import FirstModule from "./components/FirstModule/FirstModule";
import ThirdModule from "./components/ThirdModule/ThirdModule";
import FourthModule from "./components/FourthModule/FourthModule";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col flex-wrap justify-center">
        <div className="flex flex-wrap h-full justify-center mx-4">
          <FirstModule />
          <ThirdModule />
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          <FourthModule />
        </div>
      </div>
    </>
  );
}

export default App;
