import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Dashboard} from './Dashboard';
import {Log} from './Log';

export class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/home/dashboard" component={Dashboard}/>
          <Route exact path="/home/log" component={Log}/>
        </Switch>
      </Router>
    );
  }
  
}