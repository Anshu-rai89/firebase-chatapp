import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  console.log("state values", name, setName);
  return (
    <div>
      <div className="container">
        <Link to="/">
          <h3>Chat App</h3>
        </Link>
        <div>
          <div>
            {" "}
            <h4>{name}</h4>
            <button onClick={() => setName("Anshu")}>Update name</button>
          </div>
        </div>

        <img src={props.profilePicture} alt="profile-pic" />
      </div>
    </div>
  );
}

export default Navbar;
