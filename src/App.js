import logo from './logo.svg';
import './App.css';
import Landing from './MyComponents/myPages/Landing'
import {createBrowserRouter,RouterProvider, Link ,Route ,Routes, BrowserRouter} from "react-router-dom";
import Game from './MyComponents/myPages/Game';


function App() {
  return (
    
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
