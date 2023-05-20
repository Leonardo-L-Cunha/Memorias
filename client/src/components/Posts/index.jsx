import Post from './Post/index'
import { useSelector } from 'react-redux'
import useStyles from "./styles"
const Posts = () =>{
    const classes = useStyles()
    const posts = useSelector((state) => state.posts)
    
    
    return (
        <>
            <h1>Posts</h1>
            <Post/>
            <Post/>

        </>
    )
}

export default Posts