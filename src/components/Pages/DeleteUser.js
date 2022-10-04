import React from 'react';
import {useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import allActions from '../../actions.js';

const DeleteUser=(props)=>{

    const dispatch=useDispatch();

    return(

    <Dialog 
        open={props.open}
        onClose={props.close}
        userid={props.userid}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete a User"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Disagree</Button>
          <Button autoFocus onClick={()=> { props.close(); dispatch(allActions.deleteUser(props.userid))}}>
            Agree
          </Button>
        </DialogActions>
  </Dialog>
    )

     
}

export default DeleteUser
