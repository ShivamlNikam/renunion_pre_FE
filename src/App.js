import { Navbar } from './Components/Navbar';
import { RentPage } from './RentPage';
function App() {
  return (
    <div className="App bg-bgColor min-h-screen min-w-full">
    <Navbar/>
    <div className='px-10'><RentPage/></div>
    </div>
  );
}

export default App;
