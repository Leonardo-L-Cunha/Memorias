/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import useStyles from "./styles"
import { TextField, Button, Typography, Paper} from "@material-ui/core"
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from "react-redux"
import { createPost, updatedPost } from "../../actions/posts"

const Form = ({currentId, setCurrentId}) =>{
    const [postData, setPostData] = useState({creator:"",title:"",message:"",tags:[],selectedFile:""})
    const post = useSelector((state) => currentId ? state.posts.find((p) => p.id === currentId): null)
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))


    
    useEffect(() =>{
        if(post){
            setPostData(post)
        } 
    },[post])
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(currentId){
            dispatch(updatedPost(currentId,postData))
            
        }else{
            dispatch(createPost(postData))
        }
        clear()
    }
    const clear = () =>{
        setCurrentId(null)
        setPostData({creator:"",title:"",message:"",tags:[],selectedFile:""})
    }

    if(!user?.user) {
        return(
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Por favor faça login para criar suas proprias memorias e curtir outras memorias 
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant="h6">{currentId ? "Editando" : "Criando"} uma Memoria</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData,creator:e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData,title:e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData,message:e.target.value})}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData,tags:[e.target.value]})}/>
                <div className={classes.fileInput}><FileBase  type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile:base64})}/></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Adicionar</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>limpar</Button>

            </form>
        </Paper>
    )
}

export default Form