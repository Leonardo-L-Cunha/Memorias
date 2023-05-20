
import axios from "axios";

const baseUrl = 'http://localhost:3000/'

export const fetchPosts =  () => axios.get(`${baseUrl}post`)

export const createPost = (newPost) => axios.post(`${baseUrl}post`, newPost)