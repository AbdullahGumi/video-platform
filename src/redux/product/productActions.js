import { ProductActionTypes } from './productTypes'


export const setHoodies = (hoodies) => ({
	type: ProductActionTypes.SET_HOODIES,
	payload: hoodies
})

export const setHoodie = (hoodie) => ({
	type: ProductActionTypes.SET_HOODIE,
	payload: hoodie
})


export const setProductsTableData = (data) => ({
	type: ProductActionTypes.SET_PRODUCTS_TABLE_DATA,
	payload: data
})

export const deleteProduct = (product) => ({
	type: ProductActionTypes.DELETE_PRODUCT,
	payload: product
})


export const filterHoodiesBySearch = (text) => ({
	type: ProductActionTypes.FILTER_HOODIES_BY_SEARCH,
	payload: text
})

export const filterHoodiesByAvailability = (hoodies) => ({
	type: ProductActionTypes.FILTER_HOODIES_BY_AVAILABILITY,
	payload: hoodies
})

export const filterHoodiesByColors = (hoodies) => ({
	type: ProductActionTypes.FILTER_HOODIES_BY_COLORS,
	payload: hoodies
})

export const filterHoodiesBySize = (hoodies) => ({
	type: ProductActionTypes.FILTER_HOODIES_BY_SIZE,
	payload: hoodies
})

export const filterHoodiesByPrice = (hoodies) => ({
	type: ProductActionTypes.FILTER_HOODIES_BY_PRICE,
	payload: hoodies
})

export const selectOptionFromAvailabilityFilter= (option) => ({
	type: ProductActionTypes.SELECT_OPTION_FROM_AVAILABILITY_FILTER,
	payload: option
})

export const selectTheAllOptionFromAvailabilityFilter= () => ({
	type: ProductActionTypes.SELECT_THE_ALL_OPTION_FROM_AVAILABILITY_FILTER,
})

export const selectOptionFromColorsFilter= (option) => ({
	type: ProductActionTypes.SELECT_OPTION_FROM_COLORS_FILTER,
	payload: option
})

export const selectTheAllOptionFromColorsFilter= () => ({
	type: ProductActionTypes.SELECT_THE_ALL_OPTION_FROM_COLORS_FILTER,
})

export const selectOptionFromSizeFilter= (option) => ({
	type: ProductActionTypes.SELECT_OPTION_FROM_SIZE_FILTER,
	payload: option
})

export const selectTheAllOptionFromSizeFilter= () => ({
	type: ProductActionTypes.SELECT_THE_ALL_OPTION_FROM_SIZE_FILTER,
})

export const selectOptionFromPriceFilter= (option) => ({
	type: ProductActionTypes.SELECT_OPTION_FROM_PRICE_FILTER,
	payload: option
})

export const selectTheAllOptionFromPriceFilter= () => ({
	type: ProductActionTypes.SELECT_THE_ALL_OPTION_FROM_PRICE_FILTER,
})
