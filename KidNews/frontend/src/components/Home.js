import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import {Dashboard} from './Dashboard';
import {Log} from './Log';

import {Menu, Icon, Image, Segment, Sidebar} from 'semantic-ui-react'

export class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = { barVisible: false }
  }

  handleButtonClick = () => this.setState({ barVisible: !this.state.barVisible })
  handleSidebarHide = () => this.setState({ barVisible: false })

  render(){
    const { barVisible } = this.state

    return(
      <Router>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={barVisible}
            width='thin'
            >
            <Menu.Item as={Link} to='/home/dashboard' onClick={this.handleSidebarHide}>
              <Icon name='home' />
              Dashboard
            </Menu.Item>
            <Menu.Item as={Link} to='/home/log' onClick={this.handleSidebarHide}>
              <Icon name='chart pie' />
              Log
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
          <div style={{padding:"20px, 40px"}}>
          <Menu inverted borderless color='purple'>
            <Menu.Item>
              <Icon name='bars'
              size='large'
              onClick={this.handleButtonClick}/>
            </Menu.Item>
            <Menu.Item as={Link} to='/home/dashboard/' fitted>
              <Image src="https://res.cloudinary.com/dheqbiqti/image/upload/v1539525140/PlaygroundNews/NewBanner.png" size='small'/>
            </Menu.Item>
            <Menu.Item position='right'>
              <Icon name='user circle'
              size='large'/>
            </Menu.Item>
          </Menu>
          <Switch>
            <Route exact path="/home/dashboard" component={Dashboard}/>
            <Route exact path="/home/log" component={Log}/>
          </Switch>
          </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

export default Home