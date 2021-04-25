import React from "react";
import "./Product.css";

function Product() {
	return (
		<div className="product">
			<div className="product__info">
				<p>
					SteelSeries Apex Pro Mechanical Gaming Keyboard – Adjustable Actuation
					Switches – World’s Fastest Mechanical Keyboard – OLED Smart Display –
					RGB Backlit
				</p>
				<p className="product__price">
					<small>$</small>
					<strong>199.99</strong>
				</p>
				<div className="product__rating">
					<p>⭐</p>
					<p>⭐</p>
					<p>⭐</p>
				</div>
			</div>
			<img
				src="https://m.media-amazon.com/images/I/41aSwZ5G1VL._AC_SL260_.jpg"
				alt=""
			/>
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
