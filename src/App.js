import React from 'react'
import { NavBar } from './components/navbar/NavBar';
import { HomeContainer } from './components/mainbody/HomeContainer';
import { AdminContainer } from './components/mainbody/AdminContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { NewRegister } from './components/mainbody/NewRegister';


function App() {
  return (
    <Router>
      <div className="App">
        < NavBar />
        <Switch>
        <Route path="/" exact>
            < HomeContainer />
          </Route>
          <Route path="/admin">
            < AdminContainer />
          </Route>
          <Route path="/newregister">
            < NewRegister />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
