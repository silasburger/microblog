import titleReducer from './titleReducer';
import postReducer from './postReducer';
import { combineReducers } from 'redux';

let root = combineReducers({
  posts: postReducer,
  titles: titleReducer
});

export default root;
