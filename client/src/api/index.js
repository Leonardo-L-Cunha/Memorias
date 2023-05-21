
import axios from "axios";

const baseUrl = 'http://localhost:3000/'

export const fetchPosts =  () => axios.get(`${baseUrl}post`)

export const createPost = (newPost) => axios.post(`${baseUrl}post`, newPost)

export const updatedPost = (id,updatedPost) => axios.patch(`${baseUrl}post/${id}`,updatedPost)

export const deletePost = (id) => axios.delete(`${baseUrl}post/${id}`)

export const likePost = (id) => axios.patch(`${baseUrl}post/${id}/likePost`)