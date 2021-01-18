import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Header from "./Header"
import AddButton from "./AddButton"
import PostCard from "./PostCard"
import Axios from "axios";
const backendUrl = "http://localhost:5000/api/v1/"  //"https://klenty-backend.herokuapp.com/api/v1/"; 

const useStyles = makeStyles((theme) => ({
   home:{
       display:"flex",
       flexDirection: "column",
       justifyContent:"center",
       flexWrap: "wrap",
    },
}));


export default function Home(){
    const style = useStyles();

    const [postList, setPostList] = React.useState([]);
    const [user, setUser] = React.useState("Login");

    const handleUser = (name) => {
        // console.log(name);
        // if(name === "Login"){
        //     setUser(name);
        //     return
        // }
        setUser(name);
    }

    const getData = () => {
        fetch(backendUrl+"posts", {
            method : "get",
        }).then(res => res.json())
            .then(res2 => {setPostList(res2)});
    }

    React.useEffect(async () => {
        await getData();
        await getUser();
    }, []);


    const saveData = (title, description, username) => {
        Axios.post(backendUrl+"posts/", {
            title,
            description,
            username
        }).then(()=>{getData();console.log("post sent")})
            .catch(err => console.log(err));
    }

    const getUser =  () => {
         Axios({
            method: "GET",
            withCredentials: true,
            url: backendUrl+"user",
        }).then((res) => {
            // console.log(res.data);
            // if(res.data === "No User Exists" || !res.data.username){
            //     handleUser("Login");
            //     console.log("No user",res.data);
            //     return;
            // }
            console.log(res.data)

            if(!res.data.username){
                handleUser("Login");
                console.log("No user",res.data);
                return;
            }
            // handleUser("Login1");
            handleUser(res.data.username);
            // console.log("hi", res.data);
            // if(res.data !== "No User Exists"){
            //     handleUser(res.data);
            // }
            // // setUserData(res.data);
            // console.log(res);
        });
    };

    // React.useEffect(() => {
    //     getUser();
    //     // if(!user){
    //     //     handleUser("Login");
    //     // }
    // }, []);

    const logout = async () => {
        console.log("Logging Out")
        setUser("Login");
        await Axios({
            method: "GET",
            withCredentials: true,
            url: backendUrl+"logout",
        }).then((req, res) => {
            // if(res.data !== "No User Exists"){
            //     handleUser(res.data);
            // }
            // setUserData(res.data);
            console.log(req.user);
            console.log("done Logging out");
            setUser("Login");
            // req.user = undefined;
        });
    }
    
    return(
        <>
            <Header handleUser={handleUser} username={user} logout={logout} getUser={getUser}/>
            <hr />
            <div className={"appBody"}>
                <AddButton saveData={saveData} user={user}/>
                <hr />
                {/* {homePage ?  */}
                <div className={style.home} > {/* onClick={(e) => handleClick(e)} */}
                    {(postList.length === 0) ?
                        <div className={"center"}><h2 className={"noPosts"}>No Posts Added!</h2></div>
                        : postList.map((post, index) => {
                            return <PostCard
                                data={post}
                                key={`${post.title}${index}`}
                                index={index}
                                saveData={saveData}
                                getUser={getUser}
                                logout={logout}
                                currentUser={user}
                            />
                        })
                    }
                </div> 
                        {/* // : <Post 
                        //     title={"abc"}
                        //     description={"asdda"}  // postList.filter( ele.title === e.ta)
                        //     id={1231}
                        //     backFunc={handleClick}
                        // />
                        // } */}
            </div>
        </>
    )
}
