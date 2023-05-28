/* eslint-disable no-unused-vars */
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"
import useStyles from "./styles"
import memories from "../../assets/memories.png"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
export const NavBar = () =>{
    const classes = useStyles()
    const [ user , setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const logout = () =>{
      dispatch({type:'LOGOUT'})
      window.location.reload()
      navigate('/')
    }

    useEffect(() =>{
      const token = user?.token

      setUser(JSON.parse(localStorage.getItem('user')))
    },[location, user?.token])

    return(
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height={60} />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.user.firstName} >{user.user.firstName.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.user.firstName}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Sair</Button>
            </div>
          ):(
            <Button component={Link} to="/login" variant="contained" color="primary">Login</Button>
          )}
        </Toolbar>  
      </AppBar>
    )
} 