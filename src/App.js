import React from 'react'
import "./App.css"
import Footer from './Footer'
import Home from './Home'
import Login from './Login';
import Browse from './Browse';
import Sing from './Sing';
import { BrowserRouter as Router  , Route , Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRouth';
import View from './View';


function App() {
  
  return (
      <>
        <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/Browse" component={Browse} />
              <Route path="/Browse" component={Browse} />
              <Route path='/Home' component={Home} />
              <Route path="/Login"  component={Login} />
              <Route path="/Sing" component={Sing} />
              <Route path="/View/:id" component={View} />
          </Switch>
        </Router>
          <Footer />
      </>
      
    
  )
}

export default App