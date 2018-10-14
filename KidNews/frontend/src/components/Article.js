import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

export class Article extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log("Article Props",this.props);
    let imgSrc = (this.props.media) ? this.props.media : ""
    return(
      <Card>
        <Image src={imgSrc}/>
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>{this.props.tags}</Card.Meta>
          <Card.Description>{(String(this.props.description).substring(0.60)+"...")}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={this.props.source} style={{textDecoration:'underline'}}>
            <Icon name='linkify'/>
            {String(this.props.source).substring(0,22)+"..."}
          </a>
        </Card.Content>
      </Card>
    )}
}