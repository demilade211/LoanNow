import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className = 'content' basename="/React">
            <Routes>
              <Route exact path = '/' element = {<Home />} />
              <Route exact path = '/dashboard' element = {<Dashboard />} />

            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
