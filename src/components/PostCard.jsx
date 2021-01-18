import React from "react";
import {Box, Button, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1.5),
        height:50,
    },
    card: {
        height: 150,
        width: "75%",
        margin: 15,
        marginLeft:"auto",
        marginRight:"auto"
    },
    titleBox:{
        height: 50,
    },
    title:{
        display: "flex",
        marginRight:"auto",
        marginLeft: 15,
        marginTop:10
    },
    header:{
        display:"flex",
        flexDirection: "row"
    },
    user:{
        marginLeft: "auto",
        marginRight: 20,
        marginTop:10,
    },
    coloredName: {
        color: 'grey'
    }
}));

export default function PostCard(props){
    const style = useStyles();
    const history = useHistory();
    const {title, username, description} = props.data;
    const id = props.data._id;
    const currentUser = props.currentUser;

    // console.log(props);
    const handleClickOnCard = (id, title, description, index, saveData, currentUser, getUser, logout) => {
        history.push({
            pathname: `/post/${index}/`,
            search: `?title=${title}`,
            state: {
                id,
                title,
                description,
                username
            },
            saveData: saveData,
            getUser: getUser,
            logout: logout,
            currentUser: currentUser
        })
    }
    return (
        <>
            <Paper
                // key={props.key}
                elevation={3}
                m={5}
                className={style.card}
            >
                <Box onClick={() => handleClickOnCard(id, title, description, props.index, props.saveData, currentUser, props.getUser, props.logout )}>
                    <div className={style.titleBox} >
                        <Box className={style.header}>
                            <Typography variant="h4" className={style.title}>{title}</Typography>
                            <Typography variant="h5" className={style.user}>
                                posted by {" "}
                                <span className={style.coloredName}>{username}</span>
                            </Typography>
                        </Box>
                    </div>

                    <hr/>
                    <div className={"cardBody"}>
                        <Typography variant="h6" className={style.title}>{`${description.substring(0,50)}...`}</Typography>
                        <Button>
                            Read More
                        </Button>
                    </div>
                </Box>
            </Paper>
        </>
    )
}