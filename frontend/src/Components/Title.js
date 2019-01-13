import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'reactstrap';

class Title extends PureComponent {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(evt) {
    this.props.handleVote(this.props.title.id, evt.target.id);
  }

  render() {
    return (
      <Card>
        <Link to={`/${this.props.title.id}`}>{this.props.title.title}</Link>
        <i>{this.props.title.description}</i>
        <b>Votes: {this.props.title.votes}</b>
        <Button color="info" className="m-1" id="up" onClick={this.handleVote}>
          up
        </Button>
        <Button color="warning" className="m-1" id="down" onClick={this.handleVote}>
          down
        </Button>
      </Card>
    );
  }
}

export default Title;
