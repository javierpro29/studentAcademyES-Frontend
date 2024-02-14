import React, { useState } from "react";
import styles from "./Login.module.css";
import signupside from "../../assets/images/LoginImage.png";
import { Link } from "react-router-dom";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [rememberMe, setRememberMe] = useState(false);

   const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailError(""); // Limpiar mensaje de error al cambiar el email
   };

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setPasswordError(""); // Limpiar mensaje de error al cambiar la contraseña
   };

   const handleRememberMeChange = () => {
      setRememberMe(!rememberMe);
   };

   const handleLogin = () => {
      // Validación de campos
      if (!email.trim()) {
         setEmailError("Por favor, ingresa tu dirección de correo electrónico.");
      }

      if (!password.trim()) {
         setPasswordError("Por favor, ingresa tu contraseña.");
      }

      // Validación de email institucional
      if (!email.endsWith("@itla.edu.do")) {
         setEmailError("Por favor, utiliza un correo electrónico institucional.");
         return;
      }

      // Autenticación (aquí iría tu lógica de autenticación)
   };

   return (
      <div className={styles.login}>
         <div className={styles.imageContainer}>
            {/* Aquí iría la imagen de la parte izquierda */}
            <img src={signupside} alt="Sign Up Side" className={styles.image} />
         </div>
         <div className={styles.formContainer}>
            <h1 className={styles.title}>StudentAcademy</h1>
            <h2 className={styles.subtitle}>Welcome, login to your account!</h2>
            <div className={styles.form}>
               <input className={styles.input} type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
               {emailError && <div className={styles.error}>{emailError}</div>}
               <input className={styles.input} type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
               {passwordError && <div className={styles.error}>{passwordError}</div>}
               <div className={styles.rememberMeContainer}>
                  <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
                  <label htmlFor="rememberMe"className={styles.checkbox}>Remember me </label>
                  <span className={styles.forgotPassword}>Forgot password?</span>
               </div>
               <button className={styles.loginButton} onClick={handleLogin}>Login now</button>
               <div className={styles.signupMessage}>
                  Don’t have an account yet? <Link to="/register" className={styles.signupLink}>Sign up!</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
