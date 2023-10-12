import Header from "./components/General/Header/Header";
import FirstModule from "./components/FirstModule/FirstModule";
import Footer from "./components/General/Footer/Footer";
import ThirdModule from "./components/ThirdModule/ThirdModule";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="max-w-fit p-2 m-5  shadow-md">
          <FirstModule />
          <Footer />
        </div>
        <ThirdModule />
      </div>
    </>
  );
}

export default App;
