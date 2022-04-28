import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AppleNews from './Components/AppleNews/AppleNews';
import Navigation from './Components/Navigation/Navigation';
import TechCrunch from './Components/TechCrunch/TechCrunch';
import TopBusiness from './Components/TopBusiness/TopBusiness';
import WallStreet from './Components/WallStreet/WallStreet';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navigation/>
        <Routes>

        <Route path='/apple-news' element={<AppleNews/>}/>
        <Route path='/tech-crunch' element={<TechCrunch/>}/>
        <Route path='/top-business' element={<TopBusiness/>}/>
        <Route path='/wall-street' element={<WallStreet/>}/>
        <Route path='/'/>
      
      
      
      
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
