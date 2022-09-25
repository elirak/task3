import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import Lists from './Pages/Lists';
import history from "../history";
import DeleteUser from "./Pages/DeleteUser";
const App=()=>{
  return (
    
  <div>
    <div className="ui container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Lists} />
            <Route path="/delete/:id" exact component={DeleteUser} />
            <br/>
          </Switch>
        </div>
      </Router>
    </div>
             
  </div>
  
        );  
}

export default App;