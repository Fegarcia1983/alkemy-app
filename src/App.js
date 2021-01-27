import React, { useEffect, useState } from 'react'
import { NavBar } from './components/navbar/NavBar';
import { HomeContainer } from './components/mainbody/home-container/HomeContainer';
import { AdminContainer } from './components/mainbody/admin-container/AdminContainer';
import { NewRegisterContainer } from './components/mainbody/new-register-container/NewRegisterContainer';
import { UpdateContainer } from './components/mainbody/update-register-container/UpdateContainer';
import {fetchOnlyTotal} from './helpers/fetchOnlyTotal'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [total, setTotal] = useState(0)

   const [updateTotal, setUpdateTotlal] = useState(false)

   useEffect(() => {
      fetchOnlyTotal()
         .then( amount => {
            setTotal(amount);
         })
   },[updateTotal])

   const totalHandler = () => {
      setUpdateTotlal(!updateTotal)
   }

  return (
    <Router>
      <div className="App">
        < NavBar total={total}/>
        <Switch>
          <Route path="/admin">
            <AdminContainer totalHandler={totalHandler} />
          </Route>
          <Route path="/newregister" component={ NewRegisterContainer } />
          <Route path="/updateregister/:id" component={ UpdateContainer } />
          <Route path="/" component={ HomeContainer } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
