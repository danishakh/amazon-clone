export const initialState = {
	basket: [],
};

// Selector (production env practice)

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":
			// Find the index of that post in the posts array, and remove that post
			// This will return the first match
			let deleteIndex = state.basket.findIndex((item) => item.id === action.id);
			let newBasket = [...state.basket];
			if (deleteIndex >= 0) {
				newBasket.splice(deleteIndex, 1);
			} else {
				console.warn(
					`Cannot remove product (id: ${action.id} as its not in the basket!`
				);
			}
			return {
				...state,
				basket: newBasket,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default reducer;
