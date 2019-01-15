import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

export default class MicroblogApi {
  static async getTitles() {
    const res = await axios.get(`${BASE_URL}/api/posts`);
    return res.data;
  }

  static async getPost(postId) {
    const res = await axios.get(`${BASE_URL}/api/posts/${postId}`);
    return res.data;
  }

  static async postVote(postId, direction) {
    const res = await axios.post(
      `${BASE_URL}/api/posts/${postId}/vote/${direction}`
    );
    return res.data.votes;
  }

  static async addPost(data) {
    const res = await axios.post(`${BASE_URL}/api/posts`, data);
    return res.data;
  }

  static async updatePost(postId, data) {
    const res = await axios.put(`${BASE_URL}/api/posts/${postId}`, data);
    return res.data;
  }

  static async deletePost(postId) {
    const res = await axios.delete(`${BASE_URL}/api/posts/${postId}`);
    return res.data;
  }

  static async getComments(postId) {
    const res = await axios.get(`${BASE_URL}/api/posts/${postId}/comments`);
    return res.data;
  }

  static async addComment(postId, comment) {
    const data = { text: comment };
    const res = await axios.post(
      `${BASE_URL}/api/posts/${postId}/comments`,
      data
    );
    return res.data;
  }

  static async updateComment(postId, commentId, comment) {
    const data = { text: comment };
    const res = await axios.put(
      `${BASE_URL}/api/posts/${postId}/comments/${commentId}`,
      data
    );
    return res.data;
  }

  static async deleteComment(postId, commentId) {
    const res = await axios.delete(
      `${BASE_URL}/api/posts/${postId}/comments/${commentId}`
    );
    return res.data;
  }
}
