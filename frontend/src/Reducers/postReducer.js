import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  LOAD_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  LOAD_COMMENTS,
  EDIT_COMMENT
} from '../actionTypes';

const INITIAL_STATE = {};

export default function postReducer(state = INITIAL_STATE, action) {
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
      return { ...state, [action.id]: action.postData };

    case ADD_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...state.posts[action.postId],
          comments: [...state.posts[action.postId].comments, action.comment]
        }
      };

    case DELETE_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...state.posts[action.postId],
          comments: state.posts[action.postId].comments.filter(
            comment => action.commentId !== comment.id
          )
        }
      };

    case LOAD_COMMENTS:
      return {
        ...state,
        [action.postId]: {
          ...state.posts[action.postId],
          comments: action.comments
        }
      };

    case EDIT_COMMENT:
      let commentIdx = state.posts[action.postId].comments.findIndex(
        comment => comment.id === action.editComment.id
      );
      return {
        ...state,
        [action.postId]: {
          ...state.posts[action.postId],
          comments: [
            ...state.posts[action.postId].comments.slice(0, commentIdx),
            action.editComment,
            ...state.posts[action.postId].comments.slice(commentIdx + 1)
          ]
        }
      };

    default:
      return state;
  }
}
