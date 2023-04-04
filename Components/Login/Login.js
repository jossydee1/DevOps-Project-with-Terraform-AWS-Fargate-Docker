import React, { useState } from "react";
import "./Login.css";
import Logo from "../Header/Amazon_logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();

    // firebase here

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(error => alert(error.message));
  };
  const register = e => {
    e.preventDefault();

    // firebase here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        //It succefully created a user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={Logo} />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </form>
        <button type="submit" onClick={signIn} className="login__signInButton">
          Sign In
        </button>

        <p>
          By signing in, you agree to give me web development jobs. I am very
          much available. Let's code the code!
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
