import { Dialog, RadioGroup} from '@headlessui/react'
import { useState } from "react";

import CustomButton from '../custom-button/CustomButton.component'

import CancelSVG from '../svg/cancelSVG.component'


    const FilterOrders = ({ isFilterOpen, setFilterOpen, setAllFilters }) => {

    const [date, setDate] = useState('')
    const [status, setStatus] = useState('')
    
    const filteOrdres = () => {
        setAllFilters([
            {id:'status', value: status},
            {id:'dateCreated', value: date}
        ])
        setFilterOpen(false)
    };

    return (
        <Dialog
            as="div"
            className="fixed flex justify-end inset-0 z-40 overflow-y-auto "
            style={{ backgroundColor: 'rgb(0,0,0,0.3)' }}
            open={isFilterOpen}
            onClose={()=> setFilterOpen(!isFilterOpen)}
        >
            <div className='flex flex-col justify-between sm:self-end bg-white p-6 w-2/5 sm:w-full sm:rounded-tl-3xl sm:rounded-tr-3xl text-left space-y-6'>
                <div className='flex flex-col space-y-3'>
                    <div className='flex flex-row justify-between items-center'>
                        <span className='font-bold text-2xl'>Filter</span>
                        <CustomButton handleClick={()=> setFilterOpen(!isFilterOpen)} width='20px' height='20px' backgroundColor='transparent' icon={<CancelSVG/>}/>
                    </div>
                    <div className=''>
                        <span style={{ color: '#73758C', fontSize: '14px' }}>Choose your preferred mode of filtering your orders</span>
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <span className='font-semibold'>Status</span>
                    <div className='w-full rounded ' style={{ border: '0.5px solid #C7C8D1', padding: '16px 8px' }}>
                    <RadioGroup value={status} onChange={setStatus}>
                        <div className='flex flex-row flex-wrap space-y-6 space-x-3'>
                            <RadioGroup.Option className='flex items-end focus:outline-none cursor-pointer' value="">
                                {({ checked }) => (
                                    <div className='rounded-full' style={{ padding: '8px 24px', backgroundColor: `${checked ? '#46AC48' : '#F7F7F8'}`, color: `${checked ? '#FFF' : '#000'}` }}>
                                        <span>All</span>
                                    </div>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option className='flex items-end focus:outline-none cursor-pointer' value="Pending">
                                {({ checked }) => (
                                    <div className='rounded-full' style={{ padding: '8px 24px', backgroundColor: `${checked ? '#46AC48' : '#F7F7F8'}`, color: `${checked ? '#FFF' : '#000'}` }}>
                                        <span>Pending</span>
                                    </div>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option className='flex items-end focus:outline-none cursor-pointer' value="Paid">
                                {({ checked }) => (
                                    <div className='rounded-full' style={{ padding: '8px 24px', backgroundColor: `${checked ? '#46AC48' : '#F7F7F8'}`, color: `${checked ? '#FFF' : '#000'}` }}>
                                        <span>Paid</span>
                                    </div>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option className='flex items-end focus:outline-none cursor-pointer' value="Fulfilled">
                                {({ checked }) => (
                                    <div className='rounded-full' style={{ padding: '8px 24px', backgroundColor: `${checked ? '#46AC48' : '#F7F7F8'}`, color: `${checked ? '#FFF' : '#000'}` }}>
                                        <span>Fulfilled</span>
                                    </div>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option className='flex items-end focus:outline-none cursor-pointer' value="Delivered">
                                {({ checked }) => (
                                    <div className='rounded-full' style={{ padding: '8px 24px', backgroundColor: `${checked ? '#46AC48' : '#F7F7F8'}`, color: `${checked ? '#FFF' : '#000'}` }}>
                                        <span>Delivered</span>
                                    </div>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option className='flex items-end focus:outline-none cursor-pointer' value="Cancelled">
                                {({ checked }) => (
                                    <div className='rounded-full' style={{ padding: '8px 24px', backgroundColor: `${checked ? '#46AC48' : '#F7F7F8'}`, color: `${checked ? '#FFF' : '#000'}` }}>
                                        <span>Cancelled</span>
                                    </div>
                                )}
                            </RadioGroup.Option>
                        </div>
                    </RadioGroup>
                    </div>
                    <hr style={{ border: '1px dashed #C7C8D1', marginTop: '30px' }} />
                </div>

                <div className='flex flex-col space-y-4'>
                    <span className='font-semibold text-lg'>Date</span>
                    <div className='flex flex-col space-y-3'>
                        <label className='text-xs font-semibold'>DATE</label>
                        <input type='date' value={date} onChange={e=> setDate(e.target.value)}/>
                    </div>
                </div>
            
                <div className='flex flex-row space-x-1 self-end'>
                    <CustomButton 
                        handleClick={()=> setFilterOpen(!isFilterOpen)} 
                        width='100px' 
                        height='44px' 
                        text='Cancel' 
                        color='black' 
                        backgroundColor='transparent' 
                    />
                    <CustomButton 
                        handleClick={()=> filteOrdres()} 
                        width='100px' 
                        height='44px' 
                        text='Apply' 
                    />
                </div>

            </div>
        </Dialog>
    );
}

export default FilterOrders