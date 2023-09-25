
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Qrpage from './Components/Qr_generator/Qr_page';
import Qrshow from './Components/Qr_generator/Qr_show';


function App() {
  return (
    <>
     <Router>
   <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Qr' element={<Qrpage/>} />
        <Route path='/Qrshow' element={<Qrshow/>} />
       
      </Routes>
     </Router>

    </>
  );
}

export default App;
