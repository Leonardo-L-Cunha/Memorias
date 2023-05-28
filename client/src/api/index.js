
import axios from "axios";

const baseUrl = 'http://localhost:3000/'

const api = axios.create({baseURL:baseUrl})

const token = JSON.parse(localStorage.getItem('user'))

api.interceptors.request.use((req => {
    if(token){
        req.headers.Authorization = `Bearer ${token.token}`
    }
    return req
})) 

export const fetchPosts =  () => api.get('post')

export const createPost = (newPost) => api.post('post', newPost)

export const updatedPost = (id,updatedPost) => api.patch(`post/${id}`,updatedPost)

export const deletePost = (id) => api.delete(`post/${id}`)

export const likePost = (id) => api.patch(`post/${id}/likePost`)

export const createUser = (data) => api.post('users', data)

export const login = (data) => api.post('login',data)