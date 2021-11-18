import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loadUser } from "./actions/userActions";
import Navbar from "./Components/Navbar/Navbar.js";
import ProtectedRoute from "./Components/routes/ProtectedRoutes.js";
import TestPage from "./Components/TestPage.js";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup";
import store from "./store"




function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <ProtectedRoute exact path="/" component={TestPage}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
