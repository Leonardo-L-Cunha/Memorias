
export default (user = {}, action) => {
    switch(action.type){
        case 'REGISTE':
            return user
        case 'LOGIN':
            return
        default:
            return user        
    }
}