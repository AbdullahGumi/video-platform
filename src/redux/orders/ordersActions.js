import { OrdersActionTypes } from './ordersTypes'

export const setOrdersTableData = (data) => ({
	type: OrdersActionTypes.SET_ORDERS_TABLE_DATA,
	payload: data
})


export const updateOrderStatus = (rowToUpdate, status) => ({
	type: OrdersActionTypes.UPDATE_ORDER_STATUS,
	payload: {rowToUpdate, status}
})

export const deleteOrder = (order) => ({
	type: OrdersActionTypes.DELETE_ORDER,
	payload: order
})

export const selectDateFilter = (date) => ({
	type: OrdersActionTypes.SELECT_DATE_FILTER,
	payload: date
})

