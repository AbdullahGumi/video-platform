import { CustomersActionTypes } from './customersTypes'
import { deleteRowCustomer } from './customersUtils';


const INITIAL_STATE = {
	customersTableData: [],
}

const customersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CustomersActionTypes.SET_CUSTOMERS_TABLE_DATA:
			return {
				...state,
				customersTableData: action.payload
			}
		case CustomersActionTypes.DELETE_CUSTOMER:
			return {
				...state,
				customersTableData: deleteRowCustomer(state.customersTableData, action.payload)
				
			}
			
		default:
			return state;
	}
}

export default customersReducer;