import React from 'react';
import MainPage from './pages/MainPage'
import ChangeLocation from './pages/ChangeLocation'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
      
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/change-location" component={ChangeLocation}/>
        </Switch>
      </Router>
    );  
}

export default App;
  