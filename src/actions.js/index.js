import users from "../api/users"



export const fetchUsers=()=> async dispatch=>{
        const response=  await users.get('/users');
        dispatch({type:'FETCH_USERS', payload:response.data})
    }

export const selectUser=(user)=> dispatch=>{

    return dispatch({type:'USER_SELECTED',payload: user})
    
}
export const deleteUser=(id)=>async  dispatch=>{
    return dispatch({type:'DELETE_USER',payload: id});
   
}

export const sort_acs=(state)=>async dispatch=>{
  return dispatch ({type:'ASC_USERS', payload:state})

}


export const sort_desc=(state)=>async dispatch=>{
  return dispatch ({type:'DESC_USERS', payload:state})

}

const allActions = {
   fetchUsers,
   selectUser,
   deleteUser,
   sort_acs,
   sort_desc


}
export default allActions;