import React from 'react';
import { Label } from 'semantic-ui-react'

export class Dashboard extends React.Component {
  constructor(props){
    super(props);

    console.log("Dashboard Props");
    console.log(props);

  }
  render(){
    return(
      <Label>Dashboard Label</Label>
    )
  }
}