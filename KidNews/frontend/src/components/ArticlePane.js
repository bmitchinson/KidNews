import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Article } from './Article';

export class ArticlePane extends React.Component{
  constructor(){
    super();
    this.state = {
      articles: []
    }
  }

  componentWillMount(){
    fetch("http://127.0.0.1:8000/api/article/")
      .then(response => {
        if (response.status !== 500){
          console.log("Article Fetch Timeout");
        }
        return response.json();
      })
      .then(data => this.setState({articles: data}));
  }

  render(){
    console.log("State",this.state.articles);
    return(

    <Grid container columns={3} stackable>
      {(this.state.articles).map((value,index,array) => (
        <Grid.Column key={index}>
          <Article title={value.title} source={value.source_link}
          description={value.description} tags={value.tags}
          media={value.media}/>
        </Grid.Column>
        ))}
    </Grid>

    )}
  
}

