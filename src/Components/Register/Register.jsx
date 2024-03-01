import React, {useState} from "react";
import styles from "./Register.module.css";
import signupside from "../../assets/images/LoginImage.png";
import {Link} from "react-router-dom";
import {RiEyeLine, RiEyeOffLine} from "react-icons/ri";
import {useMutation, gql} from "@apollo/client";

const SAVE_USER_MUTATION = gql`
	mutation SaveUser($user: UserInputType!) {
		saveUser(user: $user) {
			id
			creationDate
			modificationDate
			username
			firstName
			lastName
			email
			roleId
			rol {
				id
				rolname
			}
		}
	}
`;

const Register = () => {
	const [formData, setFormData] = useState({
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		rolname: "",
	});

	const [formErrors, setFormErrors] = useState({});

	const [touchedFields, setTouchedFields] = useState({
		username: false,
		firstName: false,
		lastName: false,
		email: false,
		password: false,
		confirmPassword: false,
		rolname: false,
	});

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const [saveUserMutation, {loading: savingUser}] =
		useMutation(SAVE_USER_MUTATION);

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});

		setTouchedFields({
			...touchedFields,
			[name]: true,
		});

		setFormErrors({
			...formErrors,
			[name]: "",
		});
	};

	const handleInputFocus = (e) => {
		const {name} = e.target;
		document.getElementsByName(name)[0].style.borderBottomColor = "";
		document.getElementsByName(name)[0].style.borderColor = "";
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errors = {};

		// Validaciones
		if (!formData.username.trim()) {
			errors.username = "Por favor, ingresa un nombre de usuario.";
			document.getElementsByName("username")[0].style.borderBottomColor = "red";
		}
		if (!formData.firstName.trim()) {
			errors.firstName = "Por favor, ingresa tu primer nombre.";
			document.getElementsByName("firstName")[0].style.borderBottomColor =
				"red";
		}
		if (!formData.lastName.trim()) {
			errors.lastName = "Por favor, ingresa tu apellido.";
			document.getElementsByName("lastName")[0].style.borderBottomColor = "red";
		}
		if (!formData.email.trim()) {
			errors.email = "Por favor, ingresa tu email institucional.";
			document.getElementsByName("email")[0].style.borderBottomColor = "red";
		}
		if (!formData.password.trim()) {
			errors.password = "Por favor, ingresa tu contraseña";
			document.getElementsByName("password")[0].style.borderBottomColor = "red";
		}
		if (!formData.confirmPassword.trim()) {
			errors.confirmPassword = "Por favor, confirma tu contraseña";
			document.getElementsByName("confirmPassword")[0].style.borderBottomColor =
				"red";
		}
		if (!formData.rolname.trim()) {
			errors.rolname = "Por favor, selecciona tu rol.";
			document.getElementsByName("rolname")[0].style.borderColor = "red";
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email) && formData.email.trim()) {
			errors.email = "Dirección de correo electrónico no válida";
			document.getElementsByName("email")[0].style.borderBottomColor = "red";
		}

		if (!formData.email.endsWith("@itla.edu.do") && formData.email.trim()) {
			errors.email = "Utiliza un correo electrónico institucional.";
			document.getElementsByName("email")[0].style.borderBottomColor = "red";
		}

		if (
			formData.password !== formData.confirmPassword &&
			formData.password.trim() &&
			formData.confirmPassword.trim()
		) {
			errors.confirmPassword = "Las contraseñas no coinciden";
			document.getElementsByName("confirmPassword")[0].style.borderBottomColor =
				"red";
		}
		if (formData.password.length < 8 && formData.password.trim()) {
			errors.password = "La contraseña debe tener al menos 8 caracteres";
			document.getElementsByName("password")[0].style.borderBottomColor = "red";
		}

		if (formData.username.length < 4 && formData.username.trim()) {
			errors.username =
				"El nombre de usuario debe tener al menos 4 caracteres.";
			document.getElementsByName("username")[0].style.borderBottomColor = "red";
		}

		if (Object.keys(errors).length === 0) {
			try {
				const {data} = await saveUserMutation({
					variables: {
						user: {
							username: formData.username,
							firstName: formData.firstName,
							lastName: formData.lastName,
							email: formData.email,
							password: formData.password,
							rolname: formData.rolname,
						},
					},
				});

				const newUser = data.saveUser;
				console.log("Usuario creado:", newUser);

				// Aquí puedes redirigir al usuario a la página de inicio de sesión o realizar otras acciones después del registro exitoso
			} catch (error) {
				console.error("Error en la mutación de registro:", error.message);
				alert("Error al crear el usuario. Por favor, verifica tus datos.");
			}
		} else {
			// Si hay errores, establecer los errores en el estado para mostrar mensajes de error
			setFormErrors(errors);
		}
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
							name="username"
							value={formData.username}
							onChange={handleInputChange}
							onFocus={handleInputFocus}
							placeholder="User Name"
							className={styles.input}
						/>
						{formErrors.username && (
							<div className={styles.error}>{formErrors.username}</div>
						)}

						<div className={styles.passwordContainer}>
							<input
								type="text"
								name="firstName"
								value={formData.firstName}
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								placeholder="First Name"
								className={styles.input}
							/>
							{formErrors.firstName && (
								<div className={styles.error}>{formErrors.firstName}</div>
							)}

							<input
								type="text"
								name="lastName"
								value={formData.lastName}
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								placeholder="Last Name"
								className={styles.input}
							/>
							{formErrors.lastName && (
								<div className={styles.error}>{formErrors.lastName}</div>
							)}
						</div>

						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							onFocus={handleInputFocus}
							placeholder="Email Institutional"
							className={styles.input}
						/>
						{formErrors.email && (
							<div className={styles.error}>{formErrors.email}</div>
						)}

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
							{formErrors.password && (
								<div className={styles.error}>{formErrors.password}</div>
							)}

							<input
								type={showPassword ? "text" : "password"}
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								placeholder="Confirm Password"
								className={styles.input}
							/>
							{formErrors.confirmPassword && (
								<div className={styles.error}>{formErrors.confirmPassword}</div>
							)}

							<div
								className={styles.passwordToggleIcon}
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
							</div>
						</div>

						<select
							name="rolname"
							value={formData.rolname}
							onChange={handleInputChange}
							onFocus={handleInputFocus}
							className={styles.select}
						>
							<option value="">User Type</option>
							<option value="Estudiante">Estudiante</option>
							<option value="Maestro/a">Maestro/a</option>
							<option value="Administrador">Administrador</option>
						</select>
						{formErrors.rolname && (
							<div className={styles.error}>{formErrors.rolname}</div>
						)}
					</div>
					<button
						type="submit"
						className={styles.loginButton}
						disabled={savingUser}
					>
						{savingUser ? "Signing Up..." : "Sign Up"}
					</button>
				</form>
				<div className={styles.signupMessage}>
					Already have an account?{" "}
					<Link to="/login" className={styles.signupLink}>
						Sign in
					</Link>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img src={signupside} alt="Background" className={styles.image} />
			</div>
		</div>
	);
};

export default Register;
