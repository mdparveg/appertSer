import React, { useEffect } from "react";
import "./Login.css";
import { useHistory, Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from "./firebase.config";
import logo from "../../Resource/google.png";

function Login({ user, setUser }) {
  const history = useHistory();

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("apartment-hunt")) || {});
  //   if (user?.email) {
  //     history.replace("/admin/bookinglist");
  //   }
  // }, []);

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });

    await auth
      .signInWithPopup(provider)
      .then(function (result) {
        const newUser = result.user;
        localStorage.setItem(
          "apartment-hunt",
          JSON.stringify({
            name: newUser.displayName,
            email: newUser.email,
            image: newUser.photoURL,
            id: newUser.uid,
          })
        );
        setUser({
          name: newUser.displayName,
          email: newUser.email,
          image: newUser.photoURL,
          id: newUser.uid,
        });
      })
      .then(() => {
        history.push("/admin/bookinglist");
      })
      .catch(function (error) {
        alert(error.message);
        return;
      });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
      </div>
      <div className="login__body">
        <h3>Login With</h3>
        <button className="login__btn" onClick={loginWithGoogle}>
          <img
            src="https://img.icons8.com/color/452/google-logo.png"
            alt=""
            className="login__btnLogo"
          />
          <p className="m-auto">Continue with google</p>
        </button>
        <p>
          Don't have an account? <Link to="/login">Create an account</Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;