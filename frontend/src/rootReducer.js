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
  switch (action.type) {
    case ADD_POST:
      action.postData.comments = [];
      return { posts: { ...state.posts, [action.id]: action.postData } };

    case DELETE_POST:
      let newPosts;
      ({ [action.postId]: action.postData, ...newPosts } = state.posts);
      return { posts: newPosts };

    case EDIT_POST:
      return { posts: { ...state.posts, [action.postId]: action.postData } };

    case ADD_COMMENT:
      return {
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: [...state.posts[action.postId].comments, action.comment]
          }
        }
      };

    case DELETE_COMMENT:
      return {
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: state.posts[action.postId].comments.filter(
              (comment, idx) => action.commentIdx !== idx
            )
          }
        }
      };

    default:
      return state;
  }
}

export default rootReducer;
