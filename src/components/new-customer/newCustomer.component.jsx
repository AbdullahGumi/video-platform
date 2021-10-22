import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import axios from 'axios'

import CustomButton from '../custom-button/CustomButton.component'
import CustomCardModal from '../custom-card-modal/customCardModal.component'

import CancelSVG from '../svg/cancelSVG.component'
import ArrowLeftSVG from '../svg/arrowLeftSVG.component'


const NewCustomer = ({ isModalOpen, setModalOpen }) => {
    const [isOpen, setOpen] = useState(false)
    const [customerName, setCustomerName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [address, setAddress] = useState('')
    
    const toggleModal = () => {
        setOpen(!isOpen)
    }

    const addProduct = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/customers', {
            "serialNo": 1,
            customerName,
            email,
            phoneNumber,
            country,
            state,
            address
          })
        .then(res => console.log('res', res))
        .catch(err => console.log('err', err))

    }

  return (
      <>
      {isModalOpen ? (
        <Dialog  as="div"
        className="fixed inset-0 z-40 flex flex-col items-end"
        style={{ backgroundColor: 'rgba(0,0,0, 0.3)' }} 
        open={isModalOpen} onClose={()=> setModalOpen(!isModalOpen)}>
            <div className='flex p-6 overflow-y-auto flex-col space-y-6 h-screen sm:w-full w-2/5 bg-white justify-between'>
            <CustomCardModal 
                isOpen={isOpen} 
                setModalOpen={setModalOpen} 
                title='Customer Added' 
                subtitle={`${customerName} have been successfully added`} 
                icon={
                    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z" fill="#FD9900"/>
                    </svg>
                }
                iconBackgroundColor='#FFF3E0'
                toggleModal={toggleModal} 
                />
                <div className='flex flex-row justify-between items-start'>
                    <div className='flex flex-col space-y-3'>
                        <div className='flex flex-row sm:space-x-3 items-center'>
                            <div className='hidden sm:block'>
                                <CustomButton handleClick={()=> setModalOpen(false)} backgroundColor='transparent' width='20px' height='20px' icon={<ArrowLeftSVG/>}/>
                            </div>
                            <h2 className='font-bold text-2xl'>New Customer</h2>
                        </div>
                        <span className='text-gray-400'>Fill all fields to add a customer</span>
                    </div>
                    <div className='sm:hidden'>
                        <CustomButton handleClick={()=> setModalOpen(false)} backgroundColor='transparent' width='20px' height='20px' icon={<CancelSVG/>}/>
                    </div>
                </div>
                <form onSubmit={(e)=> addProduct(e)} className='space-y-3'>
                    <div className='flex flex-col space-y-8 '>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>NAME</label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='text' 
                                onChange={(e)=> setCustomerName(e.target.value)} 
                                value={customerName}
                                placeholder='Enter customer name' 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>EMAIL ADDRESS</label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='email' 
                                onChange={(e)=> setEmail(e.target.value)} 
                                value={email}
                                placeholder="Enter customer's email address" 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>PHONE NUMBER</label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='text' 
                                onChange={(e)=> setPhoneNumber(e.target.value)} 
                                value={phoneNumber}
                                placeholder="Enter customer's phone number" 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>COUNTRY</label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='text'
                                onChange={(e)=> setCountry(e.target.value)} 
                                value={country}                                 
                                placeholder='country' 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>STATE</label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='text'
                                onChange={(e)=> setState(e.target.value)} 
                                value={state}                                 
                                placeholder='state' 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>HOME ADDRESS</label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='text'
                                onChange={(e)=> setAddress(e.target.value)} 
                                value={address}                                 
                                placeholder='address' 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                    </div>
                    <div className='flex sm:space-x-0 space-x-3 self-end justify-end'>
                        <div className='sm:hidden flex'>
                            <CustomButton handleClick={()=> setModalOpen(false)} text='Cancel' color='black'  backgroundColor='transparent' width='105px' height='44px' />
                            <CustomButton handleClick={()=> toggleModal()} text='Add Customer' width='178px' height='44px' />
                        </div>
                        <div className='hidden sm:block w-full' style={{ marginTop: '100px' }}>
                            <CustomButton handleClick={()=> toggleModal()} text='Add Customer' width='100%' height='44px' />
                        </div>
                    </div>
            </form>
            </div>
        </Dialog>
      ) : (null)

      }
      </>
  )
}
export default NewCustomer