import { OrdersActionTypes } from './ordersTypes'
import { updateStatus, deleteRowOrder } from './ordersUtils';


const INITIAL_STATE = {
	ordersTableData: [],
	selectedDateFilter: '',
}

const ordersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OrdersActionTypes.SET_ORDERS_TABLE_DATA:
			return {
				...state,
				ordersTableData: action.payload
			}	
		case OrdersActionTypes.UPDATE_ORDER_STATUS:
			return {
				...state,
				ordersTableData: updateStatus(state.ordersTableData, action.payload)
				
			}	
		case OrdersActionTypes.DELETE_ORDER:
			return {
				...state,
				ordersTableData: deleteRowOrder(state.ordersTableData, action.payload)
				
			}	
		case OrdersActionTypes.SELECT_DATE_FILTER:
			return {
				...state,
				selectedDateFilter: action.payload
				
			}
			
		default:
			return state;
	}
}

export default ordersReducer;