import React, { Component } from 'react';
import Title from '../Components/Title';
import { connect } from 'react-redux';
import { getTitles } from '../actions';

class TitleList extends Component {
  componentDidMount() {
    //Call function to get titles
    if(!this.props.titles.length) this.props.getTitles();
    
  }

  render() {
    let titles =this.props.titles;
    return (
      <div>
        {titles.map(title => (
          <Title key={title.id} title={title} />
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

export default connect(mapStateToProps, { getTitles })(TitleList);
