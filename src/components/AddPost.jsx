import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddPost(props) {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");

    let username = props.username;

    const handleClose = () => {
        props.openDialogue();
    };

    const handlePost = (title, description, username) => {
        props.saveData(title, description, username);
        handleClose();
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose} >
                <DialogTitle id="form-dialog-title">Time to Scribble</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Now that you're logged in you can add as many posts as you want!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        multiline
                        rows={4}
                        variant="filled"
                        fullWidth
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={() => handlePost(title, description, username)} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
