import { Routes , Route } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";


const MainRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Auth/>}/>
        </Routes>
    )
}

export default MainRoutes
