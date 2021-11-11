import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Signup from "./pages/Signup";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className = 'content' basename="/React">
            <Routes>
              <Route exact path = '/' element = {<Home />} />
              <Route exact path = '/signup' element = {<Signup />} />

            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
