import * as api from '../api'


export const registerUser = (body, navigate) => async(dispatch) => {
    
    try {
        const { data } = await api.createUser(body)

        dispatch({type: 'REGISTER', payload:data})
        navigate('/login')
    } catch (error) {
        console.log(error)
    }
}

export const login = (body,navigate) => async (dispatch) =>{
    try {
        const { data } = await api.login(body)
        
        dispatch({type: 'LOGIN', payload:data})
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}