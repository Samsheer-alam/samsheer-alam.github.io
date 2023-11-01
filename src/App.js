import Home from './pages/Home';
import Header from './components/Header';
import ParticleEffect from './utils/particle';

function App() {
  return (
    <div className=" bg-black">
      <ParticleEffect />
      {/* <div style={{ position: 'relative', zIndex: 1 }}> */}
        <div className='w-4/6 h-screen flex flex-row mx-auto '>
          <Home />
          <Header />
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
