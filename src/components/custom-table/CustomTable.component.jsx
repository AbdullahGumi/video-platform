import CustomButton from '../custom-button/CustomButton.component'

import './CustomTable.styles.css'


const CustomTable = ({ 
    getTableProps,
    headerGroups,
    getTableBodyProps,
    page,
    prepareRow,
    pageSize,
    setPageSize,
    dataDetails,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageIndex,
    previousPage,
    nextPage,
    gotoPage,
    withOptions,
    withPaginationAndRowSize,
    setFilterOpen,
 }) => {
    return (
        <div className=''>
            {/* desktop view */}
            <div className='flex sm:hidden flex-col border rounded-lg'>

            {/* filter and options */}
            { withOptions ? (
                <div className='flex justify-end items-center bg-white rounded-t-lg p-3'>
                    {/* <div className='flex flex-row justfiy-between items-center space-x-6 pl-1  '>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 7H12V5H0V7ZM0 0V2H18V0H0ZM0 12H6V10H0V12Z" fill="#171C17"/>
                        </svg> */}
                        {/* Table filter */}
                        {/* <TableFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter}/>
                    </div> */}
                    <div className='flex flex-row space-x-12'>
                        
                        {/* print Button */}
                        <CustomButton 
                            handleClick={()=> window.print()} 
                            icon={
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 0H4V4H16V0ZM17 9C16.7348 9 16.4804 8.89464 16.2929 8.70711C16.1054 8.51957 16 8.26522 16 8C16 7.73478 16.1054 7.48043 16.2929 7.29289C16.4804 7.10536 16.7348 7 17 7C17.2652 7 17.5196 7.10536 17.7071 7.29289C17.8946 7.48043 18 7.73478 18 8C18 8.26522 17.8946 8.51957 17.7071 8.70711C17.5196 8.89464 17.2652 9 17 9ZM14 16H6V11H14V16ZM17 5H3C2.20435 5 1.44129 5.31607 0.87868 5.87868C0.316071 6.44129 0 7.20435 0 8V14H4V18H16V14H20V8C20 7.20435 19.6839 6.44129 19.1213 5.87868C18.5587 5.31607 17.7956 5 17 5Z" fill="#171C17"/>
                                </svg>
                            }
                            width="20" 
                            height="18"
                            backgroundColor='transparent'
                        />  

                        {/* refresh Button */}
                        <CustomButton 
                            handleClick={()=> console.log('refresh')} 
                            icon={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6498 2.35C12.1998 0.9 10.2098 0 7.99977 0C3.57977 0 0.00976562 3.58 0.00976562 8C0.00976562 12.42 3.57977 16 7.99977 16C11.7298 16 14.8398 13.45 15.7298 10H13.6498C12.8298 12.33 10.6098 14 7.99977 14C4.68977 14 1.99977 11.31 1.99977 8C1.99977 4.69 4.68977 2 7.99977 2C9.65977 2 11.1398 2.69 12.2198 3.78L8.99977 7H15.9998V0L13.6498 2.35Z" fill="black"/>
                                </svg>
                            }
                            width="16" 
                            height="16"
                            backgroundColor='transparent'
                        />

                        {/* filter Button */}
                        <CustomButton 
                            handleClick={()=> setFilterOpen(true)} 
                            icon={
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0006 9.5L15.7606 2.12C15.923 1.91153 15.9963 1.64726 15.9644 1.38493C15.9326 1.1226 15.7982 0.883546 15.5906 0.72C15.4228 0.585046 15.2158 0.507886 15.0006 0.5H1.00062C0.775055 0.501308 0.556559 0.578839 0.380619 0.72C0.173054 0.883546 0.0386614 1.1226 0.00680726 1.38493C-0.0250469 1.64726 0.0482277 1.91153 0.21062 2.12L6.00062 9.5V15.37C5.98253 15.5213 5.99925 15.6747 6.04951 15.8186C6.09977 15.9624 6.18224 16.0929 6.29062 16.2L8.29062 18.2C8.47798 18.3863 8.73143 18.4908 8.99562 18.4908C9.25981 18.4908 9.51326 18.3863 9.70062 18.2C9.81079 18.0938 9.89513 17.9638 9.94714 17.8199C9.99915 17.676 10.0174 17.5221 10.0006 17.37V9.5ZM12.0006 14.5L17.0006 19.5L22.0006 14.5H12.0006Z" fill="#171C17"/>
                                </svg>
                            }
                            width='22px'
                            height='20px'
                            backgroundColor='transparent'
                        />


                    </div>
                </div>

            ) : (null)

            }
            {/* end of filter and options */}

            {/* Table and its content */}
            <table {...getTableProps()} id='printTable' className={`bg-white ${!withOptions && 'rounded-t-lg'} ${!withPaginationAndRowSize && 'shadow rounded-lg'}`}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => {
                        return (
                        <th
                            {...column.getHeaderProps()}
                            className='font-semibold  text-xs p-4'
                        >
                            {column.render('Header')}
                        </th>
                    )})}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()} className='border'>
                        {row.cells.map(cell => {
                        return (
                            <td className='py-4' {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </td>
                        )
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
            {/* table end */}

            {/* Table bottom with pagination and rows per page */}
            {withPaginationAndRowSize ? (
                <div className="flex flex-row justify-between items-center bg-white rounded-b-lg p-3">
                    <div className='flex flex-row space-x-3 items-center'>
                        <span>Rows per page</span>
                        <select
                        className='border-0 focus:outline-none focus:ring-inset focus:ring-green-100 '
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                        >
                        {[5, 10, 20, 30, 40, 50].map(pageSize => (
                            <option  className='' key={pageSize} value={pageSize}>
                            {pageSize}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div>
                        <div className='flex flex-row space-x-6 items-center'>
                            <span>1 - { pageSize } of { dataDetails.length } items </span>
                            <div className='flex space-x-3 items-center'>
                                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke={`${!canPreviousPage ? '#C7C8D1' : '#2b273f'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                </button>
                                {pageOptions.map(page => <button style={{ color: `${page === pageIndex ? '#2b273f' : ''}` }}  onClick={()=> gotoPage(page)} >{page + 1}</button>)}
                                <button  onClick={() => nextPage()} disabled={!canNextPage}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13L7 7L1 1" stroke={`${!canNextPage ? '#C7C8D1' : '#2b273f'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>            
            ) : (null)

            }
            {/* end of table bottom */}

        </div>
            
            {/* mobile view */}
            <div className='hidden sm:flex flex-col space-y-6'>
            
            <table {...getTableProps()}>
                <tbody className='flex flex-col space-y-6 '{...getTableBodyProps()}>
                {page.map(row => {
                    const { 
                        orderID, 
                        customerName, 
                        products, 
                        amount, 
                        dateCreated,
                        deliveryDate, 
                        status,
                        email, 
                        phoneNumber, 
                        country,
                        state,
                        address, 
                        productID,
                        productName,
                        productCategory,
                        quantity,
                        costPrice,
                        sellingPrice,
                        
                     } = row.values
                    prepareRow(row)

                    if(orderID) {
                        return (
                            <tr {...row.getRowProps()} className='border rounded shadow bg-white' style={{ width: '100%',  padding: '16px' }}>
                                <td className='flex flex-col justify-between' >
                                    <div className='flex flex-row justify-between'>
                                        {row.cells.map(cell => {
                                            return cell.column.id === 'selection' && <div>{ cell.render('Cell')}</div>
                                        })}
                                        {row.cells.map(cell => {
                                            return cell.column.id === 'options' && <div>{ cell.render('Cell')}</div>
                                        })} 
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>ORDER ID</span>
                                        <span style={{ fontSize: '14px' }}>{orderID}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>CUSTOMER NAME</span>
                                        <span style={{ fontSize: '14px' }}>{customerName}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>PRODUCTS</span>
                                        <span style={{ fontSize: '14px' }}>{products}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>AMOUNT</span>
                                        <span style={{ fontSize: '14px' }}>{amount}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>DELIVERY DATE</span>
                                        <span style={{ fontSize: '14px' }}>{deliveryDate}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>STATUS</span>
                                        <span className={`font-semibold rounded 
                                            ${status === 'Pending' ? 'bg-yellow-100 text-yellow-500'
                                            : status === 'Cancelled' ? 'bg-red-100 text-red-500' 
                                            : status === 'Fulfilled' ? 'bg-green-50 text-green-500' 
                                            : status === 'Paid' ? 'bg-indigo-50 text-indigo-500' 
                                            : ''
                                            }`} 
                                            style={{ width: '98px', padding: '4px', fontSize: '14px'  }}>
                                            { status }
                                        </span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>DATE</span>
                                        <span style={{ fontSize: '14px' }}>{dateCreated}</span>
                                    </div>
                                </td>
                            </tr>
                        )}

                    if(productID) {
                        return (
                            <tr {...row.getRowProps()} className='border rounded shadow bg-white' style={{ width: '100%',  padding: '16px' }}>
                                <td className='flex flex-col justify-between' >
                                    <div className='flex flex-row justify-between'>
                                        {row.cells.map(cell => {
                                            return cell.column.id === 'selection' && <div>{ cell.render('Cell')}</div>
                                        })}
                                        {row.cells.map(cell => {
                                            return cell.column.id === 'options' && <div>{ cell.render('Cell')}</div>
                                        })} 
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>PRODUCT ID</span>
                                        <span style={{ fontSize: '14px' }}>{productID}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>PRODUCT NAME</span>
                                        <div className='flex flex-row items-center space-x-3'>
                                            <span style={{ fontSize: '14px' }}>{productName}</span>
                                            <img 
                                                className='object-cover rounded-full' 
                                                src={row.original.image} 
                                                alt='product' 
                                                style={{ width: '32px', height: '32px' }}
                                            />
                                        </div>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>PRODUCT CATEGORY</span>
                                        <span style={{ fontSize: '14px' }}>{productCategory}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>QUANTTIY</span>
                                        <span style={{ fontSize: '14px' }}>{quantity}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>COST PRICE</span>
                                        <span style={{ fontSize: '14px' }}>{costPrice}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>SELLING PRICE</span>
                                        <span style={{ fontSize: '14px' }}>{sellingPrice}</span>
                                    </div>
                                </td>
                            </tr>
                        )}    

                    if(email) {
                        return (
                            <tr {...row.getRowProps()} className='border rounded shadow bg-white' style={{ width: '100%',  padding: '16px' }}>
                                <td className='flex flex-col justify-between' >
                                    <div className='flex flex-row justify-between'>
                                        {row.cells.map(cell => {
                                            return cell.column.id === 'selection' && <div>{ cell.render('Cell')}</div>
                                        })}
                                        {row.cells.map(cell => {
                                            return cell.column.id === 'options' && <div>{ cell.render('Cell')}</div>
                                        })} 
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>CUSTOMER NAME</span>
                                        <span style={{ fontSize: '14px' }}>{customerName}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>EMAIL ADDRESS</span>
                                        <span style={{ fontSize: '14px' }}>{email}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>PHONE NUMBER</span>
                                        <span style={{ fontSize: '14px' }}>{phoneNumber}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>COUNTRY</span>
                                        <span style={{ fontSize: '14px' }}>{country}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>STATE</span>
                                        <span style={{ fontSize: '14px' }}>{state}</span>
                                    </div>
                                    <hr style={{ border: '1px solid #E3E3E8', marginTop: '20px', marginBottom: '20px' }}/>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span style={{ color:'#73758C', fontWeight: '700', fontSize: '12px'}}>HOME ADDRESS</span>
                                        <span style={{ fontSize: '14px' }}>{address}</span>
                                    </div>
                                </td>
                            </tr>
                        )}        

                })}
                </tbody>
            </table>
            <div className='flex space-x-8 self-end items-center'>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1L1 7L7 13" stroke={`${!canPreviousPage ? '#C7C8D1' : '#46AC48'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className='space-x-8'>{pageOptions.map(page => <button style={{ color: `${page === pageIndex ? '#46AC48' : ''}` }}  onClick={()=> gotoPage(page)} >{page + 1}</button>)}</div>
                <button  onClick={() => nextPage()} disabled={!canNextPage}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L7 7L1 1" stroke={`${!canNextPage ? '#C7C8D1' : '#46AC48'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            </div>
        </div>
    )
}

export default CustomTable
                                    