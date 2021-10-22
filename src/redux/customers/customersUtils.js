  
export const deleteRowCustomer = (customersTable, data) => {
    return customersTable.filter(customer => customer.serialNo !== data.values.serialNo)
};
  
    