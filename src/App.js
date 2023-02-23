
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Profile from './views/Profile';
import Startup from './views/Startup';
import Translation from './views/Translation';
import Navbar from './Components/Navbar/Navbar';



function App() {

  

  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
        <Navbar></Navbar>
        </div>
        <div className='main-body'>
        <Routes>
          <Route path="/" element={<Startup />}></Route>
          <Route path="/translations" element={<Translation />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
