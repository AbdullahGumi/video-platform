import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import axios from 'axios'
import { default as ReactSelect, components } from "react-select"
import { useSelector } from 'react-redux'

import CustomButton from '../custom-button/CustomButton.component'
import CustomCardModal from '../custom-card-modal/customCardModal.component'

import CancelSVG from '../svg/cancelSVG.component'
import ArrowLeftSVG from '../svg/arrowLeftSVG.component'


const Option = (props) => {
    const hoodies = useSelector(state => state.product.hoodies)

    return (
      <div>
        <components.Option {...props}>
        <div className='bg-red-300 flex flex-row '>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={(e) => console.log('target', e.target.checked)}
          />{" "}
          <label>{props.label}</label>
        </div>
        </components.Option>
      </div>
    );
  };

const NewOrder = ({ isModalOpen, setModalOpen }) => {
    const [isOpen, setOpen] = useState(false)
    const [customerName, setCustomerName] = useState('')
    const [products, setProducts] = useState([])
    const [amount, setAmount] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [deliveryDate, setDeliveryDate] = useState('')

    const toggleModal = () => {
        setOpen(!isOpen)
    }

    const addProduct = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/orders', {
            "serialNo": 1,
            "orderID": Math.random(),
            customerName,
            products,
            amount,
            dateCreated,
            deliveryDate,
            "status": "Pending"
          })
        .then(res => console.log('res', res))
        .catch(err => console.log('err', err))

    }

    const getProducts = selectedOption => {
        console.log('selectedOption', selectedOption)
        // selectedOption.map(option => setProducts([...products, option.value]))
    };


  return (
      <>
      {isModalOpen ? (
        <Dialog  as="div"
        className="fixed inset-0 z-50 flex flex-col items-end"
        style={{ backgroundColor: 'rgba(0,0,0, 0.3)' }} 
        open={isModalOpen} onClose={()=> setModalOpen(!isModalOpen)}>
            <div className='flex sm:w-full p-6 overflow-y-auto flex-col space-y-6 h-screen w-2/5 bg-white justify-between'>
            <CustomCardModal 
                isOpen={isOpen} 
                setModalOpen={setModalOpen} 
                title='Order Created' 
                subtitle='Your order was successfully created' 
                toggleModal={toggleModal} 
                icon={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11 14H4V12H11V14ZM14 10H4V8H14V10ZM14 6H4V4H14V6Z" fill="#46AC48"/>
                    </svg>
                }
                iconBackgroundColor='#F4FBF4'
            />
                <div className='flex flex-row justify-between items-start'>
                    <div className='flex flex-col space-y-3'>
                        <div className='flex flex-row sm:space-x-3 items-center'>
                            <div className='hidden sm:block'>
                                <CustomButton handleClick={()=> setModalOpen(false)} backgroundColor='transparent' width='20px' height='20px' icon={<ArrowLeftSVG/>}/>
                            </div>
                            <h2 className='font-bold text-2xl'>New Order</h2>
                        </div>
                        <span className='text-gray-400'>Fill all fields to create new order</span>
                    </div>
                    <div className='sm:hidden'>
                        <CustomButton handleClick={()=> setModalOpen(false)} backgroundColor='transparent' width='20px' height='20px' icon={<CancelSVG/>}/>
                    </div>
                    
                </div>
                <form onSubmit={(e)=> addProduct(e)} className='space-y-3'>
                    <div className='flex flex-col space-y-8 '>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>CUSTOMER NAME</label>
                            <input 
                            className='px-3 py-4 rounded' 
                            type='text' 
                            onChange={(e)=> setCustomerName(e.target.value)} 
                            value={customerName}                            
                            placeholder='Enter customer name' 
                            style={{ borderColor: '#C9CFC9' }}/>
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>PRODUCTS</label>
                            <ReactSelect
                                options={[
                                    { value: 'S', label: 'Small' },
                                    { value: 'M', label: 'Medium' },
                                    { value: 'L', label: 'Large' },
                                    { value: 'XL', label: 'Extra Large' },
                                    { value: 'XXL', label: 'Extra Extra Large' }
                                  ]}
                                components={{
                                    Option
                                }}
                                onChange={getProducts}
                                value={products}
                            />   
                            <ReactSelect
                                onChange={getProducts}
                                isMulti
                                options={[
                                    { value: 'S', label: 'Small' },
                                    { value: 'M', label: 'Medium' },
                                    { value: 'L', label: 'Large' },
                                    { value: 'XL', label: 'Extra Large' },
                                    { value: 'XXL', label: 'Extra Extra Large' }
                                  ]}
                                styles={{  control: styles => ({ 
                                    ...styles, 
                                    borderRadius: '4px',
                                    padding: '14px 4px' 
                                })}}
                            />                         
                            {/* <select className='px-3 py-4 rounded' id="categories" name="categories">
                                <option value="shirt">shirt</option>
                                <option value="shirt">shirt</option>
                                <option value="shirt">shirt</option>
                            </select> */}
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>AMOUNT</label>
                            <input 
                            className='px-3 py-4 rounded' 
                            type='text' 
                            onChange={(e)=> setAmount(e.target.value)} 
                            value={amount}                            
                            placeholder='Autoloaded' 
                            style={{ borderColor: '#C9CFC9' }}/>
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>DATE CREATED</label>
                            <input 
                            className='px-3 py-4 rounded' 
                            type='date' 
                            onChange={(e)=> setDateCreated(e.target.value)} 
                            value={dateCreated}                            
                            placeholder='Autoloaded' 
                            style={{ borderColor: '#C9CFC9' }}/>
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>DELIVERY DATE</label>
                            <input 
                            className='px-3 py-4 rounded' 
                            type='date' 
                            onChange={(e)=> setDeliveryDate(e.target.value)} 
                            value={deliveryDate}                            
                            placeholder='Select date' 
                            style={{ borderColor: '#C9CFC9' }}/>
                        </div>
                    </div>
                    <div className='flex sm:space-x-0 space-x-3 self-end justify-end'>
                        <div className='sm:hidden flex'>
                            <CustomButton handleClick={()=> setModalOpen(false)} text='Cancel' color='black'  backgroundColor='transparent' width='105px' height='44px' />
                            <CustomButton handleClick={()=> toggleModal()} text='Create Order' width='178px' height='44px' />
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
export default NewOrder