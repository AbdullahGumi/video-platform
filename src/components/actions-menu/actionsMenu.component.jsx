import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CustomActionsModal from '../custom-actions-modal/customActionsModal.component'

const ActionsMenu = ({ ordersActions, productsActions, customersActions, rowData  }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [title, setTitle] = useState('Delete')
  const [subtitle, setSubtitle] = useState('Are you sure you want to delete this order? This action cannot be undone.')
  const [buttonText, setButtonText] = useState('')
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('')
  const [icon, setIcon] = useState(<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#FE2712"/>
  </svg>)
  const [iconBackgroundColor, setIconBackgroundColor] = useState('#FFF1F0')
  const [orderStatus, showOrderStatus] = useState(false)
  
  const modalProperties = ( 
      modalTitle, 
      modalSubtitle, 
      modalButtonText, 
      modalButtonColor,
      modalIcon, 
      modalIconBackgroundColor,
      orderStatus
      ) => {
        setModalOpen(true)
        setTitle(modalTitle)
        setSubtitle(modalSubtitle)
        setButtonText(modalButtonText)
        setButtonBackgroundColor(modalButtonColor)
        setIcon(modalIcon)
        setIconBackgroundColor(modalIconBackgroundColor)
        showOrderStatus(orderStatus)
  }

  return (
    <div className="">
      <CustomActionsModal 
        isModalOpen={isModalOpen} 
        setModalOpen={setModalOpen} 
        icon={icon} 
        iconBackgroundColor={iconBackgroundColor} 
        title={title} 
        subtitle={subtitle}
        buttonText={buttonText}
        buttonBackgroundColor={buttonBackgroundColor}
        orderStatus={orderStatus}
        rowData={rowData}
        ordersActions={ordersActions}
        productsActions={productsActions}
        customersActions={customersActions}
      />
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button className="">
            <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4C1.46957 4 0.96086 3.78929 0.585787 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.960859 0.585787 0.585787C0.96086 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4ZM2 10C1.46957 10 0.96086 9.78929 0.585787 9.41421C0.210714 9.03914 0 8.53043 0 8C0 7.46957 0.210714 6.96086 0.585787 6.58579C0.96086 6.21071 1.46957 6 2 6C2.53043 6 3.03914 6.21071 3.41421 6.58579C3.78929 6.96086 4 7.46957 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM2 16C1.46957 16 0.96086 15.7893 0.585787 15.4142C0.210714 15.0391 0 14.5304 0 14C0 13.4696 0.210714 12.9609 0.585787 12.5858C0.96086 12.2107 1.46957 12 2 12C2.53043 12 3.03914 12.2107 3.41421 12.5858C3.78929 12.9609 4 13.4696 4 14C4 14.5304 3.78929 15.0391 3.41421 15.4142C3.03914 15.7893 2.53043 16 2 16Z" fill="#171C17"/>
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className='relative'>
            { productsActions &&
              <Menu.Items 
                className="absolute space-y-3 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{ padding: '16px 8px' }}
              >  
                <Menu.Item>
                {({ active }) => (
                  <div style={{ backgroundColor: `${ active ? '#F4FBF4' : '' }` }} className={`flex space-x-3 cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.900001 14.35 0.900001 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z" fill="#FF9800"/>
                    </svg>
                    <span className=''>Edit Product</span>
                  </div>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button onClick={()=> modalProperties(
                    'Delete', 
                    'Are you sure you want to delete this order? This action cannot be undone.', 
                    'Proceed', 
                    '#FE2712',
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#FE2712"/>
                    </svg>, 
                    '#FFF1F0',
                    false
                    )} style={{width: '100%'}}>
                    <div style={{ backgroundColor: `${ active ? '#F4FBF4' : '' }` }} className={`flex space-x-3 cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#FE2712"/>
                      </svg>
                      <span className=''>Delete Product</span>
                    </div>
                  </button>
                )}
                </Menu.Item>
              </Menu.Items>
            }   

            { ordersActions &&
              <Menu.Items 
                className="absolute space-y-3 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{ padding: '16px 8px' }}
              >  
                <Menu.Item>
                {({ active }) => (
                  <button onClick={()=> modalProperties(
                    'Delivery Address', 
                    '15 C, Admiralty Way, Lekki Phase 1, Lagos', 
                    'Copy', 
                    '#46AC48',
                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#46AC48"/>
                    </svg>, 
                    '#F4FBF4',
                    false
                    )} style={{width: '100%'}}>
                    <div style={{ backgroundColor: `${ active ? '#F4FBF4' : '' }` }} className={`flex space-x-3 cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#46AC48"/>
                      </svg>
                      <span className=''>Delivery Address</span>
                    </div>
                  </button>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button onClick={()=> modalProperties(
                    '', 
                    '', 
                    '', 
                    '',
                    '', 
                    '',
                    true
                    )} style={{width: '100%'}}>
                    <div style={{ backgroundColor: `${ active ? '#F4FBF4' : '' }` }} className={`flex space-x-3 cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V10L12.25 12.52L13.02 11.24L9.5 9.15V5H8ZM18 7V0L15.36 2.64C13.74 1.01 11.49 0 9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9H16C16 12.86 12.86 16 9 16C5.14 16 2 12.86 2 9C2 5.14 5.14 2 9 2C10.93 2 12.68 2.79 13.95 4.05L11 7H18Z" fill="#5525DC"/>
                      </svg>
                      <span className=''>Update Order Status</span>
                    </div>
                  </button>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button onClick={()=> modalProperties(
                    'Delete', 
                    'Are you sure you want to delete this order? This action cannot be undone.', 
                    'Proceed', 
                    '#FE2712',
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#FE2712"/>
                    </svg>, 
                    '#FFF1F0',
                    false
                    )} style={{width: '100%'}}>
                    <div style={{ backgroundColor: `${ active ? '#F4FBF4' : '' }` }} className={`flex space-x-3 cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#FE2712"/>
                      </svg>
                      <span className=''>Delete Order</span>
                    </div>
                  </button>
                )}
                </Menu.Item>
            </Menu.Items>
            }   
            
            { customersActions &&
              <Menu.Items 
                className="absolute space-y-3 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{ padding: '16px 8px' }}
              >  
                <Menu.Item>
                {({ active }) => (
                  <div style={{ backgroundColor: `${ active ? '#F4FBF4' : '' }` }} className={`flex space-x-3 cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.900001 14.35 0.900001 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z" fill="#FF9800"/>
                    </svg>
                    <span className=''>Edit Customer</span>
                  </div>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button onClick={()=> modalProperties(
                    'Delete', 
                    'Are you sure you want to delete this customer? This action cannot be undone.', 
                    'Proceed', 
                    '#FE2712',
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#FE2712"/>
                    </svg>, 
                    '#FFF1F0',
                    false
                    )} style={{width: '100%'}}>
                    <div style={{ backgroundColor: `${ active ? '#F4FBF4' : '' }` }} className={`flex space-x-3 cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#FE2712"/>
                      </svg>
                      <span className=''>Delete Customer</span>
                    </div>
                  </button>
                )}
                </Menu.Item>
            </Menu.Items>
            }   
          </div>
        </Transition>
      </Menu>
    </div>
  )
}

export default ActionsMenu