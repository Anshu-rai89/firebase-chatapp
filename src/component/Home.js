import React from "react";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <div>
      <h2>Welcome to Chat App Lets connect</h2>

      <div className="signup-btns">
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/signin">
          {" "}
          <button>Signin</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
