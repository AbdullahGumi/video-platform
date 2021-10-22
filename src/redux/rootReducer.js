import { combineReducers } from 'redux';
import productReducer from './product/productReducer'
import userReducer from './user/userReducer'
import cartReducer from './cart/cartReducer'
import ordersReducer from './orders/ordersReducer'
import customersReducer from './customers/customersReducer'


export default combineReducers({
	user: userReducer,
	product: productReducer,
	cart: cartReducer,
	orders: ordersReducer,
	customers: customersReducer,
});