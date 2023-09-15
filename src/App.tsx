import Header from './components/Header/Header';
import FirstModule from './components/FirstModule/FirstModule';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='max-w-fit p-2 mx-auto my-6 border-2 border-rose-600'>
      <Header/>
      <FirstModule />
      <Footer/>
    </div>
  );
}

export default App;
