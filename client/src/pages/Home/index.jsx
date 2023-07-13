import { Container, Grid, Grow, Paper, AppBar, TextField, Button } from "@material-ui/core"
import Posts from "../../components/Posts"
import Form from "../../components/Form"
import { useEffect, useState } from "react"
import useStyles from "./styles"
import { useDispatch } from "react-redux"
import { getPosts } from "../../actions/posts"
import Paginate from "../../components/Pagination"
import { useLocation, useNavigate } from "react-router-dom"
import ChipInput from 'material-ui-chip-input'



function useQuery() {
    return new URLSearchParams(useLocation().search)
}
const Home = () =>{
    const [currentId, setCurrentId] = useState(null)
    const [search, setSearch] = useState('')

    const classes = useStyles()
    const dispatch = useDispatch()
    const query = useQuery()
    const navigate = useNavigate()
    const page = query.get('page') || 1
    const searchQuery = query.get('searchQuery')

    useEffect(()=>{
        dispatch(getPosts())
      },[currentId,dispatch])
    
    const handleKeyPress = (e) => {
        if(e.keyCode === 13 ) {
            
        }
    }  
    return(
        <Grow in>
            <Container maxWidth='xl'>
                <Grid className={classes.gridContainer} container  justifyContent="space-between"  alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                    <AppBar className={classes.appBarSearch} position="static" color="inherit">
                        <TextField name="search" variant="outlined" label="Search Memories" fullWidth value={search} onKeyPress={handleKeyPress} onChange={(e)=> setSearch(e.target.value)}/>
                    </AppBar>    
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        <Paper className={classes.pagination} elevation={6}>
                           <Paginate /> 
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
      </Grow>
    )
}

export default Home