import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Login(props) {
    // console.log(props);
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");

    const handleClose = () => {
        props.toggle();
        props.setUsername("");
        props.setPassword("");
    };

    const loginFunc = async () => {
        // await Axios({
        //     method: "POST",
        //     data: {
        //         username: loginUsername,
        //         password: loginPassword,
        //     },
        //     withCredentials: true,
        //     url:url+"login",
        // })
        // // .then(res => console.log(res))
        //     .then(props.getUser())
        //     // .then(window.location.reload()) 
        //     .catch(err => console.log(err));


        await props.login();
        // handleClose();

        //.then(props.getUser());
        // window.location.reload();
        // props.handleUserData("BOI");
        // let obj = props.getUser();
        // console.log(obj);
        // props.handleUserData("BOI");
    }

    return (
        <div className={"LoginDialog"}>
            <Dialog open={props.open} onClose={handleClose} >
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter Username and Password to Login
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
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
                    <Button onClick={loginFunc} color="secondary">
                        Save
                    </Button>
                    <Button onClick={() => {handleClose(); props.signUp()}} variant="contained">
                        Sign Up
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
