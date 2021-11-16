import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
