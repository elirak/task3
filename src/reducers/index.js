import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import selectUserReducer from "./selectUserReducers copy";
import sortReducer from "./sortReducer";

export default combineReducers({

    users: UsersReducer,
    selectUserReducer: selectUserReducer,
    sort:sortReducer
    


  
});