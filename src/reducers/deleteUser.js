
const deleteUser =(state=[], action)=>{

    console.log(state);
    switch(action.type){

        case 'DELETE_USER':
            
            return {...state.filter( id  => id !== action.payload)};
            
        default:
            return state
    }
}

export  default deleteUser;