
import { Avatar, Button, Paper, Grid, Typography, Container, TextField  } from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import useStyles from "./styles"
import Input from "./Input"
import { useState } from "react"
const Auth = () =>{
    const classes = useStyles()
    const [showPassowrd, setShowPassword] = useState(false)
    const [isLogin, setIsLogin] = useState(true)

    const handleShowPassword = () => setShowPassword((previus) => !previus)

    const handleSubmit = () => {

    }

    const handleChange = () =>{

    }

    const swithMode = () =>{
        setIsLogin(!isLogin)
    }

    return(
        <Container component="main" maxWidth={3}>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isLogin ? "Criar conta" : "Login"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                       {
                        isLogin && (
                        <>
                            <Input name="name" label="Primeiro nome" handleChange={handleChange} autoFocus half/>
                            <Input name="name" label="Segundo nome" handleChange={handleChange} autoFocus half/>

                        </>
                        )}
                        <Input name="email" label="Email" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Senha" handleChange={handleChange} type={showPassowrd ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        {isLogin && <Input name="confirmPassword" label="Confirme a senha" handleChange={handleChange} type="password"/>}
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