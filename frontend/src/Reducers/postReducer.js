import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  LOAD_POST
} from '../actionTypes';
import {commentReducer} from './commentReducer';

const INITIAL_STATE = {};

export default function postReducer(state = INITIAL_STATE, action) {

  if(action.postId) {
    state = { ...state, [action.postId]: {...state[action.postId], comments:commentReducer(state[action.postId].comments, action)}};
  }

  switch (action.type) {
    case ADD_POST:
      return { ...state, [action.id]: action.postData };

    case DELETE_POST:
      let newPosts;
      ({ [action.postId]: action.postData, ...newPosts } = state);
      return newPosts;

    case EDIT_POST:
      return { ...state, [action.postId]: action.postData };

    case LOAD_POST:
      return { ...state, [action.post.id]: action.post };

    default:
      return state;
  }
}
