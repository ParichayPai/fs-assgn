import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Signup(props) {

    const handleClose = () => {
        props.toggle();
        props.setUsername("");
        props.setPassword("");
    };

    const signup = () => {
        props.register();
        handleClose();
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose} >
                <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Sign up for the site please enter your details!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        value={props.username}
                        onChange={e => props.setUsername(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={props.password}
                        onChange={e => props.setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={signup} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
