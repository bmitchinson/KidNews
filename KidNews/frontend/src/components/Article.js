import React from 'react';
import { Label } from 'semantic-ui-react'

export class Article extends React.Component{
  constructor(props){
    super(props);
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
    console.log(this.state.articles);
    return(

      <div>
      {(this.state.articles).map((value,index,array) => (
        <Label key={index}>
          {value.title}
        </Label>
        ))}
      </div>

    )}
  
}

