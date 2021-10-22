import { useMemo, useState, useEffect } from 'react'
import { useTable, useRowSelect, useGlobalFilter, usePagination, useFilters } from 'react-table'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

// components
import IndeterminateCheckbox from '../components/indeterminate-checkbox/IndeterminateCheckbox.component'

import CustomTable from "../components/custom-table/CustomTable.component"
import TableFilter from "../components/table-filter/TableFilter.component"
import ActionsMenu from '../components/actions-menu/actionsMenu.component.jsx'
import TableColumnFilter from '../components/table-column-filter/tableColumnFilter.component.jsx'

// redux
import { setOrdersTableData } from '../redux/orders/ordersActions'

const CustomerOrders = () => {
    const dispatch = useDispatch()
    const ordersTableData = useSelector(state => state.orders.ordersTableData)
    const data = useMemo(()=> ordersTableData, [ordersTableData])
    const optionsSVG =
      <div className='flex justify-center'> 
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.06445 0H16.0645C16.5949 0 17.1036 0.210714 17.4787 0.585786C17.8537 0.960859 18.0645 1.46957 18.0645 2V9.08C16.5599 8.82723 15.0155 9.15613 13.7445 10H10.0645V14H11.1445C11.0345 14.68 11.0345 15.35 11.1445 16H2.06445C1.53402 16 1.02531 15.7893 0.65024 15.4142C0.275167 15.0391 0.0644531 14.5304 0.0644531 14V2C0.0644531 0.9 0.964453 0 2.06445 0ZM2.06445 4V8H8.06445V4H2.06445ZM10.0645 4V8H16.0645V4H10.0645ZM2.06445 10V14H8.06445V10H2.06445ZM21.8445 16.32L20.7745 15.5C20.7945 15.33 20.8145 15.17 20.8145 15C20.8145 14.83 20.8045 14.67 20.7745 14.5L21.8345 13.68C21.8794 13.6415 21.9098 13.5887 21.9207 13.5306C21.9317 13.4724 21.9224 13.4122 21.8945 13.36L20.8945 11.63C20.8345 11.5 20.7045 11.5 20.5645 11.5L19.3445 12C19.0645 11.82 18.8045 11.65 18.4945 11.53L18.3045 10.21C18.2945 10.09 18.1845 10 18.0645 10H16.0645C15.9445 10 15.8345 10.09 15.8145 10.21L15.6245 11.53C15.3245 11.66 15.0345 11.82 14.7745 12L13.5345 11.5C13.4245 11.5 13.2945 11.5 13.2245 11.63L12.2245 13.36C12.1645 13.47 12.1845 13.6 12.2845 13.68L13.3445 14.5C13.3046 14.8321 13.3046 15.1679 13.3445 15.5L12.2845 16.32C12.2395 16.3585 12.2091 16.4113 12.1982 16.4694C12.1873 16.5276 12.1965 16.5878 12.2245 16.64L13.2245 18.37C13.2845 18.5 13.4145 18.5 13.5345 18.5L14.7745 18C15.0345 18.18 15.3145 18.35 15.6245 18.47L15.8145 19.79C15.8345 19.91 15.9345 20 16.0645 20H18.0645C18.1845 20 18.2945 19.91 18.3145 19.79L18.5045 18.47C18.8045 18.34 19.0645 18.18 19.3445 18L20.5645 18.5C20.7045 18.5 20.8345 18.5 20.9045 18.37L21.9045 16.64C21.9324 16.5878 21.9417 16.5276 21.9307 16.4694C21.9198 16.4113 21.8894 16.3585 21.8445 16.32ZM17.0645 16.5C16.2345 16.5 15.5645 15.83 15.5645 15C15.5645 14.17 16.2445 13.5 17.0645 13.5C17.8845 13.5 18.5645 14.17 18.5645 15C18.5645 15.83 17.9045 16.5 17.0645 16.5Z" fill="black"/>
        </svg>
      </div>
    const columns = useMemo(()=> [
      {
        Header: '#',
        accessor: 'serialNo',
      },
      {
        Header: 'ORDER ID',
        accessor: 'orderID',
      },
      {
        Header: 'CUSTOMER NAME',
        accessor: 'customerName',
      },
      {
        Header: 'PRODUCTS',
        accessor: 'products',
      },
      {
        Header: 'AMOUNT',
        accessor: 'amount',
      },
      {
        Header: 'DELIVERY DATE',
        accessor: 'deliveryDate',
      },
      {
       id: 'status',
       Header: 'STATUS',
       accessor: 'status',
       Cell: row => {
         return (
           <div className=' flex justify-center w-full'>
             <div 
               style={{ width: '100px' }}
               className={`
                   px-6 py-2 rounded flex justify-center
                   ${row.value === 'Pending' ? 'bg-yellow-100  text-yellow-500'
                   : row.value === 'Cancelled' ? 'bg-red-100 text-red-500' 
                   : row.value === 'Fulfilled' ? 'bg-green-50 text-green-500' 
                   : row.value === 'Paid' ? 'bg-indigo-50 text-indigo-500' 
                   : ''
                   }
                   `}>
               {row.value}
             </div>
           </div>
         )
       }
     },
      {
       id: 'dateCreated',
       Header: ()=> {
         return (
           <>
             <div className='hidden sm:block'>
               <span>DATE CREATED</span>
             </div>
             <div className='sm:hidden'>
               <TableColumnFilter setAllFilters={setAllFilters} dateFilter={true}/>
             </div>
           </>
         )
       },
        accessor: 'dateCreated',
      },
      {
        Header: optionsSVG,
        accessor: 'options',
        Cell: ({ row }) => {
        return (
         <ActionsMenu rowData={row} ordersActions={true} />

        )
      }
      },
    ], [])
    const [isFilterOpen, setFilterOpen] = useState(false)


    const instance = useTable({ columns, data },  useGlobalFilter, useFilters, usePagination, useRowSelect, hooks => {
    // inserts checkbox on the header and each row of the table
    hooks.visibleColumns.push(columns => [
      {
        id: 'selection',
        Header: ({ getToggleAllPageRowsSelectedProps }) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()}/>
          </div>
        ),
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()}/>
          </div>
        ),
      },
      ...columns,
    ])
  })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        pageOptions,
        page,
        state: { globalFilter, pageIndex, pageSize },
        gotoPage,
        previousPage,
        nextPage,
        setPageSize,
        canPreviousPage,
        canNextPage,
        setGlobalFilter,
        setAllFilters
      } = instance

      useEffect(()=> {
        axios
            .get('http://localhost:3000/orders')
            .then(res=> dispatch(setOrdersTableData(res.data)))
            .catch(err => console.log(err));
      },[])  


    return (
        <div className='flex flex-col space-y-12 sm:px-6 sm:py-12 py-12 px-24'>
            <div className='flex flex-col text-left space-y-3'>
                <h2 className='font-bold text-4xl'>Orders</h2>
                <span className='text-lg' style={{ color: '#73758C' }}>Lorem ipsum dolor sit amet</span>
            </div>
            <div className='space-y-6'>
                <div className='flex sm:w-full w-2/5'>
                    <TableFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} placeholder='Search by Order ID...' />
                </div>
                <CustomTable 
                    setFilterOpen={setFilterOpen}
                    withPaginationAndRowSize={true}
                    getTableProps={getTableProps} 
                    dataDetails={ordersTableData}
                    headerGroups={headerGroups} 
                    getTableBodyProps={getTableBodyProps} 
                    page={page} 
                    prepareRow={prepareRow}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    canNextPage={canNextPage}
                    canPreviousPage={canPreviousPage}
                    pageOptions={pageOptions}
                    pageIndex={pageIndex}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    gotoPage={gotoPage}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                </div>
        </div>
    )
}

export default CustomerOrders