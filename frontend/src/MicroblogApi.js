import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export default class MicroblogApi {
  static async getTitles() {
    const res = await axios.get(`${BASE_URL}/api/posts`)
    return res.data;
  }

  static async getPost(id) {
    const res = await axios.get(`${BASE_URL}/api/posts/${id}`)
    return res.data;
  }

  static async postVote(id, direction) {
    const res = await axios.post(`${BASE_URL}/api/posts/${id}/vote/${direction}`)
    return res.data;
  }

  static async addPost(data) {
    const res = await axios.post(`${BASE_URL}/api/posts`, data)
    return res.data;
  }

  static async updatePost(id, data) {
    const res = await axios.put(`${BASE_URL}/api/posts/${id}`, data)
    return res.data;
  }

  static async deletePost(id) {
    const res = await axios.delete(`${BASE_URL}/api/posts/${id}`)
    return res.data;
  }
}