import {
  DELETE_COMMENT,
  ADD_COMMENT,
  LOAD_COMMENTS,
  EDIT_COMMENT
} from '../actionTypes';

export function commentReducer(state, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.comment];

    case DELETE_COMMENT:
      return state.filter(comment => action.commentId !== comment.id);

    case LOAD_COMMENTS:
      return action.comments;

    case EDIT_COMMENT:
      let commentIdx = state[action.postId].comments.findIndex(
        comment => comment.id === action.editComment.id
      );
      return [
            ...state.slice(0, commentIdx),
            action.editComment,
            ...state.slice(commentIdx + 1)
          ]

    default:
      return state;
  }
}
