import { makeStyles } from "@material-ui/core";
import React from "react";
// import logo from "./logo.png"

const useStyles = makeStyles(() => ({
    comment: {
        height: "auto",
        marginTop: 20,
        backgroundColor: "white",
        paddingBlockEnd: 20
    },
    logo:{
        height: 50,
        width: 50,
    },
    header:{
        display: "flex",
    },
    img:{
        margin: 10,
        backgroundColor:"wheat",
        borderRadius:2
    },
    userName:{
        fontSize: 30,
        marginTop: 20,
        marginLeft: 20
        // marginTop:"auto"
    },
    body:{
        textAlign: "left",
        marginLeft: 10,
        marginTop: 10,
        height: "auto"
    },
    timeStamp:{
        fontSize: 20,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10
    }
}))

export default function Comment(props){
    const style = useStyles();
    const {username, description, timeStamp} = props.data;
    // console.log(timeStamp.toLocaleString());
    return (
        <div className={style.comment}>
            <div className={style.header}>
                <span className={style.img}><img src={"logo"} alt={"logo"} className={style.logo}/></span>
                <span className={style.userName}>{username}</span>
                <span className={style.timeStamp}>{`posted at ${timeStamp}`}</span>
            </div>
            <div className={style.body}>
                {description}
            </div>
        </div>
    )
}