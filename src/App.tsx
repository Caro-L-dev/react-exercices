import Header from './components/General/Header/Header';
import FirstModule from './components/FirstModule/FirstModule';
import Footer from './components/General/Footer/Footer';

function App() {

  return (
    <div className='max-w-fit p-2 mx-auto my-6 shadow-md'>
      <Header/>
      <FirstModule />
      <Footer/>
    </div>
  );
}

export default App;
