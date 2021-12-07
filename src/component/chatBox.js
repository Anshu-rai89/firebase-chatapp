import React, { useState } from "react";
import { writeMessage } from "../helpers/db";
function ChatBox(props) {
  const [msg, setMessage] = useState("");
  const { msgs } = props;
  const email = localStorage.getItem("userInfo");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    writeMessage(msg, email);
    setMessage("");
  };
  return (
    <div className="chabox">
      <div>
        {msgs &&
          msgs.map((msg) => (
            <div>
              <div className={msg.userInfo !== email ? "left" : "right"}>
                {msg.content}
              </div>
            </div>
          ))}
      </div>
      <form onSubmit={handleOnSubmit}>
        <input value={msg} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ChatBox;
