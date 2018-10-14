import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Dashboard} from './Dashboard';
import {Log} from './Log';

import {Menu, Icon, Image} from 'semantic-ui-react'

export class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router>
        <div>
        <Menu>
          <Menu.Item>
            <Icon name='bars'/>
          </Menu.Item>
          <Menu.Item fitted>
            <Image src="https://res.cloudinary.com/dheqbiqti/image/upload/v1539512073/PlaygroundNews/FinalLogoBanner.png" size='tiny'/>
          </Menu.Item>
        </Menu>
        <Switch>
        <Route exact path="/home/dashboard" component={Dashboard}/>
        <Route exact path="/home/log" component={Log}/>
        </Switch>
        </div>
      </Router>
      );
    }
  }

export default Home