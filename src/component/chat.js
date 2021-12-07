import React, { useEffect, useState } from "react";
import { logout } from "../helpers/auth";
import { useHistory } from "react-router-dom";
import { database } from "../firebase";
import ChatBox from "./chatBox";
function Chat(props) {
  const [users, setUsers] = useState([]);
  const [showChatBox, setShowChatBox] = useState(false);
  const [msgs, setMessages] = useState([]);
  const history = useHistory();
  const signOut = () => {
    logout();
    localStorage.removeItem("userInfo");
    history.push("/");
  };
  const user = localStorage.getItem("userInfo");

  const readAllUsers = () => {
    console.log("inside useEffect");
    database.ref("users").on("value", (snaps) => {
      let users = [];
      console.log("inside listener");
      snaps.forEach((snap) => {
        const user = snap.val();
        users.push({
          name: user.name,
          email: user.email,
        });
      });
      console.log("user is", users);
      setUsers(users);
    });
  };

  const readAllMessages = () => {
    database.ref("msgs").on("value", (snapshots) => {
      let messages = [];
      snapshots.forEach((snap) => {
        let singleMsg = snap.val();
        messages.push(singleMsg);
      });
      console.log("mesggafesare", messages);
      setMessages(messages);
    });
  };
  useEffect(() => {
    readAllUsers();
    readAllMessages();
  }, []);
  return (
    <div>
      <h4>Hey {user} Lets chat</h4>
      <button onClick={signOut}> Signout</button>{" "}
      <button onClick={() => setShowChatBox(true)}>Chat With Users </button>
      <div style={{ height: "200px", width: "80%" }}>
        {users.map((user) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li style={{ margin: "20px" }}>{user.name}</li>{" "}
          </div>
        ))}
      </div>
      {showChatBox && <ChatBox msgs={msgs} />}
    </div>
  );
}

export default Chat;
