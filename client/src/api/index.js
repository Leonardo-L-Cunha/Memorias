
import axios from "axios";

const url = ''

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => axios.get(url, newPost)