import { Container, Grid, Grow } from "@material-ui/core"
import Posts from "../../components/Posts"
import Form from "../../components/Form"
import { useEffect, useState } from "react"
import useStyles from "../../styles"
import { useDispatch } from "react-redux"
import { getPosts } from "../../actions/posts"


const Home = () =>{
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
      },[currentId,dispatch])
    return(
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container  justifyContent="space-between"  alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
      </Grow>
    )
}

export default Home