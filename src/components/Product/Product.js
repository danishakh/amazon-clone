import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { useSnackbar } from "notistack";

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const { enqueueSnackbar } = useSnackbar();

	console.log("basket: ", basket);

	const addToBasket = () => {
		enqueueSnackbar(`${title} was added to your Basket!`, {
			variant: "success",
			autoHideDuration: 3000,
		});

		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
