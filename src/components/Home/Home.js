import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjA0N2YxY2It/NjA0N2YxY2It-NDg0ZTBmMDEt-w1500._CB655440701_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product />
					<Product />
					<Product />
				</div>
				<div className="home__row">
					<Product />
					<Product />
					<Product />
				</div>
				<div className="home__row">
					<Product />
					<Product />
				</div>
			</div>
		</div>
	);
}

export default Home;
