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
					<Product
						id="12314124"
						title="SteelSeries Apex Pro Mechanical Gaming Keyboard – Adjustable Actuation
                        Switches – World’s Fastest Mechanical Keyboard – OLED Smart Display –
                        RGB Backlit"
						price={199.99}
						image="https://m.media-amazon.com/images/I/41aSwZ5G1VL._AC_SL260_.jpg"
						rating={3}
					/>
					<Product
						id="12315531"
						title="2020 Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver"
						price={949.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SX679_.jpg"
						rating={4}
					/>
					<Product
						id="421241123"
						title='USB C Adapter for MacBook Air/MacBook Pro 2020 2019 2018 13" 15" 16", 6 in 1 USB-C Hub with 3 USB 3.0 Ports, USB C to SD/TF Card Reader and 100W Thunderbolt 3 PD Port'
						price={16.99}
						image="https://images-na.ssl-images-amazon.com/images/I/713JzPomt9L._AC_SX679_.jpg"
						rating={3}
					/>
				</div>
				<div className="home__row">
					<Product
						id="55211322"
						title="BELLEZE Modern Accent Chair Roll Arm Living Room Cushion Linen w/Wooden Leg (Avocado)"
						price={169.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71ZPUo7n0IL._AC_SX679_.jpg"
						rating={4}
					/>
					<Product
						id="115421123"
						title="Mid Century Modern Fabric Arm Chairs for Living Room, Living Room Chairs, Accent Chair, Dark Gray,Set of 1"
						price={145.99}
						image="https://images-na.ssl-images-amazon.com/images/I/81fUzB0tCnL._AC_SL1500_.jpg"
						rating={3}
					/>
					<Product
						id="553112125"
						title="Lohoms Modern Accent Fabric Chair Single Sofa Comfy Upholstered Arm Chair Living Room Furniture (Blue)"
						price={141.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71ObJZJiA7L._AC_SX466_.jpg"
						rating={2}
					/>
				</div>
				<div className="home__row">
					<Product
						id="889162214"
						title="SHW Electric Memory Preset Height Adjustable Computer Desk, 48 x 24 Inches, Black"
						price={199.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71prRwPHwoL._AC_SX679_.jpg"
						rating={3}
					/>
					<Product
						id="1211512155"
						title="FEZIBO L-Shaped Electric Standing Desk, 48 Inches Height Adjustable Corner Desk, Full Sit Stand Home Office Table with Splice Board, Black Frame/Rustic Brown Top"
						price={309.99}
						image="https://images-na.ssl-images-amazon.com/images/I/710WRD3IlTL._AC_SX679_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
