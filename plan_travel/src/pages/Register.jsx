import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "../style/register.module.css";

const Register = () => {
	const [data, setData] = useState({
		userName: "",
		email: "",
		password: "",
	});
	// console.log(data.userName)
	// console.log(data.email)
	// console.log(data.password)
	const [error, setError] = useState("");
	const navigate = useNavigate();



	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setData({ ...data, [name]: value });
	// };
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log("Form data:", data); // Log form data for debugging
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log("Form data:", data); // Log form data for debugging

			const response = await axios.post("/api/tours/users",{
				userName: data.userName,
				email: data.email,
				password: data.password
			});
			console.log("Response:", response.data); // Log response for debugging
			navigate("/login");
			console.log(response.message);
		} catch (error) {
			if (error.response) {
				console.error("Error response:", error.response.data); // Log error response for debugging
				setError(error.response.data.message || "Something went wrong");
			} else {
				console.error("Error:", error.message); // Log other errors for debugging
				setError("Something went wrong");
			}

		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>

				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="User Name"
							name="userName"
							value={data.userName}
							onChange={handleChange}
							required
							className={styles.input}

						/>

<input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />

						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Register
						</button>
					</form>
				</div>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Log In
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
