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