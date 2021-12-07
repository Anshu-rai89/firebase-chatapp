import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { regsiterUsersForChat } from "../helpers/db";
import { signup } from "../helpers/auth";
function Signup(props) {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      let user = await signup(email, passsword);
      console.log("user signup success", user);
      regsiterUsersForChat(name, email);
      history.push("/signin");
    } catch (error) {
      setError(error);
    }
  };

  console.log("error", error);
  if (localStorage.getItem("userInfo")) {
    return <Redirect to="/chat" />;
  }
  return (
    <div>
      <div>
        <h4>{error?.message} </h4>
        <div>
          <label>Name </label>
          <input onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email </label>
          <input onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password </label>
          <input onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button onClick={handleSubmit}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;
