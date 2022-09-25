
const initialState={
    items:[]
    
};

const selectUserReducer=(state=initialState, action)=>{

    switch(action.type){
        
        case 'USER_SELECTED':
            return {...state,items:action.payload}
        case 'DELETE_USER':console.log('action',action) ;
            return{items: [...state.items.filter(item=>item.id!==action.payload)]}

        default:
            return state
            
    }
    
}
export default selectUserReducer;