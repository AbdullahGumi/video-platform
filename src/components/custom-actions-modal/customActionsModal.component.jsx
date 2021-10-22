import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import CustomButton from '../custom-button/CustomButton.component'

import { updateOrderStatus, deleteOrder } from '../../redux/orders/ordersActions'
import { deleteCustomer } from '../../redux/customers/customersActions'
import { deleteProduct } from '../../redux/product/productActions'


// import CancelSVG from '../svg/cancelSVG.component'

const CustomActionsModal = ({ 
    isModalOpen, 
    setModalOpen, 
    icon, 
    iconBackgroundColor, 
    title, 
    subtitle, 
    buttonText, 
    buttonBackgroundColor,
    orderStatus,
    rowData,
    ordersActions,
    productsActions,
    customersActions,
    }) => {

        const dispatch = useDispatch()

        const closeModal = () => {
            setModalOpen(false)
        }
        
        const deleteRowOrder = () => {
            dispatch(deleteOrder(rowData))
            setModalOpen(false)
        }

        const deleteRowCustomer = () => {
            dispatch(deleteCustomer(rowData))
            setModalOpen(false)
        }

        const deleteRowProduct = () => {
            dispatch(deleteProduct(rowData))
            setModalOpen(false)
        }


        const updateRowOrderStatus = (status ) => {
            dispatch(updateOrderStatus(rowData, status))
            setModalOpen(false)
        }

        return (
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
                >
                    
                <div className="min-h-screen px-4 text-center">

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    { !orderStatus ? 
                        (
                            <div className="inline-block sm:w-full w-1/3 p-4 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                                <Dialog.Title
                                className='flex sm:flex-col flex-row space-x-3 items-center'
                                >
                                    <div className='rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px', padding: '8px', backgroundColor: `${iconBackgroundColor}` }}>
                                            {icon}
                                    </div>
                                    <h2 className='font-bold text-2xl'>{ title }</h2>
                                </Dialog.Title>
                                <div className='flex flex-col space-y-6'>
                                    <p className="mt-6  text-gray-400 sm:text-center">
                                        {subtitle}
                                    </p>
                                    <div className="flex w-full space-x-3 sm:flex-col-reverse sm:space-x-0 sm:items-center justify-end">
                                        <div className='hidden sm:block'>
                                            <CustomButton handleClick={()=> closeModal()} text='Close' backgroundColor='transparent' color='black' width='148px' height='44px'/>
                                        </div>
                                        <div className='sm:hidden'>
                                            <CustomButton handleClick={()=> closeModal()} text='Close' backgroundColor='transparent' color='black' width='100px' height='44px'/>
                                        </div>
                                        <CustomButton 
                                            handleClick={()=> {
                                                ordersActions && deleteRowOrder()
                                                customersActions && deleteRowCustomer()
                                                productsActions && deleteRowProduct()
                                                }} 
                                            text={buttonText} 
                                            backgroundColor={buttonBackgroundColor} 
                                            width='100px' 
                                            height='44px'
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="inline-block sm:w-full p-4 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">

                                <form className='space-y-6' style={{ padding: '16px 8px'}}>
                                    <div className='flex flex-row space-x-3 items-center'>
                                        <input type='radio' name='status' value='Pending' onClick={()=> updateRowOrderStatus('Pending')}/>
                                        <lable>Pending</lable>
                                    </div>
                                    <div className='flex flex-row space-x-3 items-center'>
                                        <input type='radio' name='status' value='Paid' onClick={()=> updateRowOrderStatus('Paid')}/>
                                        <lable>Paid</lable>
                                    </div>
                                    <div className='flex flex-row space-x-3 items-center'>
                                        <input type='radio' name='status' value='Fulfilled' onClick={()=> updateRowOrderStatus('Fulfilled')}/>
                                        <lable>Fulfilled</lable>
                                    </div>
                                    <div className='flex flex-row space-x-3 items-center'>
                                        <input type='radio' name='status' value='Delivered' onClick={()=> updateRowOrderStatus('Delivered')}/>
                                        <lable>Delivered</lable>
                                    </div>
                                    <div className='flex flex-row space-x-3 items-center'>
                                        <input type='radio' name='status' value='Cancelled' onClick={()=> updateRowOrderStatus('Cancelled')}/>
                                        <lable>Cancelled</lable>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition>
        )
}
export default CustomActionsModal