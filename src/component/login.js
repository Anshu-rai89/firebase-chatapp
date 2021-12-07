import React, { useEffect, useState } from "react";
import { signin } from "../helpers/auth";
import { useHistory, Redirect } from "react-router-dom";
function Signin(props) {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();
  const handleSubmit = async () => {
    try {
      let user = await signin(email, passsword);
      console.log(" user after signin", user.user.email);
      localStorage.setItem("userInfo", user.user.email);
      history.push("/chat");
    } catch (error) {
      setError(error);
    }
  };

  if (localStorage.getItem("userInfo")) {
    return <Redirect to="/chat" />;
  }

  return (
    <div>
      <h4>{error?.message} </h4>
      <div>
        <label>Email </label>
        <input onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password </label>
        <input onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button onClick={handleSubmit}>Signin</button>
    </div>
  );
}

export default Signin;
