import { auth } from "../firebase";

export async function signup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  console.log("signi in user", email, password);
  return auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return auth.signOut();
}
