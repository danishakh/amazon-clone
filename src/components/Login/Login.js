import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
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
				<form action="submit">
					<h5>Email</h5>
					<input type="text" className="login__email" />

					<h5>Password</h5>
					<input type="password" className="login__password" />

					<button className="login__signInButton">Sign In</button>
				</form>
				<p>
					By signing-in you agree to AmaZonia's conditions of use & sale. Please
					see our non-existent privacy notice, cookies notice and our
					interest-based ads.
				</p>
				<button className="login__registerButton">Create Amazon Account</button>
			</div>
		</div>
	);
}

export default Login;
