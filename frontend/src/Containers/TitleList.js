import React, { Component } from 'react';
import Title from '../Components/Title';
import { connect } from 'react-redux';
import { getTitles, addVote } from '../actions';
import Loader from 'react-loader-spinner';
import './TitleList.css';

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    //Call function to get titles
    if (!this.props.titles.length) await this.props.getTitles();
    this.setState({
      loading: false
    });
  }

  handleVote(postId, direction) {
    this.props.addVote(postId, direction);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="title-list-container">
          <Loader type="Circles" color="#00BFFF" height="100" width="100" />
        </div>
      );
    }
    let titles = this.props.titles;
    return (
      <div className="title-list-container">
        {titles.map(title => (
          <div>
            <Title key={title.id} title={title} handleVote={this.handleVote} />
          </div>
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
