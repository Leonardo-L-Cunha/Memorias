import { CREATE,FETCH,UPDATE,DELETE, LIKE } from '../constants/actionsType'
export default (posts = [], action) =>{
    switch(action.type){
        case DELETE:
            return posts.filter((post) => post.id !== action.payload)
        case UPDATE:
        case LIKE:
                return posts.map((post) => post.id === action.payload.id ? action.payload : post)    
        case FETCH:
            return action.payload ;

        case CREATE:
            return [...posts, action.payload] ;
        default:
            return posts
    }
}