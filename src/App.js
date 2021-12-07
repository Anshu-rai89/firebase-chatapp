import "./App.css";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./component/Home";
import Signin from "./component/login";
import Signup from "./component/signup";
import FourOFour from "./component/404";
import Navbar from "./component/navbar";
import Chat from "./component/chat";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

const profilePic =
  "https://yt3.ggpht.com/yti/APfAmoEh3Q8f2tMT2ixHZsrniLzi4IU1tkhCs82VPY-BeA=s88-c-k-c0x00ffffff-no-rj-mo";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const user = auth.currentUser;
    setCurrentUser(user);
  }, []);

  console.log("user", currentUser);
  const userEmail = localStorage.getItem("userInfo");
  function PrivateRoute({ Component, props, path }) {
    return (
      <Route
        path={path}
        render={(props) =>
          userEmail ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    );
  }
  return (
    <div className="App">
      <h2>Hello word</h2>
      <Router>
        <Navbar profilePicture={profilePic} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <PrivateRoute path="/chat" Component={Chat} />
          <Route component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
