import * as api from '../api'
import { CREATE,FETCH,UPDATE,DELETE, LIKE } from '../constants/actionsType'

export const getPosts = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchPosts()
        dispatch({type:FETCH, payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const { data } = await api.createPost(post)

        dispatch({type: CREATE, payload:data})

    } catch (error) {
        console.log(error)
    }
}

export const updatedPost = (id, post) => async(dispatch) =>{
    try {
        const { data } = await api.updatedPost(id,post)

        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async(dispatch) =>{
    try {
        await api.deletePost(id)
        dispatch({type:DELETE, payload:id})
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async(dispatch) =>{
    try {
        const { data } = await api.likePost(id)

        dispatch({type: LIKE, payload: data})
    } catch (error) {
        console.log(error)
    }
}