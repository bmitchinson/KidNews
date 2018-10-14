import React from 'react';
import { Container, Grid} from 'semantic-ui-react'

import {ArticlePane} from './ArticlePane'

export class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "Alex"
    }
  }

  render(){
    return(
      <div style={{padding:"15px 0px 20px 50px"}}>
        <Grid>
          <div style={{padding:"20px 0px 40px 20px"}}>
          <Grid.Row columns={2}>
            <Grid.Column>
                <p style={{fontSize:40, fontStyle:700,display:'inline'}}>
                  Welcome back {this.state.username}!
                </p>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <p style={{fontSize:24, fontStyle:400,display:'inline'}}>
                    Daily Goal:
                </p>
                <p style={{fontSize:24, fontStyle:700,display:'inline'}}>
                    {' '} 11 minutes remaining
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
          </div>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Container>
                <p style={{fontSize:25, fontStyle:700}}>
                  A few recomendations for you...
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <ArticlePane/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}