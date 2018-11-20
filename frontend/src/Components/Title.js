import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <Link to={`/${this.props.title.id}`}>{this.props.title.title}</Link>
        <i>{this.props.title.description}</i>
        <b>Votes: {this.props.title.votes}</b>
        <button id="up" onClick={this.handleVote}>
          up
        </button>
        <button id="down" onClick={this.handleVote}>
          down
        </button>
      </div>
    );
  }
}

export default Title;
