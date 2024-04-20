import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import styles from "./Login.module.css";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import signupside from "../../assets/images/LoginImage.png";
import logoImg from "../../assets/images/Logo2.png";
import { Link, useNavigate } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation Login($usernameOrEmail: String!, $password: String!) {
    login(usernameOrEmail: $usernameOrEmail, password: $password) {
      user{
      id
      username
      firstName
      rol{
        id
        rolname
      }
      lastName
      email
      }
      token
    }
  }
`;
let user

const Login = () => {
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async () => {
    if (!email.trim()) {
      setEmailError("Por favor, ingresa tu dirección de correo electrónico.");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Por favor, ingresa tu contraseña.");
      return;
    }

    if (!email.endsWith("@itla.edu.do")) {
      setEmailError("Por favor, utiliza un correo electrónico institucional.");
      return;
    }
    
    
    try {
      const { data } = await loginMutation({
        variables: {
          usernameOrEmail: email,
          password,
        },
      });
      
      user = data.login.user
      const token = data.login.token;
      console.log("Login successful! Token:", token);
      console.log("Login successful! User:", user);

      // Redirige a la página "/home"
      navigate("/home");
    } catch (error) {
      console.error("Error en la autenticación:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={signupside} alt="Sign Up Side" className={styles.image} />
        </div>
        <div className={styles.formContainer}>
          <img src={logoImg} alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>StudentAcademy</h1>
          <h2 className={styles.subtitle}>Welcome, login to your account!</h2>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div className={styles.error}>{emailError}</div>}

            <div className={styles.passwordContainer}>

              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && <div className={styles.error}>{passwordError}</div>}
              <div
                className={styles.passwordToggleIcon}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
              </div>

            </div>

            <div className={styles.rememberMeContainer}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe" className={styles.checkbox}>
                Remember me{" "}
              </label>
              <span className={styles.forgotPassword}>Forgot password?</span>
            </div>
            <button className={styles.loginButton} onClick={handleLogin}>
              Login now
            </button>
            <div className={styles.signupMessage}>
              Don’t have an account yet?{" "}
              <Link to="/register" className={styles.signupLink}>
                Sign up!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
export { user };