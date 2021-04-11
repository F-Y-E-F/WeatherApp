import React from 'react';
import MainPage from './pages/MainPage'

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

const App = () => {
    


  
    return (
      <Router>
        <Route path="/" component={MainPage}/>
        <Route path="/users"/>
       
      </Router>
    );  
}

export default App;
  