/* eslint-disable react/prop-types */
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"

const Input = ({ name, half , label, register, type, autoFocus ,handleShowPassword}) =>{
    return(
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                {...register}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name ==="password" ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }:null} 
            />
        </Grid>
    )
}

export default Input