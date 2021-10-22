import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'

import CustomButton from '../custom-button/CustomButton.component'

import CancelSVG from '../svg/cancelSVG.component'

const ProductAddedModal = ({ isOpen, toggleModal }) => {

    const hoodie = useSelector((state)=> state.product.hoodie)

  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={toggleModal}
        >
        <div className="min-h-screen px-4 text-center">
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

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
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                className='flex flex-row justify-between'
                >
                    <h2 className='font-bold text-2xl'>Content purchased</h2>
                    <CustomButton handleClick={()=> toggleModal()} width='24px' height='24px' backgroundColor='transparent' icon={<CancelSVG/>}/>
                </Dialog.Title>
                <div className='flex flex-col space-y-6 justify-between'>
                    <div className="mt-2">
                        <p className="text-sm" style={{ color: '#0F172A' }}>
                            Your purchase was done successfully 
                        </p>
                    </div>
                    <div className='self-center'>
                        <img className=' rounded-lg object-cover' alt='test' style ={{ width: '238px', height: '188px' }}src={require('../../assets/images/movie-cover.jpg').default}/>
                    </div>
                    <div className="">
                        <CustomButton handleClick={()=> toggleModal()} text='Continue Exploring'width='100%' height='48px'/>
                    </div>
                </div>
            </div>
            </Transition.Child>
        </div>
        </Dialog>
    </Transition>
  )
}
export default ProductAddedModal