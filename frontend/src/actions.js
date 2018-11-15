import {
  ADD_POST,
  ADD_COMMENT,
  EDIT_POST,
  DELETE_COMMENT,
  DELETE_POST
} from './actionTypes';

//Action creator for adding a post
export function addPost(postData, id) {
  return {
    type: ADD_POST,
    postData,
    id
  };
}

//Action creator for deleting a post
export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  };
}

//Action creator for editing a post
export function editPost(postData, postId) {
  return {
    type: EDIT_POST,
    postId,
    postData
  };
}

//Action creator for adding a comment
export function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  };
}

//Action creator for deleting a comment
export function deleteComment(commentIdx, postId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentIdx
  };
}
