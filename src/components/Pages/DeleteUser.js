import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import allActions from "../../actions.js";

const DeleteUser = (props) => {
  const dispatch = useDispatch();
  const { open, close, userid } = props;

  return (
    <Dialog
      open={open}
      onClose={close}
      userid={userid}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete a User"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this user?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Disagree</Button>
        <Button
          autoFocus
          onClick={() => {
            close();
            dispatch(allActions.deleteUser(props.userid));
          }}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUser;
