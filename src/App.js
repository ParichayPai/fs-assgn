import './App.css';
import {Switch, Route, Redirect} from "react-router"
import Home from "./components/Home";
// import Login from "./components/Login"
// import Signin from "./components/Signup"
import Post from "./components/SinglePost"

function App() {
  return (
    <div className="App">
     <Switch>
         {/*<Route path={"/login"} component={Login} />*/}
         {/*<Route path={"/signin"} component={Signin} />*/}
         <Route path={"/post"} component={Post} />
         <Route path={"/"} component={Home} />
         <Redirect to={Home} />
     </Switch>
    </div>
  );
}

export default App;
