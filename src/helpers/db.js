import { database } from "../firebase";

export function regsiterUsersForChat(name, email) {
  database.ref("users").push({
    name,
    email,
  });
}

export function writeMessage(content, email) {
  database.ref("msgs").push({
    content,
    timestamp: Date.now(),
    userInfo: email,
  });
}
