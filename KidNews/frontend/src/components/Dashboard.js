import React from 'react';
import { Label } from 'semantic-ui-react'

import {Article} from './Article'

export class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Label>Dashboard Label</Label>
      </div>
    )
  }
}