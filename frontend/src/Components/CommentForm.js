import React, { Component } from 'react';
import { Button, Form, Input, FormGroup } from 'reactstrap';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Control form values
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //Add a comment to the blog post
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addComment(this.state.comment, this.props.postId);
    this.setState({
      comment: ''
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <input inline
            className="w-25"
            type="text"
            name="comment"
            id="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="New Comment"
          />
          <button className="ml-1">Add</button>
        </FormGroup>
      </Form>
    );
  }
}

export default PostForm;
