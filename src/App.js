import './App.css';
import { Row , Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./mycomponents/Menu"
import Leftside from "./mycomponents/Leftside"
import Rightside from "./mycomponents/Rightside"
import React from "react";
import Profile from './mycomponents/Profile'

import {Switch , Route} from 'react-router-dom'

function App() {
  return (


<Switch>

  <Route path="/login" exact>

  <div className="App">
      <Menu />
      
      <Row className="landing">
        <Col>
          <Leftside />
        </Col>
        <Col>
          <Rightside />
        </Col>
      </Row>
    </div>
  </Route>

<Route path="/profile" exact>
  <Profile></Profile>
</Route>


</Switch>

    
  );
}

export default App;
