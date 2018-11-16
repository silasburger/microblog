import { ADD_POST, DELETE_POST, EDIT_POST, LOAD_TITLES } from '../actionTypes';

const INITIAL_STATE = [];

export default function titleReducer(state = INITIAL_STATE, action) {
  let id, description, title;
  switch (action.type) {
    case ADD_POST:
      ({ id, description, title } = action.postData);
      return [...state, { id, description, title }];

    case DELETE_POST:
      return state.filter(title => title.id !== action.postId);

    case EDIT_POST:
      let titleIdx = state.findIndex(title => title.id === action.postId);
      ({ id, description, title } = action.postData);

      return [
        ...state.slice(0, titleIdx),
        { id, description, title },
        ...state.slice(titleIdx + 1)
      ];

    case LOAD_TITLES:
      return action.titles;

    default:
      return state;
  }
}
