import uuid from 'uuid/v4';
import {
  ADD_POST,
  ADD_COMMENT,
  EDIT_POST,
  DELETE_COMMENT,
  DELETE_POST
} from './actionTypes';

const INITIAL_STATE = {
  posts: {}
};

//Reducer to handle actions
function rootReducer(state = INITIAL_STATE, action) {
  let posts;
  switch (action.type) {
    case ADD_POST:
      action.postData.comments = [];
      return { posts: { ...state.posts, [uuid()]: action.postData } };

    case DELETE_POST:
      let { postId, postData } = action;
      let newPosts;
      ({ [postId]: postData, ...newPosts } = state.posts);
      return { posts: newPosts };

    case EDIT_POST:
      return { posts: { ...state.posts, [action.postId]: action.postData } };

    case ADD_COMMENT:
      posts = { ...state.posts };
      posts[action.postId].comments.push(action.comment);
      return { posts };

    case DELETE_COMMENT:
      posts = { ...state.posts };
      let comments = posts[action.postId].comments;
      let newComments = [
        ...comments.slice(0, action.commentIdx),
        ...comments.slice(action.commentIdx + 1)
      ];
      posts[action.postId].comments = newComments;
      return { posts };

    default:
      return state;
  }
}

export default rootReducer;
