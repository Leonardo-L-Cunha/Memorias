
import { Avatar, Button, Paper, Grid, Typography, Container  } from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import useStyles from "./styles"
import Input from "./Input"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { login, registerUser } from "../../actions/users"
import { useNavigate } from "react-router-dom"
const Auth = () =>{
    const classes = useStyles()
    const [showPassowrd, setShowPassword] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const { register , handleSubmit, }  = useForm({})
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleShowPassword = () => setShowPassword((previus) => !previus)
    
    const onSubmit = (data) => {
       
        if(isLogin){
            dispatch(registerUser(data, navigate))
            //colocar um setTimeOut e toatfy dps
            swithMode()
        }else{
            dispatch(login(data,navigate))
        }
       
    }

    

    const swithMode = () =>{
        setIsLogin(!isLogin)
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isLogin ? "Criar conta" : "Login"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                       {
                        isLogin && (
                        <>
                            <Input name="firstName" label="Primeiro nome" register={register('firstName')} autoFocus half/>
                            <Input name="lastName" label="Segundo nome"  register={register('lastName')} autoFocus half/>

                        </>
                        )}
                        <Input name="email" label="Email" type="email" register={register('email')}/>
                        <Input name="password" label="Senha" register={register('password')}  type={showPassowrd ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        {isLogin && <Input name="confirmPassword" label="Confirme a senha"  type="password" register={register('confirmPassword')}/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isLogin ? "Criar" : "Entrar"}
                    </Button>
                    <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={swithMode}>
                                    {isLogin ? "Ja tem uma conta ? Login" : "Nao tem uma conta ? Criar conta"}
                                </Button>
                            </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}
export default Auth