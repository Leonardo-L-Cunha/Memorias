
export default (user = {}, action) => {
    switch(action.type){
        case 'REGISTE':
            return user
        case 'LOGIN':
            localStorage.setItem('user',JSON.stringify(action?.payload))
            
            return {...user, ...action?.payload}
        case 'LOGOUT':
            localStorage.clear()
            return {...user, ...action?.payload}  
        default:
            return user        
    }
}