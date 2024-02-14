import React, { useState } from "react";
import styles from "./Register.module.css";
import signupside from "../../assets/images/LoginImage.png";
import { Link } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'; 

const Register = () => {
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "",
   });

   const [formErrors, setFormErrors] = useState({});

   const [touchedFields, setTouchedFields] = useState({
      fullName: false,
      email: false,
      password: false,
      confirmPassword: false,
      userType: false,
   });

   const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña
   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });

      // Marcar el campo como "tocado" cuando se escribe algo
      setTouchedFields({
         ...touchedFields,
         [name]: true,
      });

      // Eliminar el mensaje de error asociado a este campo
      setFormErrors({
         ...formErrors,
         [name]: "", // Resetear el error si se está escribiendo en el campo
      });
   };

   const handleInputFocus = (e) => {
      const { name } = e.target;
      // Eliminar el borde rojo cuando el campo recibe el foco
      document.getElementsByName(name)[0].style.borderBottomColor = "";
      document.getElementsByName(name)[0].style.borderColor = "";
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const errors = {};

      // Validación de campos requeridos
      if (!formData.fullName.trim()) {
         errors.fullName = "Por favor, ingresa un nombre completo.";
         alert("Por favor, ingresa un nombre completo.");
         document.getElementsByName("fullName")[0].style.borderBottomColor = "red";
      }
      if (!formData.email.trim()) {
         errors.email = "Por favor, ingresa tu email institucional.";
         alert("Por favor, ingresa tu email institucional.");
         document.getElementsByName("email")[0].style.borderBottomColor = "red";
      }
      if (!formData.password.trim()) {
         errors.password = "Por favor, ingresa tu contraseña";
         alert("Por favor, ingresa tu contraseña");
         document.getElementsByName("password")[0].style.borderBottomColor = "red";
      }
      if (!formData.confirmPassword.trim()) {
         errors.confirmPassword = "Please confirm your password";
         alert("Por favor, ingresa tu contraseña de confirmación");
         document.getElementsByName("confirmPassword")[0].style.borderBottomColor = "red";
      }
      if (!formData.userType.trim()) {
         errors.userType = "Please select user type";
         alert("Por favor, selecciona tu tipo de usuario.");
         document.getElementsByName("userType")[0].style.borderColor = "red";
      }

      // Validación del email (expresión regular)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email) && formData.email.trim()) {
         errors.email = "Invalid email address";
         alert("El email no es valido.");
         document.getElementsByName("email")[0].style.borderBottomColor = "red";
      }

      // Validación de email institucional
      if (!formData.email.endsWith("@itla.edu.do") && formData.email.trim()) {
         errors.email = "Invalid email address";
         alert("El email no es institucional.");
         document.getElementsByName("email")[0].style.borderBottomColor = "red";
      }

      // Validación de la contraseña
      if (formData.password !== formData.confirmPassword && formData.password.trim() && formData.confirmPassword.trim()) {
         errors.confirmPassword = "Passwords do not match";
         alert("Las contraseñas no coindicen");
         document.getElementsByName("confirmPassword")[0].style.borderBottomColor = "red";
      }
      if (formData.password.length < 8 && formData.password.trim()) {
         errors.password = "Password must be at least 8 characters long";
         alert("La contraseña debe tener mas de 8 caracteres.");
         document.getElementsByName("password")[0].style.borderBottomColor = "red";
      }

      if (formData.fullName.length < 4 && formData.fullName.trim()) {
         errors.fullName = "Su nombre completo debe tener minimo 4 caracteres.";
         alert("Su nombre completo debe tener minimo 4 caracteres.");
         document.getElementsByName("fullName")[0].style.borderBottomColor = "red";
      }
      
      if (Object.keys(errors).length === 0) {
         // Envío del formulario si no hay errores
         // Aquí se implementaría una función para enviar los datos
         // signUp(formData);
      } //else {
         //alert("Please fill in all required fields");
      //}
   };

   return (
      <div className={styles.registerContainer}>
         <div className={styles.formContainer}>
            <h1 className={styles.title}>StudentAcademy</h1>
            <h2 className={styles.subtitle}>Register now!</h2>
            <form onSubmit={handleSubmit}>
               <div className={styles.form}>
                  <input
                     type="text"
                     name="fullName"
                     value={formData.fullName}
                     onChange={handleInputChange}
                     onFocus={handleInputFocus}
                     placeholder="Full Name"
                     className={styles.input}
                  />

                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     onFocus={handleInputFocus}
                     placeholder="Email Institutional"
                     className={styles.input}
                  />

                  <div className={styles.passwordContainer}>
                     <input 
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        placeholder="Password"
                        className={styles.input}
                     />
                     <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        placeholder="Confirm Password"
                        className={styles.input}
                     />
                     <div className={styles.passwordToggleIcon} onClick={togglePasswordVisibility}>
                        {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                     </div>
                  </div>

                  <select
                     name="userType"
                     value={formData.userType}
                     onChange={handleInputChange}
                     onFocus={handleInputFocus}
                     className={styles.select}
                  >
                     <option value="">User Type</option>
                     <option value="student">Student</option>
                     <option value="teacher">Teacher</option>
                     <option value="admin">Admin</option>
                  </select>
               </div>
               <button type="submit" className={styles.loginButton}>
                  Sign Up
               </button>
            </form>
            <div className={styles.signupMessage}>
               Already have an account? <Link to="/login" className={styles.signupLink}>Sign in</Link>
            </div>
         </div>
         <div className={styles.imageContainer}>
            <img src={signupside} alt="Background" className={styles.image} />
         </div>
      </div>
   );
};

export default Register;
