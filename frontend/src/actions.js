import {
  ADD_POST,
  ADD_COMMENT,
  EDIT_POST,
  DELETE_COMMENT,
  DELETE_POST,
  LOAD_TITLES,
  LOAD_POST,
  ADD_VOTE,
  LOAD_COMMENTS,
  EDIT_COMMENT
} from './actionTypes';

import MicroblogApi from './MicroblogApi';

////////////////////////////TITLE ACTIONS///////////////////////////////////

//Action creator for getting titles
export function getTitles() {
  return async function(dispatch) {
    let titles = await MicroblogApi.getTitles();

    dispatch(gotTitles(titles));
  };
}

//Action creator for got titles
function gotTitles(titles) {
  return { type: LOAD_TITLES, titles };
}

////////////////////////////POST ACTIONS///////////////////////////////////

//Action creator for getting post
export function getPost(postId) {
  return async function(dispatch) {
    let post = await MicroblogApi.getPost(postId);
    dispatch(gotPost(post));
  };
}

//Action creator for got post
function gotPost(post) {
  return { type: LOAD_POST, post };
}

//Action creator for adding a post
export function addPost(postData, id) {
  return async function(dispatch) {
    let addedP = await MicroblogApi.addPost(postData);
    dispatch(addedPost(addedP, id));
  };
}

//Action creator for added a post
function addedPost(postData, id) {
  return {
    type: ADD_POST,
    postData,
    id
  };
}

//Action creator for deleting a post
export function deletePost(postId) {
  return async function(dispatch) {
    await MicroblogApi.deletePost(postId);
    dispatch(deletedPost(+postId));
  };
}

//Action creator for deleted a post
function deletedPost(postId) {
  return {
    type: DELETE_POST,
    postId
  };
}

//Action creator for editing a post
export function editPost(postData, postId) {
  return async function(dispatch) {
    let editedP = await MicroblogApi.updatePost(postId, postData);
    dispatch(editedPost(editedP, postId));
  };
}

//Action creator for edited a post
function editedPost(postData, postId) {
  return {
    type: EDIT_POST,
    postId,
    postData
  };
}

////////////////////////////COMMENT ACTIONS///////////////////////////////////

//Action creator for getting comments
export function getComments(postId) {
  return async function(dispatch) {
    let comments = await MicroblogApi.getComments(postId);
    dispatch(gotComments(comments));
  };
}

//Action creator for got comments
function gotComments(comments) {
  return { type: LOAD_COMMENTS, comments };
}

//Action creator for editing a comment
export function editComment(comment, commentId, postId) {
  return async function(dispatch) {
    let editedC = await MicroblogApi.updateComment(postId, commentId, comment);
    dispatch(editedComment(editedC, postId));
  };
}

//Action creator for edited a comment
function editedComment(editedComment, postId) {
  return {
    type: EDIT_COMMENT,
    editComment,
    postId
  };
}

//Action creator for adding a comment
export function addComment(comment, postId) {
  return async function(dispatch) {
    let addComment = await MicroblogApi.addComment(postId, comment);
    dispatch(addedComment(addComment, postId));
  };
}

//Action creator for added a comment
function addedComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  };
}

//Action creator for adding a comment
export function deleteComment(commentId, postId) {
  return async function(dispatch) {
    await MicroblogApi.deleteComment(postId, commentId);
    dispatch(deletedComment(commentId, postId));
  };
}

//Action creator for deleting a comment
function deletedComment(commentId, postId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  };
}

////////////////////////////VOTE ACTIONS///////////////////////////////////

//Action creator for adding a vote
export function addVote(postId, direction) {
  return async function(dispatch) {
    let votes = await MicroblogApi.postVote(postId, direction);
    dispatch(addedVote(postId, votes));
  };
}

//Action creator for added a vote
function addedVote(postId, votes) {
  return {
    type: ADD_VOTE,
    postId,
    votes
  };
}
