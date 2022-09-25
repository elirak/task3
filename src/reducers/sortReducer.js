const initialState={};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'ASC_USERS':
           [...state].sort((a, b) => {
                return a.released.localeCompare(b.released);});
        // eslint-disable-next-line no-fallthrough
        case 'DESC_USERS':
             [...state].sort((a, b) => {
               return b.released.localeCompare(a.released);});
        // eslint-disable-next-line no-fallthrough
        default:
            return state;

  
      
          
    }
};