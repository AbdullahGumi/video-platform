import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios'
import Select from 'react-select'

import CustomButton from '../custom-button/CustomButton.component'
import CustomCardModal from '../custom-card-modal/customCardModal.component'

import CancelSVG from '../svg/cancelSVG.component'
import ArrowLeftSVG from '../svg/arrowLeftSVG.component'

// styles
import './addProduct.styles.css'

const AddProduct = ({ isModalOpen, setModalOpen }) => {
    const [isOpen, setOpen] = useState(false)
    const [isUploadVisible, setUploadVisible] = useState(true)

    const [image, setImage] = useState([])
    const [tempImage, setTempImage] = useState([])
    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [sizes, setSizes] = useState([])
    const [colors, setColors] = useState('')
    const [deliveryInfo, setDeliveryInfo] = useState('')
    const [costPrice, setCostPrice] = useState('')
    const [sellingPrice, setSellingPrice] = useState('')



    const toggleModal = () => {
        setOpen(!isOpen)
    }

    const handleImageDrop = acceptedFiles => {
		fetch(acceptedFiles.map(file => URL.createObjectURL(file)))
		.then(res => res.blob())
		.then(blob => {
		    let reader = new FileReader(); 
		    reader.readAsDataURL(blob); 
		    reader.onloadend = function () {
		    let base64String = reader.result.split(',').pop(); 
            let temp = 'https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGhvb2RpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
          
            // when ready use base64String instead of tempImage to store the actual uplodaded image
            setImage([...image, base64String])
            setTempImage([...tempImage, temp])
		}})
        setUploadVisible(false)
	}

    const addProduct = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/products', {
            "serialNo":1,
            "productID": Math.floor((1 + Math.random()) * 100),
            productName,
            productCategory,
            "quantity":1,
            costPrice,
            sellingPrice,
            // when ready use image instead of tempImage
            image: tempImage,
            sizes,
            "colors": colors.match(/\b(\w+)\b/g),
            "availability": 15,
            "info": productDescription,
            deliveryInfo
    
        })
        .then(res => console.log('res', res))
        .catch(err => console.log('err', err))

    }

    const getSizes = selectedOption => {
        selectedOption.map(option => setSizes([...sizes, option.value]))
    };

  return (
      <>
      {isModalOpen ? (
        <Dialog  as="div"
        className="fixed inset-0 z-50 flex flex-col items-end"
        style={{ backgroundColor: 'rgba(0,0,0, 0.3)' }} 
        open={isModalOpen} onClose={()=> setModalOpen(!isModalOpen)}>
            <CustomCardModal 
                isOpen={isOpen} 
                setModalOpen={setModalOpen} 
                title='Product Uploaded' 
                subtitle='Your product was successfully uploaded' 
                toggleModal={toggleModal} 
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 9.39996L7.5 4.20996" stroke="#FD9900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="#FD9900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.26953 6.95996L11.9995 12.01L20.7295 6.95996" stroke="#FD9900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 22.08V12" stroke="#FD9900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                }
                iconBackgroundColor='#FFF3E0'
            />
            <div className='flex sm:w-full p-6 overflow-y-auto flex-col space-y-6 h-screen w-2/5 bg-white justify-between'>
               
                <div className='flex flex-row justify-between items-start'>
                    <div className='flex flex-col space-y-3'>
                        <div className='flex flex-row sm:space-x-3 items-center'>
                            <div className='hidden sm:block'>
                                <CustomButton handleClick={()=> setModalOpen(false)} backgroundColor='transparent' width='20px' height='20px' icon={<ArrowLeftSVG/>}/>
                            </div>
                            <h2 className='font-bold text-2xl'>Add Product</h2>
                        </div>
                        <span className='text-gray-400'>Enter product details and upload</span>
                    </div>
                    <div className='sm:hidden'>
                        <CustomButton handleClick={()=> setModalOpen(false)} backgroundColor='transparent' width='20px' height='20px' icon={<CancelSVG/>}/>
                    </div>
                </div>
                <div className='flex flex-col space-y-3'>
                    <div className='flex flex-row space-x-3 items-center flex-nowrap'>
                        {image && image.map((image, i) => 
                            <img 
                            className='object-cover'
                            style={{ width: '80px', height: '80px' }} 
                            src={`data:image/jpeg;base64,${image}`} 
                            alt='product'
                            key={i}
                            />
                        )
                            
                        }
                        {isUploadVisible &&
                            <Dropzone onDrop={handleImageDrop} accept="image/*">
                                {({ getRootProps, getInputProps}) => {
                                    return (
                                        <div className='flex items-center justify-center' style={{ border: '1px dashed #C7C8D1',backgroundColor: '#FFF9F0', width: '80px', height: '80px' }}>
                                            <div className='flex items-center  justify-center cursor-pointer w-full h-full' {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 5H17.83L16 3H10V5H15.12L16.95 7H21V19H5V10H3V19C3 20.1 3.9 21 5 21H21C22.1 21 23 20.1 23 19V7C23 5.9 22.1 5 21 5ZM8 13C8 15.76 10.24 18 13 18C15.76 18 18 15.76 18 13C18 10.24 15.76 8 13 8C10.24 8 8 10.24 8 13ZM13 10C14.65 10 16 11.35 16 13C16 14.65 14.65 16 13 16C11.35 16 10 14.65 10 13C10 11.35 11.35 10 13 10ZM5 5H8V3H5V0H3V3H0V5H3V8H5V5Z" fill="#FF9800"/>
                                                </svg>
                                            </div>
                                        </div>
                                    );
                                }}
                            </Dropzone>
                        }
                        <span>Upload file</span>
                    </div>
                    <div className='flex flex-row space-x-3 items-center'>
                        <span>Add another</span>
                        <CustomButton 
                            handleClick={()=> setUploadVisible(true)} 
                            color='black' 
                            backgroundColor='transparent' 
                            width='20px' 
                            height='20px' 
                            icon={
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#171C17"/>
                                </svg>
                                }
                        />
                    </div>
                </div>
                <form onSubmit={(e)=> addProduct(e)} className='space-y-3'>
                    <div className='flex flex-col space-y-8 '>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>PRODUCT NAME</label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='text' 
                                onChange={(e)=> setProductName(e.target.value)} 
                                value={productName}
                                placeholder='Enter product name' 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>PRODUCT CATEGORY</label>
                            <Select
                                onChange={e=> setProductCategory(e.value)}
                                options={[
                                    { value: 'hoodie', label: 'Hoodie' },
                                    { value: 'zip-up hoodie', label: 'Zip-Up Hoodie' },
                                    { value: 't-shirt', label: 'T-shirt' },
                                  ]}
                                styles={{  control: styles => ({ 
                                    ...styles, 
                                    borderRadius: '4px',
                                    padding: '14px 4px' 
                                })}}
                            />
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>PRODUCT DESCRIPTION</label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='text' 
                                onChange={(e)=> setProductDescription(e.target.value)} 
                                value={productDescription}
                                placeholder='Enter product description' 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>AVAILABLE SIZES</label>
                            <Select
                                onChange={getSizes}
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
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>COLORS AVAILABE</label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='text' 
                                onChange={(e)=> setColors(e.target.value)}
                                value={colors}
                                placeholder='Enter available colors ' 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>DELIVERY INFORMATION <span>(Optional)</span></label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='text' 
                                onChange={(e)=> setDeliveryInfo(e.target.value)} 
                                value={deliveryInfo}
                                placeholder='Enter delivery information' 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>COST PRICE</label>
                            <input 
                            className='px-3 py-4 rounded' 
                            type='number'
                            min='0' 
                            onChange={(e)=> setCostPrice(e.target.value)} 
                            value={costPrice}
                            placeholder='$0.00' 
                            style={{ borderColor: '#C9CFC9' }}/>
                        </div>
                        
                        <div className='flex flex-col space-y-1 w-full'>
                            <label className='font-semibold text-xs'>SELLING PRICE</label>
                            <input 
                                className='px-3 py-4 rounded' 
                                type='number'
                                min='0'
                                onChange={(e)=> setSellingPrice(e.target.value)} 
                                value={sellingPrice}
                                placeholder='$0.00' 
                                style={{ borderColor: '#C9CFC9' }}
                            />
                        </div>
                    </div>
                    <div className='flex sm:space-x-0  space-x-3 self-end justify-end'>
                        <div className='sm:hidden flex'>
                            <CustomButton handleClick={()=> setModalOpen(false)} text='Cancel' color='black'  backgroundColor='transparent' width='105px' height='44px' />
                            <CustomButton handleClick={()=> toggleModal()} text='Upload product' width='178px' height='44px' />
                        </div>
                        <div className='hidden sm:block w-full' style={{ marginTop: '100px' }}>
                            <CustomButton handleClick={()=> toggleModal()} text='Upload product' width='100%' height='44px' />
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
export default AddProduct