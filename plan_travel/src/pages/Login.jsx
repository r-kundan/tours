// import React, { useState } from 'react'
// import {Form} from "reactstrap"
// // import "../style/register.css"

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Handle login logic, e.g., make a POST request to your backend API
//   };

//   return ( 
//   <div className="main-container">
//     <div className='register row'>
//     <h1 className="col-8">Login to KundanVista's</h1>
//     <div className="col-8">
//         <Form action="/login" method="POST"
//         className="needs-validation" novalidate>
//             <div>
//                 <label for="username" className="form-lable">Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   id="username"
//                   placeholder="enter username"
//                   className="form-control"
//                   required
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
                  
//                 />
//              </div>
//               <div className="mb-3">
//                 <label for="password" className="form-lable">Password</label>
//                 <input
//                   type="text"
//                   name="password"
//                   id="password"
//                   placeholder="enter password"
//                   className="form-control"
//                   required
//                   value={password}
//           onChange={(e) => setPassword(e.target.value)}

//                 />
//               </div>
//               <button className="btn ">LogIn</button>

//         </Form>
//     </div>
//     </div>
// </div>
//   )
// }

// export default Login

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../style/login.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "/api/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Log In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/register">
						<button type="button" className={styles.white_btn}>
							Register
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;