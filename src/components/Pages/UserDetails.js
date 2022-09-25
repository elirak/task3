import React, { useEffect } from "react";
import allActions from '../../actions.js';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const UserDetails =()=>{

  
  const users=useSelector(state=>state.selectUserReducer)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(allActions.selectUser());

}, []);





  

    if (!users.items?.length){
        return <div>Select a user</div>
    }


   const renderList=()=>{
    return users?.items?.map(user=>{
      
        return (
          <div key={user.id}>
            <div  key={user.id} className="ui card" style={{margin:'20px'}}>
            <div className="content" >
              <Link to={`/delete/${user.id}`} > <i  className="x icon"></i></Link>
              <div className="header">{user.label}</div>
            </div>
            <div className="content">
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary">
                       Email : {user.email}
                    </div>
                  </div>
                </div>
                <div className="event">
                  <div className="content">
                    <div className="summary">
                      Address: {user.street} , {user.city}
                    </div>
                  </div>
                </div>
                <div className="event">
                  <div className="content">
                    <div className="summary">
                       Phone: {user.phone}
                    </div>
                  </div>
                </div>
                <div className="event">
                  <div className="content">
                    <div className="summary">
                       Company: {user.company.name}
                    </div>
                  </div>
                </div>
                <div className="event">
                  <div className="content">
                    <div className="summary">
                       <a href={`http://${user.website}`}  target="_blank" rel="noreferrer noopener">{user.website}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>     
          </div>  
        )  
    })
   }
  

    return (
        <div>     
          {renderList()}
          <br/>

        </div>
    )
}



export default UserDetails;