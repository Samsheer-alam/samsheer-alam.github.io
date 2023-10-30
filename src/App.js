import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className=" bg-gray-100">
      <div className='w-4/6 h-screen flex flex-row mx-auto '>
        <Home/>
        <Header/>
      </div>
    </div>
  );
}

export default App;
