import React, { useState } from "react";
import "./Login.css";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		// firebase authentication logic
	};

	const register = (e) => {
		e.preventDefault();
		// firebase registration logic
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// successfully created a new user with email/password
				console.log("Registration Successful!");
				console.log(auth);
				// redirect the user to the home page after successful registration
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					alt=""
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
				/>
			</Link>

			<div className="login__container">
				<h1>Sign-In</h1>
				<form>
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="login__email"
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="login__password"
					/>

					<button
						type="submit"
						onClick={signIn}
						className="login__signInButton"
					>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to AmaZonia's conditions of use & sale. Please
					see our non-existent privacy notice, cookies notice and our
					interest-based ads.
				</p>
				<button
					type="submit"
					onClick={register}
					className="login__registerButton"
				>
					Create Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
