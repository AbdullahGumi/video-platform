import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import CustomButton from '../custom-button/CustomButton.component'

// import CancelSVG from '../svg/cancelSVG.component'

const CustomCardModal = ({ isOpen, toggleModal, setModalOpen, icon, iconBackgroundColor, title, subtitle, buttonText }) => {

    const closeModal = () => {
        setModalOpen(false)
        toggleModal()
    }

  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
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
                    <div className="sm:w-full w-24 self-end">
                        <CustomButton handleClick={()=> closeModal()} text='Done' width='100%' height='48px'/>
                    </div>
                </div>
            </div>
            </Transition.Child>
        </div>
        </Dialog>
    </Transition>
  )
}
export default CustomCardModal