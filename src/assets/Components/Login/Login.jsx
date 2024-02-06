import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { env } from "../../config.js";

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [usernameError, setUsernameError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const history = useHistory();

   const handleUsernameChange = (e) => {
      setUsername(e.target.value);
      setUsernameError(""); // Limpiar mensaje de error al cambiar el username
   };

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setPasswordError(""); // Limpiar mensaje de error al cambiar la contraseña
   };

   const signIn = async (email, pass) => {
      const apiKey = env.API_URL + "login";
      try {
         const result = await fetch(apiKey, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               email: email,
               password: pass,
            }),
         });
         const json = await result.json();
         if (json.ok) {
            localStorage.setItem("token", json.token);
            console.log(json);
            console.log(localStorage);
            history.push("/main");
            window.location.reload();
            localStorage.setItem("user", email);
         }else{
            alert("Usuario y contrasena inconrrecto")
         }
      } catch (e) {
         console.log(e);
      }
   };

   const handleLogin = () => {
      let message = [false, false];
      // Validación de campos vacíos
      if (!username.trim()) {
         setUsernameError("Por favor, completa el campo con tu nombre de usuario.");
         message[0] = true;
      }

      if (!password.trim()) {
         setPasswordError("Por favor, completa el campo con tu contraseña.");
         message[1] = true;
      }

      // Simula una validación simple; deberías realizar la autenticación en tu backend
      if (username !== "" && password !== "") {
         signIn(username, password);
      } else {
         alert("Nombre de usuario o contraseña incorrectos");
         if (!message[0]) {
            setUsernameError("Por favor, ingresa un nombre de usuario correcto.");
         }
         if (!message[1]) {
            setPasswordError("Por favor, ingresa una contraseña correcta.");
         }
      }
   };
   return (
      <div className="login">
         <div className="signin">
            <div className="background" />
            <h1 className="sign-in">Sign In</h1>
            <span className="if-you-already">If you already have an account, let’s log in.</span>
            {/* <div className="forget-your-password">Forget Your Password?</div> */}
            <span className="username">Username</span>
            <span className="password">Password</span>
            <div className="field">
               <input className="rectangle-insert-your-nam" name="username" id="username" type="text" placeholder="Insert your username" value={username} onChange={handleUsernameChange} />
               {usernameError && (
                  <div className="error-message" style={{ marginTop: "60px" }}>
                     {usernameError}
                  </div>
               )}
            </div>
            <div className="field1">
               <input className="rectangle-insert-your-nam" type="password" name="password" id="password" placeholder="Insert your password" value={password} onChange={handlePasswordChange} />
               {passwordError && (
                  <div className="error-message" style={{ marginTop: "60px" }}>
                     {passwordError}
                  </div>
               )}
            </div>
            <div className="button">
               <button className="rectangle-button" type="button" onClick={handleLogin} />
               <div className="sign-in1" onClick={handleLogin}>
                  SIGN IN
               </div>
            </div>
         </div>
         <div className="signup">
            <img className="sign-up-side" alt="" src="/sign-up-side.svg" />
            <div className="book-1-parent">
               <Link to="/">
                  <img className="book-1-icon" alt="" src="/book-1@2x.png" />
               </Link>
               <div className="are-you-register">Are you register? No, just sign up for create your own Study Plan.</div>
               <div className="button1">
                  <button className="rectangle-button1" text="Crear nueva cuenta" />
                  <Link to="signup">
                     <button className="create-your-account">CREATE YOUR ACCOUNT</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
