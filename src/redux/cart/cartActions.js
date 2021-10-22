import { CartActionTypes } from './cartTypes'

const calculateCartSubtotalAmount = () => ({
	type: CartActionTypes.CALCULATE_CART_SUBTOTAL_AMOUNT,
})

const calculateCartTotalAmount = () => ({
	type: CartActionTypes.CALCULATE_CART_TOTAL_AMOUNT,
})

export const setItemAddedToCart = (item) => ({
	type: CartActionTypes.SET_ITEM_ADDED_TO_CART,
	payload: item
})

export const addItemToCart = (item) => (dispatch) => {
	dispatch({
		type: CartActionTypes.ADD_ITEM_TO_CART,
		payload: item
	})
	dispatch(calculateCartSubtotalAmount())
	dispatch(calculateCartTotalAmount())
};

export const removeItemFromCart = (item) => (dispatch) => {
	dispatch({
		type: CartActionTypes.REMOVE_ITEM_FROM_CART,
		payload: item
	});
	dispatch(calculateCartSubtotalAmount())
	dispatch(calculateCartTotalAmount())
}

export const increaseItemInCart = (item) => (dispatch) => {
	dispatch({
		type: CartActionTypes.INCREASE_ITEM_IN_CART,
		payload: item
	});
	dispatch(calculateCartSubtotalAmount())
	dispatch(calculateCartTotalAmount())
}

export const decreaseItemFromCart = (item) => (dispatch) => {
	dispatch({
		type: CartActionTypes.DECREASE_ITEM_FROM_CART,
		payload: item
	});
	dispatch(calculateCartSubtotalAmount())
	dispatch(calculateCartTotalAmount())
}


  