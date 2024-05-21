import React from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import Login from "./Login.js";
import { auth } from "./firebase.js";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSlice";
import { useEffect } from "react";
import { logout } from "./features/user/userSlice";
import Widgets from "./Widgets.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
