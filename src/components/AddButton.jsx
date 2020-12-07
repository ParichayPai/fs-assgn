import React from "react";
import {Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import AddPost from "./AddPost";


const useStyles = makeStyles((theme) => ({
    addButton: {
        marginLeft: "auto",
        marginRight: 10,
        // marginTop: 15,
        height: 35
    },
}));


export default function AddButton(props) {
    // console.log("---",props);
    const style = useStyles();

    let [openDialogue, setOpenDialogue] = React.useState(false);

    const handleOpenDialogue = () => {
        // if(!props.user){
        //     return;
        // }
        setOpenDialogue(!openDialogue);
    }

    return (
        <>
            <div className={"addButtonDiv"}>
                <Button
                    size="small"
                    className={style.addButton}
                    variant="contained"
                    onClick={()=>handleOpenDialogue()}
                    disabled={props.user === "Login"}
                >Add Post
                </Button>
            </div>
            {openDialogue ? <AddPost
                username={props.user}
                openDialogue={handleOpenDialogue}
                open={openDialogue}
                saveData={props.saveData}
            /> : null}
        </>
    )
}