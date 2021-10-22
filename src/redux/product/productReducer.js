import { ProductActionTypes } from './productTypes'
import { 
	deleteRowProduct, 
	selectOption, 
	selectSingleOption, 
	selectAll,
	filterBySearch,
	filterByAvailability, 
	filterByColors, 
	filterBySize,
	filterByPrice
 } from './productUtils';

const INITIAL_STATE = {
	hoodies: [],
	hoodie: {},
	productsTableData: [],
	filteredHoodies: [],
	availabilityFilter: [
		{ value: 'all', label: 'All', checked: true },
		{ value: 'newest stock', label: 'Newset Stock', checked: false },
		{ value: 'old stock', label: 'Old Stock', checked: false },
	],
	colorsFilter: [
		{ value: 'all', label: 'All', checked: true },
		{ value: 'yellow', label: 'Yellow', checked: false },
		{ value: 'blue', label: 'Blue', checked: false },
		{ value: 'brown', label: 'Brown', checked: false },
		{ value: 'green', label: 'Green', checked: false },
		{ value: 'purple', label: 'Purple', checked: false },
	],
	sizeFilter: [
		{ value: 'all', label: 'All', checked: true },
		{ value: 'S', label: 'S', checked: false },
		{ value: 'M', label: 'M', checked: false },
		{ value: 'L', label: 'L', checked: false },
		{ value: 'XL', label: 'XL', checked: false },
		{ value: 'XXL', label: 'XXL', checked: false },
	],
	priceFilter: [
		{ value: 'all', label: 'All', checked: true },
		{ value: 'lessThan20', label: 'Less than $20', checked: false },
		{ value: 'lessThan50', label: 'Less than $50', checked: false },
		{ value: 'greaterThan50', label: 'Greater than $50', checked: false },
	]
}

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProductActionTypes.SET_HOODIES:
			return {
				...state,
				hoodies: action.payload
			}
		case ProductActionTypes.SET_HOODIE:
			return {
				...state,
				hoodie: action.payload
			}
		case ProductActionTypes.SET_PRODUCTS_TABLE_DATA:
			return {
				...state,
				productsTableData: action.payload
			}			
		case ProductActionTypes.DELETE_PRODUCT:
			return {
				...state,
				productsTableData: deleteRowProduct(state.productsTableData, action.payload)
			}			
		case ProductActionTypes.FILTER_HOODIES_BY_SEARCH:
			return {
				...state,
				filteredHoodies: filterBySearch(state.hoodies, action.payload)				
			}			
		case ProductActionTypes.FILTER_HOODIES_BY_AVAILABILITY:
			return {
				...state,
				filteredHoodies: filterByAvailability(state.hoodies, action.payload)				
			}			
		case ProductActionTypes.FILTER_HOODIES_BY_COLORS:
			return {
				...state,
				filteredHoodies: filterByColors(state.hoodies, state.colorsFilter)				
			}
		case ProductActionTypes.FILTER_HOODIES_BY_SIZE:
			return {
				...state,
				filteredHoodies: filterBySize(state.hoodies, state.sizeFilter)				
			}			
		case ProductActionTypes.FILTER_HOODIES_BY_PRICE:
			return {
				...state,
				filteredHoodies: filterByPrice(state.hoodies, action.payload)				
			}
		case ProductActionTypes.SELECT_OPTION_FROM_AVAILABILITY_FILTER:
			return {
				...state,
				availabilityFilter: selectSingleOption(state.availabilityFilter, action.payload)			
			}
		case ProductActionTypes.SELECT_THE_ALL_OPTION_FROM_AVAILABILITY_FILTER:
			return {
				...state,
				availabilityFilter: selectAll(state.availabilityFilter)			
			}
		case ProductActionTypes.SELECT_OPTION_FROM_COLORS_FILTER:
			return {
				...state,
				colorsFilter: selectOption(state.colorsFilter, action.payload)			
			}
		case ProductActionTypes.SELECT_THE_ALL_OPTION_FROM_COLORS_FILTER:
			return {
				...state,
				colorsFilter: selectAll(state.colorsFilter)			
			}
		case ProductActionTypes.SELECT_OPTION_FROM_SIZE_FILTER:
			return {
				...state,
				sizeFilter: selectOption(state.sizeFilter, action.payload)			
			}
		case ProductActionTypes.SELECT_THE_ALL_OPTION_FROM_SIZE_FILTER:
			return {
				...state,
				sizeFilter: selectAll(state.sizeFilter)			
			}
		case ProductActionTypes.SELECT_OPTION_FROM_PRICE_FILTER:
			return {
				...state,
				priceFilter: selectSingleOption(state.priceFilter, action.payload)			
			}
		case ProductActionTypes.SELECT_THE_ALL_OPTION_FROM_PRICE_FILTER:
			return {
				...state,
				priceFilter: selectAll(state.priceFilter)			
			}					
		default:
			return state;
			
	}
}

export default productReducer;