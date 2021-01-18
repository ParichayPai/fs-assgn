import React from "react";
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";
import {Typography} from "@material-ui/core";
import Login from "./Login"
import Signup from "./Signup"
import Button from "@material-ui/core/Button";
const url = "http://localhost:5000/api/v1/" //"https://klenty-backend.herokuapp.com/api/v1/" 

const useStyles = makeStyles((theme) => ({
    header:{
        display: "flex",
        height: 60,
    },
    title: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginLeft: 400,
        paddingLeft: 150,
        margin: "auto",
        marginTop: 5,
        fontFamily: 'Staatliches, cursive',
        cursor: "pointer"
    },
    login:{
        fontSize: 20,
        marginLeft: 50,
        // marginLeft: "auto",
        marginTop: 10,
        marginRight: 30,
        cursor: "pointer",
        border: "1px solid grey",
        borderRadius: 25,
        height: 50,
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    },
    logout: {
        fontSize: 20,
        // marginLeft: "auto",
        // marginLeft: 600,
        marginTop: 10,
        cursor: "pointer",
        border: "1px solid grey",
        borderRadius: 5
    }
}));

export default function Header(props){
    // console.log(props);

    // const [userData, setUserData] = React.useState("Login!");
    const [openLoginForm, setOpenLoginForm] = React.useState(false);
    const [openSignUpForm, setOpenSignUpForm] = React.useState(false);
    const [registerUsername, setRegisterUsername] = React.useState("");
    const [registerPassword, setRegisterPassword] = React.useState("");
    const [loginUsername, setLoginUsername] = React.useState("");
    const [loginPassword, setLoginPassword] = React.useState("");

    const [username, setUsername] = React.useState("Login");

    let style = useStyles();
    const history = useHistory();

    const goToHome = () => {
        history.push("/");
    }

    const loginForm = () => {
        setOpenLoginForm(!openLoginForm);
    }

    const signUpForm = () => {
        setOpenSignUpForm(!openSignUpForm);
    }

    const handleRegisterUsername = (name) => {
        setRegisterUsername(name);
    }

    const handleRegisterPassword = (password) => {
        setRegisterPassword(password);
    }

    const handleLoginUsername = (name) => {
        setLoginUsername(name);
    }

    const handleLoginPassword = (password) => {
        setLoginPassword(password);
    }

    const register = async () => {
        await Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: url+"register",
        }).then((res) => console.log(res));
    };
    const login = async () => {
        await Axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url:url+"login",
        })
            .then(props.getUser())
            .then(window.location.reload()) 
            .catch(err => console.log(err));
    };

    // const getUser = () => {
    //     Axios({
    //         method: "GET",
    //         withCredentials: true,
    //         url: url+"user",
    //     }).then((res) => {
    //         // console.log(res.data)
    //         if(!res.data.username){ //res.data === "No User Exists" || 
    //             // props.handleUser("Login");
    //             setUsername("Login");
    //             console.log("No user ",res.data);
    //             return;
    //         }
    //         setUsername(res.data.username);
    //         // console.log(username+" "+res.data.username);
    //         // props.handleUser(res.data.username);
    //         // console.log("hi", res.data);
    //         // if(res.data !== "No User Exists"){
    //         //     handleUser(res.data);
    //         // }
    //         // // setUserData(res.data);
    //         // console.log(res);
    //     });
    // };

    const logoutFunc = () => {
        props.logout();
        setUsername("Login");
        window.location.reload();
        // if(window.location.href !== "/"){
            // history.push("/");
        // }
    }

    return(
        <div className={style.header}>
            <Button onClick={props.getUser}>getUser</Button> 
            <Typography variant={"h3"} className={style.title} onClick={goToHome} >Bloggy!</Typography>
            <Button 
                variant="contained" 
                id={"logout"} 
                className={style.logout} 
                onClick={logoutFunc} 
                disabled={props.username === "Login"}>
                    Logout
            </Button>
            <Button 
                variant="contained" 
                color="primary" 
                id="profile" 
                className={style.login} 
                onClick={loginForm}>
                    {props.username}
            </Button>
            {openLoginForm ?
                <Login
                    open={openLoginForm}
                    toggle={loginForm}
                    username={username}
                    setUsername={handleLoginUsername}
                    password={loginPassword}
                    setPassword={handleLoginPassword}
                    login={login}
                    handleUserData={props.handleUser}
                    signUp={signUpForm}
                    getUser={props.getUser}
                /> : null}
            {openSignUpForm ?
                <Signup
                    open={openSignUpForm}
                    username={registerUsername}
                    setUsername={handleRegisterUsername}
                    password={registerPassword}
                    setPassword={handleRegisterPassword}
                    toggle={signUpForm}
                    register={register}
                /> : null}
        </div>
    )

}
