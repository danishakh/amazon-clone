import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51IqR0NLRHNj6nzSFcbDquvu9uDZFKp8DD3HeeS5xrB4pbMh3KsWMXAuyFv9j7o2SKuN3k0MXWN0Ui9IxoiWcFSlX00jDiQIx91"
);

function App() {
	const [{}, dispatch] = useStateValue();

	// will only run once when the app component loads...
	useEffect(() => {
		// auth listener
		auth.onAuthStateChanged((authUser) => {
			console.log("Logged In User: ", authUser);

			if (authUser) {
				// user just logged in / the user was logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		// BEM
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
