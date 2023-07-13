import { Routes , Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import PostDetalis from "../components/PostDetails";


const MainRoutes = () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/posts" replace/> }/>
            <Route path="/posts" element={<Home/>}/>
            <Route path="/posts/search" element={<Home/>}/>
            <Route path="/posts/:id" element={<PostDetalis />}/>
            <Route path="/login" element={!user ? <Auth/> : <Navigate to='/posts'/>}/>
        </Routes>
    )
}

export default MainRoutes
