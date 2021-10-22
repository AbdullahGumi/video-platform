  
export const deleteRowProduct = (productsTable, data) => {
    return productsTable.filter(product => product.productID !== data.values.productID)
};

//seprate method for availability and price because you can only choose one option at a time 
export const selectSingleOption = (filterOptions, option) => {
    return filterOptions.map(filterOption =>
    filterOption.value === 'all' 
    ? { ...filterOption, checked: false }
    : {...filterOption, checked: filterOption.value === option.value && option.checked }
)};
  
//be able to select multiple options
export const selectOption = (filterOptions, {value, checked}) => {
    return filterOptions.map(filterOption => 
        filterOption.value === 'all' 
        ? {...filterOption, checked: false} 
        : filterOption.value === value
        ? {...filterOption, checked} : {...filterOption} )
};

export const selectAll = (filterOptions) => {
    return filterOptions.map(filterOption =>
    filterOption.value === 'all' 
    ? { ...filterOption, checked: true }
    : { ...filterOption, checked: false }
)};

export const filterBySearch = (hoodies, text) => {
    console.log('text', text)
    return hoodies.filter(hoodie => hoodie.productName.toLowerCase().includes(text.toLowerCase()) )
};

export const filterByAvailability = (hoodies, data) => {
    return hoodies.filter(hoodie => {
        if(data === 'newest stock'){
            return hoodie.dateCreated <= 30 
        } 
        else if(data === 'old stock'){
            return hoodie.dateCreated >= 30 
        } else {
            return hoodie
        }
        
    }
)};

export const filterByColors = (hoodies, colorsFilter) => {
    const filteredColors = colorsFilter.filter(color => color.checked === true)
    const colorsValue = filteredColors.map(color => color.value )
    return hoodies.filter(hoodie => hoodie.colors.some(color => colorsValue.includes(color)))
};

export const filterBySize = (hoodies, sizeFilter) => {
    const filteredSizes = sizeFilter.filter(size => size.checked === true)
    const sizeValue = filteredSizes.map(size => size.value )
    return hoodies.filter(hoodie => hoodie.sizes.some(size => sizeValue.includes(size)))
};

export const filterByPrice = (hoodies, data) => {
    console.log('My data:', data)
    return hoodies.filter(hoodie => {
        if(data === 'lessThan20'){
            return hoodie.sellingPrice <= 20 
        } 
        else if(data === 'lessThan50'){
            return hoodie.sellingPrice <= 50 
        }else if(data === 'greaterThan50'){
            return hoodie.sellingPrice >= 50 
        }

        return hoodie
        
    }
)};
