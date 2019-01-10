import React, { Component } from 'react';
import Title from '../Components/Title';
import { connect } from 'react-redux';
import { getTitles, addVote } from '../actions';
import './TitleList.css';

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    //Call function to get titles
    if (!this.props.titles.length) this.props.getTitles();
  }

  handleVote(postId, direction) {
    this.props.addVote(postId, direction);
  }

  render() {
    let titles = this.props.titles;
    return (
      <div className="title-list-container">
        {titles.map(title => (
          <Title key={title.id} title={title} handleVote={this.handleVote} />
        ))}
      </div>
    );
  }
}

//Map the state form redux so that react has access to the posts
function mapStateToProps(state) {
  return {
    titles: state.titles
  };
}

export default connect(
  mapStateToProps,
  { getTitles, addVote }
)(TitleList);
