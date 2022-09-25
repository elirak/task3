import React, { useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";

import allActions from '../../actions.js';
import UserDetails from "./UserDetails.js";
const UserList=()=>{

    const users=useSelector(state=>state.users)

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(allActions.fetchUsers());
    
    }, []);

    
    const handleChange=(e)=>{
     
        const selectedUser=dispatch(allActions.selectUser(e)).payload;
        console.log('list selected ', selectedUser);
        
    };

  

    const renderList=()=>{
       return users?.map(user=>{
            return ({
                        id:user.id,
                        label:user.name, value:user.name,
                        email: user.email,
                        street:user.address.street,
                        suite:user.address.suite,
                        city:user.address.city,
                        zipcode:user.address.zipcode,
                        phone:user.phone,
                        website:user.website,
                        company:user.company
                    })
       });
    }

   

    return (
     
          <div>           
    
            <Select options={renderList()}
                    value={users.value}
                    onChange={(e)=>handleChange(e)} isMulti
                    clearable={false}
                    />    
                    <UserDetails/>
                    <br/>
          </div>
      
        );
}



export default UserList;

