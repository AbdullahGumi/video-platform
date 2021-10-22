
export const updateStatus = (ordersTable, data) => {
    const { rowToUpdate: { original }, status } = data
    return ordersTable.map(order => order.orderID === original.orderID ? { ...order, status } : order)
};
  
export const deleteRowOrder = (ordersTable, data) => {
    return ordersTable.filter(order => order.orderID !== data.values.orderID)
};
  
    