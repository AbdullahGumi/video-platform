import { CustomersActionTypes } from './customersTypes'

export const setCustomersTableData = (data) => ({
	type: CustomersActionTypes.SET_CUSTOMERS_TABLE_DATA,
	payload: data
})


export const deleteCustomer = (customer) => ({
	type: CustomersActionTypes.DELETE_CUSTOMER,
	payload: customer
})


