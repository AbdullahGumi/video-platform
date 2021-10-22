import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/solid'

import CustomButton from "../components/custom-button/CustomButton.component"
import Dropzone from 'react-dropzone';

const Settings = () => {

    const [image, setImage] = useState([])
    const [isUploadVisible, setUploadVisible] = useState(true)


    const handleImageDrop = acceptedFiles => {
		fetch(acceptedFiles.map(file => URL.createObjectURL(file)))
		.then(res => res.blob())
		.then(blob => {
		    let reader = new FileReader(); 
		    reader.readAsDataURL(blob); 
		    reader.onloadend = function () {
		    let base64String = reader.result.split(',').pop(); 
          
            // when ready use base64String instead of tempImage to store the actual uplodaded image
            setImage([...image, base64String])
		}})
        setUploadVisible(false)
	}   

    return (
        <div className='flex flex-col sm:space-y-0 sm:px-0 sm:py-0 space-y-12 px-6 py-12 text-left'>
              <div className='sm:hidden'>
                <h2 className='font-bold text-2xl'>Edit Profile</h2>
              </div>
              <div className='w-full bg-white rounded-lg space-y-8 p-6'>
                <div className='space-y-2'>
                    <h2 className='font-semibold text-lg sm:p-0 p-2'>Personal Details</h2>
                    <hr className=''/>
                </div>
                <form className='space-y-8'>
                <label className='font-semibold text-xs'>UPDATE PROFILE PICTURE</label>

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
                    </div>
                    <div className='flex sm:flex-col sm:space-x-0 sm:space-y-6 flex-row space-x-14'>
                        <div className='flex sm:w-full flex-col space-y-1 w-1/2'>
                            <label className='font-semibold text-xs'>USERNAME</label>
                            <input className='px-3 py-4 rounded' type='text' placeholder='Update usernaem' style={{ borderColor: '#C9CFC9' }}/>
                        </div>
                        <div className='flex sm:w-full flex-col space-y-1 w-1/2'>
                            <label className='font-semibold text-xs'>EMAIL</label>
                            <input className='px-3 py-4 rounded' type='text' placeholder='Update email' style={{ borderColor: '#C9CFC9' }}/>
                        </div>
                    </div>
                    <div className='flex sm:flex-col sm:space-x-0 sm:space-y-6 flex-row space-x-14'>
                        <div className='flex sm:w-full flex-col space-y-1 w-1/2'>
                            <label className='font-semibold text-xs'>COUNTRY</label>
                            <input className='px-3 py-4 rounded' type='email' placeholder='Update country' style={{ borderColor: '#C9CFC9' }}/>
                        </div>
                    </div>
                    <div>
                    <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className={`flex justify-between w-full border-b px-4 py-2 focus:outline-none`}
                                                >
                                <span className='font-semibold text-lg'>Security</span>
                                <ChevronRightIcon
                                style={{ transition: 'all 0.5s linear', transform: `${ open ? 'rotate(90deg)' : 'rotate(0deg)'}` }}
                                className={'w-5 h-5'}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="pt-8 space-y-8">
                            <div className='flex sm:flex-col sm:space-x-0 sm:space-y-6 flex-row space-x-14'>
                                <div className='flex flex-col space-y-1 sm:w-full w-1/2'>
                                    <label className='font-semibold text-xs'>CURRENT PASSWORD</label>
                                    <input className='px-3 py-4 rounded' type='email' placeholder='' style={{ borderColor: '#C9CFC9' }}/>
                                </div>
                                <div className='invisible sm:hidden w-1/2'/>
                            </div>
                            <div className='flex sm:flex-col sm:space-x-0 sm:space-y-6 flex-row space-x-14'>
                                <div className='flex flex-col space-y-1 sm:w-full w-1/2'>
                                    <label className='font-semibold text-xs'>NEW PASSWORD</label>
                                    <input className='px-3 py-4 rounded' type='email' placeholder='' style={{ borderColor: '#C9CFC9' }}/>
                                </div>
                                <div className='flex flex-col space-y-1 sm:w-full w-1/2'>
                                    <label className='font-semibold text-xs'>CONFIRM NEW PASSWORD</label>
                                    <input className='px-3 py-4 rounded' type='text' placeholder='' style={{ borderColor: '#C9CFC9' }}/>
                                </div>
                            </div>
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                    </div>
                    <div className=''>
                        <div className='flex sm:hidden flex-row space-x-3 self-end justify-end'>
                            <CustomButton text='Cancel' color='black'  backgroundColor='transparent' width='105px' height='44px' />
                            <CustomButton text='Update' width='105px' height='44px' />
                        </div>
                        <div className='hidden sm:flex'>
                            <CustomButton text='Update' width='100%' height='44px' />
                        </div>
                    </div>
              </form>
              </div>
        </div>
    )
}

export default Settings