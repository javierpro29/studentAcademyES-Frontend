import React,{ useState } from "react";
import styles from "./Register.module.css";
import Book from "../../assets/images/book.png";
import Background from "../../assets/images/Background.png";
import { Link } from "react-router-dom";
//import { env } from "../../config";
//import { useHistory } from "react-router-dom";

const Register = () => {
   //const history = useHistory();
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   const [formErrors, setFormErrors] = useState({});

   const [touchedFields, setTouchedFields] = useState({
      firstName: false,
      lastName: false,
      username: false,
      email: false,
      password: false,
      confirmPassword: false,
   });

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
   /*
   const signUp = async ({ firstName, lastName, username, email, password }) => {
      const apiKey = env.API_URL + "register";
      try {
         const result = await fetch(apiKey, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               name: formData.firstName,
               lastName: formData.lastName,
               username: formData.username,
               email: formData.email,
               password: formData.password,
            }),
         });
         const json = await result.json();
         console.log(json);

         setFormData({ firstName: "", lastName: "", username: "", email: "", password: "", confirmPassword: "" });
      } catch (e) {
         console.log(e);
      }
   };*/
   const handleSubmit = (e) => {
      e.preventDefault();
      const errors = {};
      let alertMessage = true;
      // Validaciones

      // Validación de campos requeridos (por ejemplo, nombre y apellido)
      if (!formData.firstName.trim()) {
         errors.firstName = "Por favor, ingresa tu nombre";
         alertMessage = false;
      }
      if (!formData.lastName.trim()) {
         errors.lastName = "Por favor, ingresa tu apellido";
         alertMessage = false;
      }
      if (!formData.username.trim()) {
         errors.username = "Por favor, ingresa tu nombre de usuario";
         alertMessage = false;
      }

      // Validación del email (expresiones regulares)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
         errors.email = "El email no es válido";
         alertMessage = false;
      }

      if (!alertMessage) alert("Existen campos vacíos");
      // Validación de la contraseña
      if (alertMessage && formData.password !== formData.confirmPassword) {
         errors.confirmPassword = "Las contraseñas no coinciden";
         alert("Las contraseñas no coinciden");
      }
      if (alertMessage && formData.password.length < 8) {
         errors.password = "La contraseña debe tener al menos 8 caracteres";
         alert("La contraseña debe tener al menos 8 caracteres");
      }

      // Otras validaciones necesarias...

      if (Object.keys(errors).length === 0) {
         // Envío del formulario si no hay errores
         // Aquí se implementa una función para enviar los datos
         signUp(formData);
      } else {
         setFormErrors(errors);

         // Marcar todos los campos como tocados para que muestren el borde rojo
         setTouchedFields({
            firstName: true,
            lastName: true,
            username: true,
            email: true,
            password: true,
            confirmPassword: true,
         });
      }
   };
   return (
      <div className={styles.registerContainer}>
         <div className={styles.formContainer} style={{ backgroundImage: `url(${Background})` }}>
            <h1 className={styles.signUp}>Sign Up</h1>
            <h2 className={styles.createYourAccount}>Create Your Account</h2>
            <form onSubmit={handleSubmit}>
               <div className={styles.fullnameRow}>
                  <div className={styles.labelinput}>
                     <label htmlFor="firstName">Name</label>
                     <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Ingresa tu nombre" className={touchedFields.firstName && formData.firstName.trim() === "" ? styles.inputFieldEmpty : styles.inputField} />
                  </div>
                  <div className={styles.labelinput}>
                     <label htmlFor="lastName">Last Name</label>
                     <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Ingresa tu apellido" className={touchedFields.lastName && formData.lastName.trim() === "" ? styles.inputFieldEmpty : styles.inputField} />
                  </div>
               </div>
               <div className={styles.formRow}>
                  <div className={styles.labelinput}>
                     <label htmlFor="username">Username</label>
                     <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} placeholder="Ingresa tu nombre de usuario" className={touchedFields.username && formData.username.trim() === "" ? styles.inputFieldEmpty : styles.inputField} />
                  </div>
               </div>
               <div className={styles.formRow}>
                  <div className={styles.labelinput}>
                     <label htmlFor="email">Email</label>
                     <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Ingresa tu correo electrónico" className={touchedFields.email && formData.email.trim() === "" ? styles.inputFieldEmpty : styles.inputField} />
                  </div>
               </div>
               <div className={styles.formRow}>
                  <div className={styles.labelinput}>
                     <label htmlFor="password">Password</label>
                     <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Ingresa tu contraseña" className={touchedFields.password && formData.password.trim() === "" ? styles.inputFieldEmpty : styles.inputField} />
                  </div>
               </div>
               <div className={styles.formRow}>
                  <div className={styles.labelinput}>
                     <label htmlFor="confirmPassword">Confirm Password</label>
                     <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirma tu contraseña" className={touchedFields.confirmPassword && formData.confirmPassword.trim() === "" ? styles.inputFieldEmpty : styles.inputField} />
                  </div>
               </div>
               <button className={styles.btnRegister} type="submit">
                  SIGN UP
               </button>
            </form>
         </div>
         <div className={styles.rightSection}>
            <div className={styles.iconText}>
               <Link to="/">
                  <img src={Book} style={{ marginBottom: "25px" }} alt="Imagen para el inicio de sesion" />
               </Link>
               <p>Are you Already have an Account?</p>
            </div>
            <Link to="login" className={styles.btnLogin}>
               SIGN IN
            </Link>
         </div>
      </div>
   );
};
export default Register;
