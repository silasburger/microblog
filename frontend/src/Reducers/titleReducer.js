import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  LOAD_TITLES,
  ADD_VOTE
} from '../actionTypes';

const INITIAL_STATE = [];

export default function titleReducer(state = INITIAL_STATE, action) {
  let id, description, title, vote, titleIdx;
  switch (action.type) {
    case ADD_POST:
      ({ id, description, title, vote } = action.postData);
      return [...state, { id, description, title, vote }];

    case DELETE_POST:
      return state.filter(title => title.id !== action.postId);

    case EDIT_POST:
      titleIdx = state.findIndex(title => title.id === action.postId);
      ({ id, description, title, vote } = action.postData);

      return [
        ...state.slice(0, titleIdx),
        { id, description, title, vote },
        ...state.slice(titleIdx + 1)
      ];

    case LOAD_TITLES:
      return action.titles;

    case ADD_VOTE:
      titleIdx = state.findIndex(title => title.id === action.postId);

      return [
        ...state.slice(0, titleIdx),
        { ...state[titleIdx], votes: action.votes },
        ...state.slice(titleIdx + 1)
      ].sort((a, b) => b.votes - a.votes);

    default:
      return state;
  }
}
