import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import allActions from '../../actions.js';
import  ReactDOM  from "react-dom";

const DeleteUser=()=>{


    const users=useSelector(state=>state.selectUserReducer)
    const dispatch=useDispatch();
    return(
      ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
  
            <div className="ui standard modal visible active">
                <div className="header">Delete a User</div>
                <div className="content"> Are you sure you want to delete this stream?</div>
                <div className="actions">
                  <button onClick={()=>dispatch(allActions.deleteUser(users.items.id))} className="ui button negative">Delete</button>
                  <Link to="/" className="ui button ">Cancel</Link>
                </div>
            </div>
        </div>,

        document.querySelector('#modal')
    ))

     
}


export default DeleteUser
