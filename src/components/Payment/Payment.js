import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Payment.css";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>
				{/* Payment Seciont - Delivery Address */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email.split("@")[0]}</p>
						<p>123 React Drive</p>
						<p>San Jose, CA</p>
					</div>
				</div>
				{/* Payment Section - Review Items */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review Items and Delivery Address</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								key={item.id}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				{/* Payment Section - Payment Method */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">{/* Stripe Magic here! */}</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
